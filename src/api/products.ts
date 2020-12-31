import { Product } from "../types/product";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("/api/v1/products/");
  return res.data;
};

const useProducts = () => {
  return useQuery<Product[], AxiosError>("product", fetchProducts, {
    retry: false,
  });
};

export { useProducts };
