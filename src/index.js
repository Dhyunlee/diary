import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";
import { reset } from "./styles/reset";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
