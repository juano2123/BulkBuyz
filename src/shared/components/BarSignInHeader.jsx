import React from "react";
import { Button } from "antd";
import LOGO from "../../images/LOGO.png";
import styles from "../../pages/styles/Principal.module.css";
import { useNavigate } from "react-router-dom";

export const BarSignInHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="head">
      {/* mira si puedes mejorar esta parte */}
      <header>
        <img className={styles.logo} alt="logo" src={LOGO}></img>
        <Button
          className="btn-login"
          type="primary"
          onClick={() => navigate("/register")}
        >
          login
        </Button>
        <Button className="btn-register" type="primary">
          Register
        </Button>
      </header>
    </div>
  );
};
