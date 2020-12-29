import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import dayjs from 'dayjs';
import SubscriptionComponent from '../components/Subscription';
import { Subscription } from '../types/subscription';
import { fetchSubscriptions } from '../api/subscriptions';
import { useMe } from '../api/me';

const HomePage = () => {
  const subscriptions = useQuery<Subscription[], AxiosError>('subscriptions', fetchSubscriptions);
  const me = useMe();

  if (subscriptions.isLoading || me.isLoading) {
    return <div className="container mt-3">
      <div className="justify-content-center row">
        <i className="fa fa-spinner fa-spin fa-lg"></i>
      </div>
    </div>
  }

  if (me.isError) {
    return <span>Error: {me.error?.message}</span>
  }

  if (subscriptions.isError) {
    return <span>Error: {subscriptions.error?.message}</span>
  }

  const listSubscriptions = subscriptions.data?.map(sub => <SubscriptionComponent key={sub.plan.product.id} sub={sub} />);

  return (
    <div className="container mt-3">
      <h1>Dashboard</h1>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mr-2 mb-0">Welcome, {me.data?.first_name} {me.data?.last_name}</p>
        <button className="btn btn-danger btn-sm">Logout</button>
      </div>
      <hr />
      <h5>Subscriptions</h5>
      <div className="row mt-3">
        {listSubscriptions}
      </div>
    </div>
  );
};

export default HomePage;
