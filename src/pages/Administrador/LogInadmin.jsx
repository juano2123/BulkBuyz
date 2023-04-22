import React from "react";
import { Button } from "antd/es/radio";
//import BarraAdmin from "../../shared/BarraAdmin";
import { Input } from "antd";
import "../styles/LoginAdmin.css";
// import LoginFormA from "../../shared/components/inputLoginA";

export const LogInadmin = () => {
  return (
    <div className="Todo_logA">
      {/*Barra*/}
      {/* <header>
                <BarraAdmin />
    </header> */}

      <div className="texto">
        <h1>Bienvenido Administrador</h1>
      </div>
      {/* <LoginFormA /> */}

      {/*
                <div className="CorreoE">

                <small>Correo Eletronico</small>

                <Input placeholder="" />
                </div>
                <div className="ContraA">

                <small>Contraseña</small>

                <Input placeholder="" />
                </div>

                <div className="BotonA">

                <Button className="btn-forget" type="primary">
                    Acceder
                </Button>
                </div>

*/}
    </div>
  );
};

export default LogInadmin;
