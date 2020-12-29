import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { Me } from '../types/me';

const fetchMe = async (): Promise<Me> => {
  const res = await axios.get('/api/v1/me', {
    headers: {
      "Authorization": `Token ${localStorage.getItem("bid")}`
    }
  });
  return res.data;
};

const useMe = () => {
  return useQuery<Me, AxiosError>('me', fetchMe);
};

export { useMe, fetchMe };
