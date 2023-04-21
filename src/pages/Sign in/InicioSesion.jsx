import "../../pages/styles/inicio_sesion.css";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
import ImgRef from "../../images/login.jpg";
import InputLogin from "../../shared/components/InputLogin";

function InicioSesion() {
  return (
    <div className="Area_login">
      <div className="Barra_Inicio">
        <BarSignInHeader />
      </div>
      <div className="todo-menos-header">
        {/* aqui tenes que hacer divs para la zona de la imagen, otro div con el input */}
        <div className="Imagen">
          <img className="img-img-ref " alt="img de ref" src={ImgRef}></img>
        </div>

        {/* <a>WELCOME</a> */}
        <div className="Ingresar_datos">
          <h1>BIENVENIDO</h1>

          <InputLogin />
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
