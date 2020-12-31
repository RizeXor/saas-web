import { Subscription } from "../types/subscription";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const fetchSubscriptions = async (): Promise<Subscription[]> => {
  const res = await axios.get("/api/v1/subscriptions", {
    headers: {
      Authorization: `Token ${localStorage.getItem("bid")}`,
    },
  });
  return res.data;
};

const useSubscriptions = () => {
  return useQuery<Subscription[], AxiosError>(
    "subscriptions",
    fetchSubscriptions,
    {
      retry: false,
    }
  );
};

export { fetchSubscriptions, useSubscriptions };
