import React from "react";
import ReactDOM from "react-dom/client";
// import InicioSesion from "./pages/Sign in/InicioSesion";
import { BrowserRouter } from "react-router-dom";
import RouterDom from "./Routes/RouterDom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterDom />
    </BrowserRouter>
  </React.StrictMode>
);
