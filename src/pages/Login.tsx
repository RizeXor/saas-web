import React, { useContext } from "react";
import { useFormik } from "formik";
import { postLogin } from "../api/login";
import { UserContext } from "../context/user";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "testuser@gmail.com",
      password: "testpassword",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const loginResponse = await postLogin({
        email: values.email,
        password: values.password,
      });
      setUser(loginResponse.user);
      setSubmitting(false);
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
                disabled={formik.isSubmitting}
                type="submit"
              >
                {formik.isSubmitting ? (
                  <i
                    className="fa fa-spinner fa-spin"
                    role="status"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i aria-hidden="true" className="fa fa-sign-in"></i>
                )}
                {formik.isSubmitting ? " Loading" : " Log in"}
              </button>
              <button
                className="btn btn-secondary btn-block ml-2 mt-0"
                type="button"
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                {" Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
