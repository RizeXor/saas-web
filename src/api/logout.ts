import axios, { AxiosError } from "axios";

const postLogout = async () => {
  try {
    await axios.post<null>("/api/v1/auth/logout/", null, {
      headers: {
        Authorization: `Token ${localStorage.getItem("bid")}`,
      },
    });
    localStorage.removeItem("bid");
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }
    console.log(error);
  }
};

export { postLogout };
