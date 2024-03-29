import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterDom from "./Routes/RouterDom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RouterDom />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
