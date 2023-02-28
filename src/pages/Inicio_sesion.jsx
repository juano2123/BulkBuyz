import LOGO from "../images/LOGO.png";
import "./styles/inicio_sesion.css";
import { Button, Input } from "antd";

function Inicio_sesion() {
  return (
    <div className="Inicio_sesion">
      <header>
        <img className="logo" src={LOGO}></img>
        <Button className="login" type="primary">
          login
        </Button>
        <Button className="register" type="primary">
          Register
        </Button>
      </header>

      <div className="Area_login">
        <div>
          <img className="los" src={LOGO}></img>
        </div>
        <a>WELCOME</a>
       
        <Input className="user" placeholder="Mail" />
              </div>
      
    </div>
  );
}

export default Inicio_sesion;
