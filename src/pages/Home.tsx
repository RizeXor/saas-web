import React from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import dayjs from 'dayjs';
import SubscriptionComponent from '../components/Subscription';
import { Subscription } from '../types/subscription';

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

  const listSubscriptions = data?.map(sub =>
    <SubscriptionComponent key={sub.plan.product.id} sub={sub} />);

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
