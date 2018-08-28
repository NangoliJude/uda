import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundry from "./ErrorBoundry";

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </BrowserRouter>,
  document.getElementById("root")
);
