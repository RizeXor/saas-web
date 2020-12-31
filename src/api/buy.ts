import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";
import { Buy } from "../types/buy";

export const useBuy = () => {
  return useMutation((price_id: string) =>
    axios.post(
      "/api/v1/checkout/",
      { price_id },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("bid")}`,
        },
      }
    )
  );
};
