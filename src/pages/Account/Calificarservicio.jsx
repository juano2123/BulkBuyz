import React from "react";
import MenuBarR from "../../shared/components/menuBar";
import { Input } from "antd";
import { Button }from "antd";

export const Calificarservicio = () => {

    const { TextArea } = Input;


    return (
        <div className="Serivcio_todo">
            <div className="Barra_A">
                <MenuBarR />
            </div>

            <div className="Input">
                <h1>Calificar el servicio</h1>

                {/* Aqui van las estrellas */}

                <>
                    <TextArea rows={4} placeholder="Type your opinion here..." />
                    <br />


                </>
                <Button className="btn-forget" type="primary">
                    Submit
                </Button>



            </div>


        </div>



    );
};
export default Calificarservicio;
