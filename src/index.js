import React from "react";
import ReactDOM from "react-dom/client";
// import AccountMenu from "./pages/Home/AccountMenu";
// import CalificarServicio from "./pages/Account/CalificarServicio";
// import {ForgetPassword} from "./pages/Sign in/ForgetPassword";

// import AccountMenu from "./pages/Home/AccountMenu";
// import AccountMenu from "./pages/Home/AccountMenu";
// import product_detail from "./pages/Home/ProductDetail";

import reportWebVitals from "./reportWebVitals";

// import InfoAccount from "./pages/Account/InfoAccount";
import InicioSesion from "./pages/Sign in/InicioSesion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InicioSesion />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
