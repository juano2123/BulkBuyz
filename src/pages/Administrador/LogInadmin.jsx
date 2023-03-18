import React from "react";
import { Button } from "antd/es/radio";
import BarraAdmin from "../../shared/BarraAdmin";

export const LogInadmin = () => {

    return (

        <div className="Todo_logA">
 {/*Barra*/}
           {/* <header>
                <BarraAdmin />
    </header> */}
           

            <div className="inputA">
                <h1>Bienvenido Administrador</h1>

                {/*Input Correo*/}
                {/*Input Contra*/}


                <Button className="btn-forget" type="primary">
                    Acceder
                </Button>



            </div>
        </div>



    );
};

export default LogInadmin