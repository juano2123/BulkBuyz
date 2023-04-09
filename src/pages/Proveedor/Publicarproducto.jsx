import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
import { Button, Input, Avatar } from "antd";
import { CameraOutlined,} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import PublicarProducto from "../../shared/components/PubProductoInput";

const { TextArea } = Input;



export const Publicarproducto = () => {


    return (
        <div className="Publicar_Todo">
            <div className="Barra_A">
                <MenuBarR />
            </div>

            <div className="Info_producto">
                <h1>Publicar tu Producto</h1>
           <div className="Input-Data">
            <PublicarProducto/>
           </div>

            </div>


        </div>





    );
};
export default Publicarproducto