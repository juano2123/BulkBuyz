import React from "react";
import ReactDOM from "react-dom/client";
import AccountMenu from "./pages/Home/AccountMenu";
import CalificarServicio from "./pages/Account/CalificarServicio";
// import { CambiarContra } from "./pages/Account/Cambiarcontra";
// import AccountMenu from "./pages/Home/AccountMenu";
// import AccountMenu from "./pages/Home/AccountMenu";
// import product_detail from "./pages/Home/ProductDetail";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalificarServicio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
