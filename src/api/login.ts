import axios from "axios";
import { useMutation } from "react-query";

const postLogin = async (values: any) => {
  try {
    const { data } = await axios.post("/api/v1/auth/login/", {
      username: values.email,
      password: values.password,
    });
    console.log(data);
    localStorage.setItem("bid", data.token);
    return data;
  } catch (e) {
    console.log(e);
  }
};

type LoginResponse = {};

const useLoginMutation = () => {
  return useMutation(
    (values: { email: string; password: string }) =>
      axios.post<LoginResponse>("/api/v1/auth/login/", {
        username: values.email,
        password: values.password,
      }),
    {
      onSuccess: () => {
        console.log("Hello world");
      },
      onError: (err: any) => {
        console.log(Object.keys(err));
      },
    }
  );
};

export { postLogin, useLoginMutation };
