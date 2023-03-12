import { Button, Input } from "antd";
import React from "react";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
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
        <Input className="input-forget" placeholder={Forget} />
        <Button className="btn-forget" type="primary">
          recuperar
        </Button>
      </div>
    </div>
  );
};
