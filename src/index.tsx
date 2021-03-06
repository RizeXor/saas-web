import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";

axios.defaults.baseURL = "http://localhost:8000";
const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
