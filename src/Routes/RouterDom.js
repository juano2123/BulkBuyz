import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import AccountMenu from "../pages/Home/AccountMenu";
import InicioSesion from "../pages/Sign in/InicioSesion";
import { RegisterUser } from "../pages/Sign in/RegisterUser";
import InfoAccount from "../pages/Account/InfoAccount"
import LogInadmin from "../pages/Administrador/LogInadmin"
import Publicarproducto from "../pages/Proveedor/Publicarproducto";
import MiPerfil from "../pages/Account/MiPerfii";
const RoterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountMenu />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/Infoaccount" element={<InfoAccount />} />
        <Route path="/loginadmin" element={<LogInadmin />} />
        <Route path="/publicarProducto" element={<Publicarproducto/>} />
        <Route path="/MiPerfil" element={<MiPerfil/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoterDom;
