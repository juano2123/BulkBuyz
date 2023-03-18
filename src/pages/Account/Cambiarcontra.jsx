import { Button } from "antd";
import React from "react";
import BarNoSearch from "../../shared/components/BarNoSearch";



export const Cambiarcontra = () => {

 
    return (

        <div className="pantalla_contra">
            <div className="Barra_Inicio">
            <BarNoSearch />
            </div>

         <div className="Contraseña">
          <h1>Cambiar contraseña?</h1>
          <small>Contraseña Actual: </small> 
          <small>Contraseña Nuevo: </small> 
          <small> Confirmar contraseña nuevo</small>


          <Button className="btn-forget" type="primary">
          Cambiar contraseña
        </Button>

        </div>
</div>
);
        
};
