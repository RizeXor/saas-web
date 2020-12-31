import React, { useContext } from "react";
import SubscriptionComponent from "../components/Subscription";
import { useSubscriptions } from "../api/subscriptions";
import { UserContext } from "../context/user";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const subscriptions = useSubscriptions();

  const listSubscriptions = subscriptions.data?.map((sub) => (
    <SubscriptionComponent key={sub.plan.product.id} sub={sub} />
  ));

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
      ) : (
        <div className="row mt-3">{listSubscriptions}</div>
      )}
    </div>
  );
};

export default HomePage;
