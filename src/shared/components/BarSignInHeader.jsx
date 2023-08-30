import React from "react";
import { Button } from "antd";
import LOGO from "../../images/LOGO.png";
import styles from "../../pages/styles/Principal.module.css";
import { useNavigate } from "react-router-dom";

export const BarSignInHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="head">
      {/* mira si puedes mejorar esta parte */}
      <header>
        <a href={"/"}>
          <img className={styles.logo} alt="logo" src={LOGO}></img>
        </a>
        <Button className="btn-login" type="primary">
          login
        </Button>
        <Button className="btn-register" type="primary" onClick={handleClick}>
          Register
        </Button>
      </header>
    </div>
  );
};
