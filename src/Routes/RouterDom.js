import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import AccountMenu from "../pages/Home/AccountMenu";
import InicioSesion from "../pages/Sign in/InicioSesion";
import { RegisterUser } from "../pages/Sign in/RegisterUser";
import InfoAccount from "../pages/Account/InfoAccount";
import LogInadmin from "../pages/Administrador/LogInadmin";
import Publicarproducto from "../pages/Proveedor/Publicarproducto";
import MiPerfil from "../pages/Account/MiPerfii";
import ProductoDetalleMasterPro from "../shared/components/ProductoDetalleMasterPro";
import MensajeP from "../pages/Proveedor/MensajeP";
const RoterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountMenu />} />
        <Route path="/login" element={<InicioSesion />} /> {/* este ya ta */}
        <Route path="/register" element={<RegisterUser />} />
        {/* este esta a media, falta el redux, para poder meter la info*/}
        <Route path="/infoaccount" element={<InfoAccount />} />
        <Route path="/loginadmin" element={<LogInadmin />} />
        <Route path="/publicarProducto" element={<Publicarproducto />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/product" element={<ProductoDetalleMasterPro />} />
        <Route path="/mensaje" element={<MensajeP />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoterDom;
