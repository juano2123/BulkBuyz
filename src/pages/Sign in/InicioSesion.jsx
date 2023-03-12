import "../../pages/styles/inicio_sesion.css";
import { Button } from "antd";
import InputLogin from "../../shared/components/InputLogin";
import InputPassword from "../../shared/components/InputPassword";
import { BarSignInHeader } from "../../shared/BarSignInHeader";

function InicioSesion() {
  return (
    <div className="Inicio_sesion">
      <div className="Area_login">
        <BarSignInHeader />
        {/* aqui tenes que hacer divs para la zona de la imagen, otro div con el input */}
        <img className="los" alt="logo" src="#"></img>

        {/* <a>WELCOME</a> */}

        <InputLogin inputName={"Mail"} />
        <InputPassword inputPass={"Password"} />
        {/* trata de cuadrar como 3 divs entre login password y el button */}
        <Button>inciar </Button>
      </div>
    </div>
  );
}

export default InicioSesion;
