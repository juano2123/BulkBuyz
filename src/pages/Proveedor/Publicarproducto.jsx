import React from "react";
import MenuBarR from "../../shared/components/menuBar";
import { Button } from "antd/es/radio";

export const Publicarproducto = () => {

    return (
        <div className="Publicar_Todo">
            <div className="Barra_A">
                <MenuBarR />
            </div>

            <div className="Info_producto">
                <h1>Public your Product</h1>
                <h3>Include some details</h3>

                <span>Brand</span>
                <span>Contact number (+57) </span>
                <span>Title of product</span>
                <span>Description</span>

                <h3>Set a price</h3>
                <span>Price</span>
            </div>

            <div className="Upload_photos">
                <h3>Upload up to 10 photos</h3>

                {/*Cuadros de fotos aqui*/}

                <small>This field is required</small>
            </div>

            <div className="Detail_person">
                <h3>Check your details</h3>

                {/*imagen*/}

                <span> Name </span>
                <span> Mobile phone number </span>
                <Button className="btn-forget" type="primary">
                    Submit
                </Button>


            </div>


        </div>





    );
};
export default Publicarproducto