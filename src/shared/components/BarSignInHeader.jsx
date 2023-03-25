import React from "react";
import { Button } from "antd";
import LOGO from "../../images/LOGO.png";
import "../../pages/styles/Principal.css";

export const BarSignInHeader = () => {
  return (
    <div className="head">
      {/* mira si puedes mejorar esta parte */}
      <header>
        <img className="logo" alt="logo" src={LOGO}></img>
        <Button className="login" type="primary">
          login
        </Button>
        <Button className="register" type="primary">
          Register
        </Button>
      </header>
    </div>
  );
};
