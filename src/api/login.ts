import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { Me } from "../types/me";

// const postLogin = async (values: any) => {
//   try {
//     const { data } = await axios.post("/api/v1/auth/login/", {
//       username: values.email,
//       password: values.password,
//     });
//     localStorage.setItem("bid", data.token);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

type LoginResponse = {
  token: string;
  user: Me;
};

const useLoginMutation = () => {
  return useMutation(
    (values: { email: string; password: string }) =>
      axios.post<LoginResponse>("/api/v1/auth/login/", {
        username: values.email,
        password: values.password,
      }),
    {
      onSuccess: (data) => {
        localStorage.setItem("bid", data.data.token);
      },
      onError: (err: any) => {
        const errorMsg = err.response.data.non_field_errors[0];
        toast.error(errorMsg, {
          autoClose: 5000,
        });
      },
    }
  );
};

export { useLoginMutation };
