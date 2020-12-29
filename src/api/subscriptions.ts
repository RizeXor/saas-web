import { Subscription } from '../types/subscription';
import axios from 'axios';

const fetchSubscriptions = async (): Promise<Subscription[]> => {
  const res = await axios.get('/api/v1/subscriptions', {
    headers: {
      "Authorization": `Token ${localStorage.getItem("bid")}`
    }
  });
  return res.data;
};

export { fetchSubscriptions };
