import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import AccountMenu from "../pages/Home/AccountMenu";
import InicioSesion from "../pages/Sign in/InicioSesion";
import { RegisterUser } from "../pages/Sign in/RegisterUser";
const RoterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountMenu />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoterDom;
