import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
import { Button, Input, Avatar } from "antd";
import { CameraOutlined,} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;



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
                <Input placeholder="Basic usage" />
                <span>Contact number (+57) </span>
                <Input placeholder="Basic usage" />
                <span>Title of product</span>
                <Input placeholder="Basic usage" />
                <span>Description</span>
                <TextArea rows={4} />

                <h3>Set a price</h3>
                <span>Price</span>
                <Input placeholder="Basic usage" />
            </div>

            <div className="Upload_photos">
                <h3>Upload up to 10 photos</h3>
                <CameraOutlined />
                <CameraOutlined />
                <CameraOutlined />
                <CameraOutlined />

                {/*Cuadros de fotos aqui*/}

                <small>This field is required</small>
            </div>

            <div className="Detail_person">
                <h3>Check your details</h3>

                {/*imagen*/}

                <Avatar size={64} icon={<UserOutlined />} />

                    <span> Name </span>
                    <Input placeholder="Basic usage" />
                    <span> Mobile phone number </span>
                    <Input placeholder="Basic usage" />
                    <Button className="btn-forget" type="primary">
                        Submit
                    </Button>


            </div>


        </div>





    );
};
export default Publicarproducto