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
        <div className="col-5 mt-3">
          <h1>ServerStack</h1>
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
            <button className="btn btn-primary btn-block" disabled={formik.isSubmitting} type="submit">
              {formik.isSubmitting && <i className="fa fa-spinner fa-spin" role="status" aria-hidden="true"></i>}
              <span>
                {!formik.isSubmitting && <i aria-hidden="true" className="fa fa-sign-in"></i>}
                {formik.isSubmitting ? " Loading" : " Log in"}
              </span>
            </button>
            <pre></pre>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
