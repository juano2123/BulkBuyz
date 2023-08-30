import { Button } from "antd";
import React from "react";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
import { UpdatePassword } from "../../shared/components/UpdatePassword";
import "../styles/ForgetPassword.css";
export const ForgetPassword = () => {
  const Forget = () => {};

  return (
    <>
      <div className="arriba">
        <BarSignInHeader />
      </div>
      <div className="content">
        <div className="content-forget">
          <h1>¿Olividaste tu contraseña?</h1>
          <span>
            Por favor ingrese el correo electrónico para recuperar su contraseña
          </span>
          <div className="input-lastpassword">
            <UpdatePassword newpass="" />
          </div>

          <Button className="btn-forget" type="primary">
            Recuperar contraseña
          </Button>
        </div>
      </div>
    </>
  );
};
