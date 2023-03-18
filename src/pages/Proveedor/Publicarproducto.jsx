import React from "react";
import MenuBarR from "../../shared/components/menuBar";

export const Calificarservicio = () => {

    return (
        <div className="Publicar_Todo">
            <div className="Barra_A">
                <MenuBarR />
            </div>

            <div className="Info_producto">
                <h1>Public your Product</h1>
                <span>Include some details</span>

                <small>Brand</small>
                <small>Contact number (+57) </small>
                <small>Title of product</small>
                <small>Description</small>

                <span>Set a price</span>
                <small>Price</small>
            </div>

            <div className="Upload_photos">
                <span>Upload up to 10 photos</span>

                {/*Cuadros de fotos aqui*/}

                <small>This field is required</small>
            </div>

            <div className="Detail_person">
                <h2>Check your details</h2>
            </div>

        </div>





    );
};