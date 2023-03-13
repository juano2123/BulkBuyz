import "../../pages/styles/inicio_sesion.css";
import { Button } from "antd";
import InputLogin from "../../shared/components/InputLogin";
import InputPassword from "../../shared/components/InputPassword";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";

function InicioSesion() {
  return (
    <div className="Inicio_sesion">
      <div className="Area_login">

        <div className="Barra_Inicio"> <BarSignInHeader /> </div>

        {/* aqui tenes que hacer divs para la zona de la imagen, otro div con el input */}
        <div className="Imagen">
          <div> <img className="los" alt="logo" src="#"></img> </div>
        </div>

        {/* <a>WELCOME</a> */}
        <div className="Ingresar_datos">
          <div className="ingresar_Email"> <InputLogin inputName={"Mail"} /> </div>

          <div className="ingresar_password"> <InputPassword inputPass={"Password"} /> </div>
        </div>
        <div className="Boton_incio">
          <div className="Boton_iniciar"> <Button>inciar </Button> </div>
        </div>

        {/* trata de cuadrar como 3 divs entre login password y el button */}


      </div>
    </div>
  );
}

export default InicioSesion;
