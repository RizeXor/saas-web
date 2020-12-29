import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: 'testuser@gmail.com',
      password: 'testpassword',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const { data } = await axios.post('/api/v1/auth/login/', {
          username: values.email,
          password: values.password,
        });
        console.log(data);
        localStorage.setItem("bid", data.token);
        setSubmitting(false);
      } catch (e) {
        console.log(e);
      }
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
                value={formik.values.email} />
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
                value={formik.values.password} />
            </div>
            <div className="d-flex">
              <button className="btn btn-primary btn-block" disabled={formik.isSubmitting} type="submit">
                {formik.isSubmitting ? <i className="fa fa-spinner fa-spin" role="status" aria-hidden="true"></i> : <i aria-hidden="true" className="fa fa-sign-in"></i>}
                {formik.isSubmitting ? " Loading" : " Log in"}
              </button>
              <button className="btn btn-secondary btn-block ml-2 mt-0" type="button">
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
