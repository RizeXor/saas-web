import React from 'react';
import dayjs from 'dayjs';
import { Subscription } from '../types/subscription';

type SubscriptionComponentProps = {
  sub: Subscription
};

const SubscriptionComponent: React.FC<SubscriptionComponentProps> = ({ sub: { plan, current_period_end, current_period_start, days_until_due, status } }) => {
  return (
    <div className="col-lg-4" key={plan.product.id}>
      <div className="card rounded">
        {plan.product.images[0] && <img src={plan.product.images[0]} alt={plan.product.name + " image"} className="card-img-top rounded-top" height={210} />}
        <div className="card-body">
          <h5 className="card-title">{plan.product.name + " "}
            <span className={status === "active" ? "badge badge-success" : "badge badge-danger"}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </h5>
          <p className="card-text">
            Billed: {plan.currency === 'usd' ? '$' : plan.currency}{plan.amount.toString().slice(0, -2) + "." + plan.amount.toString().slice(-2)} every {plan.interval}
          </p>
        </div>
        <div className="card-footer text-white-50 d-flex justify-content-between">
          <small>Expires on {dayjs.unix(current_period_end).format("DD MMM YYYY")}</small>
          <small>{days_until_due} {days_until_due === 1 ? "day" : "days"} left</small>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComponent;
