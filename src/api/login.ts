import axios from "axios";
import formik from "formik";

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

export { postLogin };
