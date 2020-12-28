import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import dayjs from 'dayjs';

type Product = {
  id: string,
  created: number,
  name: string
};

type Plan = {
  amount: number,
  interval: string,
  currency: string,
  product: Product
};

type Subscription = {
  current_period_end: number,
  current_period_start: number,
  days_until_due: number,
  status: string,
  plan: Plan
};

const fetchSubscriptions = async (): Promise<Subscription[]> => {
  const res = await axios.get('/api/v1/subscriptions', {
    headers: {
      "Authorization": `Token ${localStorage.getItem("bid")}`
    }
  });
  return res.data;
};

const HomePage = () => {
  const { isLoading, isError, data, error } = useQuery<Subscription[], AxiosError>('subscriptions', fetchSubscriptions);

  if (isLoading) {
    return <div className="container mt-3">
      <div className="justify-content-center row">
        <i className="fa fa-spinner fa-spin fa-lg"></i>
      </div>
    </div>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  const listSubscriptions = data?.map(sub => (
    <div className="col-sm-4" key={sub.plan.product.id}>
      <div className="card shadow rounded">
        <div className="card-body">
          <h5 className="card-title">{sub.plan.product.name + " "}
            <span className={sub.status === "active" ? "badge badge-success" : "badge badge-danger"}>
              {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
            </span>
          </h5>
          <p className="card-text">
            Billed: {sub.plan.currency === 'usd' ? '$' : sub.plan.currency}{sub.plan.amount.toString().slice(0, -2) + "." + sub.plan.amount.toString().slice(-2)} every {sub.plan.interval}, {sub.days_until_due} days left
          </p>
        </div>
        <div className="card-footer text-white-50">
          <small>Expires on {dayjs.unix(sub.current_period_end).format("DD MMM YYYY")}</small>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-3">
      <h1>Subscriptions</h1>
      <hr />
      <div className="row mt-3">
        {listSubscriptions}
      </div>
    </div>
  );
};

export default HomePage;
