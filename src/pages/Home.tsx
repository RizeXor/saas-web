import React, { useContext } from "react";
import SubscriptionComponent from "../components/Subscription";
import { useSubscriptions } from "../api/subscriptions";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const subscriptions = useSubscriptions();

  const listSubscriptions = () => {
    return subscriptions.data?.map((sub) => (
      <SubscriptionComponent key={sub.plan.product.id} sub={sub} />
    ));
  };

  const noSubscriptions = () => (
    <div className="d-flex flex-column align-items-start mt-3">
      <p className="text-white-50 mb-2">
        No subscriptiions, head over to shop to buy one
      </p>
      <Link to="/shop" className="btn btn-primary">
        Shop
      </Link>
    </div>
  );

  return (
    <div className="container mt-3">
      <h1>Dashboard</h1>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mr-2 mb-0">
          Welcome, {user.first_name} {user.last_name}
        </p>
      </div>
      <hr />
      <h5>Subscriptions</h5>
      {subscriptions.isLoading ? (
        <>
          <i className="fa fa-spinner fa-spin fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </>
      ) : subscriptions.data?.length === 0 ? (
        noSubscriptions()
      ) : (
        <div className="row mt-3">{listSubscriptions()}</div>
      )}
    </div>
  );
};

export default HomePage;
