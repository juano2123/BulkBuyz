import { Button } from "antd";
import React from "react";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
import InputPassword from "../../shared/components/InputPassword";

export const ForgetPassword = () => {
  const Forget = () => {};

  return (
    <div className="todito">
      <div className="arriba">
        <BarSignInHeader />
      </div>
      <div className="content">
        <h1>¿Olividaste tu contraseña?</h1>
        <h2>
          Por favor ingrese el correo electrónico para recuperar su contraseña
        </h2>
        <div className="input-lastpassword">
          <updatePassword newpass="" />
        </div>
        <div className="input-lastpassword">
          <updatePassword />
        </div>

        <Button className="btn-forget" type="primary">
          recuperar
        </Button>
      </div>
    </div>
  );
};
