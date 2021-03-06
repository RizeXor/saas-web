import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import { useLoginMutation } from "../api/login";

const LoginPage = () => {
  const loginMutation = useLoginMutation();
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "testadmin@gmail.com",
      password: "testpassword",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      loginMutation.mutate(
        {
          email,
          password,
        },
        {
          onSuccess: (data) => {
            setUser(
              data.data.user || {
                email: "",
                first_name: "",
                last_name: "",
              }
            );
          },
        }
      );
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-3">
          <h1>Log In</h1>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                required
                value={formik.values.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="passwordHelp"
                placeholder="Enter password"
                name="password"
                onChange={formik.handleChange}
                required
                value={formik.values.password}
              />
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary btn-block"
                disabled={loginMutation.isLoading}
                type="submit"
              >
                {loginMutation.isLoading ? (
                  <i
                    className="fa fa-spinner fa-spin"
                    role="status"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i aria-hidden="true" className="fa fa-sign-in"></i>
                )}
                {loginMutation.isLoading ? " Loading" : " Log in"}
              </button>
              <button
                className="btn btn-secondary btn-block ml-2 mt-0"
                type="button"
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                {" Create Account"}
              </button>
            </div>
            {/* <pre className="text-danger">  */}
            {/*   {loginMutation.isError && */}
            {/*     JSON.stringify(loginMutation.error?.response.data, null, 4)} */}
            {/* </pre> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
