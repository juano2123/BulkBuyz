import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
// import InicioSesion from "./pages/Sign in/InicioSesion";
import { BrowserRouter } from "react-router-dom";
import RouterDom from "./Routes/RouterDom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterDom />
    </BrowserRouter>
=======
// import AccountMenu from "./pages/Home/AccountMenu";
// import CalificarServicio from "./pages/Account/CalificarServicio";
// import {ForgetPassword} from "./pages/Sign in/ForgetPassword";

// import AccountMenu from "./pages/Home/AccountMenu";
// import AccountMenu from "./pages/Home/AccountMenu";
// import product_detail from "./pages/Home/ProductDetail";

import reportWebVitals from "./reportWebVitals";

// import InfoAccount from "./pages/Account/InfoAccount";
import InicioSesion from "./pages/Sign in/InicioSesion";
import InfoAccount from "./pages/Account/InfoAccount";
import MensajeP from "./pages/Proveedor/MensajeP";
import LogInadmin from "./pages/Administrador/LogInadmin";
import MensajeC from "./pages/Account/MensajeC";
import Publicarproducto from "./pages/Proveedor/Publicarproducto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Publicarproducto />
>>>>>>> 1a9247c90f7926ba3c59e2316dce6e165587f64b
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
