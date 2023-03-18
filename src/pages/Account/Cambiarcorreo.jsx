import { Button } from "antd";
import React from "react";
import BarNoSearch from "../../shared/components/BarNoSearch";

export const Cambiarcorreo = () => {


    return (

        <div className="pantalla_correo">
            <div className="Barra">
            <BarNoSearch />
            </div>
         <div className="Correo">
          <h1>Cambiar correo?</h1>
          <small>Correo Actual: </small> 
          <small>Correo Nuevo: </small> 
          <small> Confirmar correo nuevo</small>


          <Button className="btn-forget" type="primary">
          Cambiar correo
        </Button>
        
        
        
        </div>   


    </div>

);

};

