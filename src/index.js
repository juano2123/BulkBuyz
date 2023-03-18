import React from "react";
import ReactDOM from "react-dom/client";
import Calificarservicio from "./pages/Account/Calificarservicio";
//import { Cambiarcontra } from "./pages/Account/Cambiarcontra";
//import { Cambiarcorreo } from "./pages/Account/Cambiarcorreo";
//import InfoAccount from "./pages/Account/InfoAccount";
//import Setquestions from "./pages/Account/Setquestions";
//import Uploadphoto from "./pages/Account/Uploadphoto";
//import ProductDetail from "./pages/Home/ProductDetail";
//import { ForgetPassword } from "./pages/Sign in/ForgetPassword";
import reportWebVitals from "./reportWebVitals";
//import BarNoSearch from "./shared/components/BarNoSearch";
//import ProductoDetalleMasterPro from "./shared/components/ProductoDetalleMasterPro";
//import Securquestion from "./shared/components/Securquestion"
//import InicioSesion from "./pages/Sign in/InicioSesion";
//import ProductoDetalleMasterPro from "./shared/components/ProductoDetalleMasterPro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    < Calificarservicio/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
