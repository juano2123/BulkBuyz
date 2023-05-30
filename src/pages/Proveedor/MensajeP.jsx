import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
import { Radio } from "antd";
import { Upload, Button } from "antd";
import {  SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchOutlined, VideoCameraOutlined, PhoneOutlined, FileOutlined, PictureOutlined, CloseOutlined, ShareAltOutlined } from "@ant-design/icons";




const MensajeP = () => {
    return (
      <section className="body-chat">
        <div className="Barra_A">
          <MenuBarR />
        </div>
        <div className="seccion-titulo">
          <h3>
            <i className="fas fa-comments"></i>
            Sistema de mensajería
          </h3>
        </div>
        <div className="seccion-usuarios">
          <div className="seccion-buscar">
            <div className="input-buscar">
              <Input.Search placeholder="Buscar usuario" enterButton={<SearchOutlined />} />
            </div>
          </div>
          <div className="seccion-lista-usuarios">
            {/* User list */}
          </div>
        </div>
        <div className="seccion-chat">
          <div className="usuario-seleccionado">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" alt="img" />
            </div>
            <div className="cuerpo">
              <span>Nombre de usuario</span>
              <span>Activo - Escribiendo...</span>
            </div>
            <div className="opciones">
              <ul>
                <li>
                  <Button type="button" icon={<VideoCameraOutlined />} />
                </li>
                <li>
                  <Button type="button" icon={<PhoneOutlined />} />
                </li>
              </ul>
            </div>
          </div>
          <div className="panel-chat">
            <div className="mensaje">
              <div className="avatar">
                <img src="ruta_img" alt="img" />
              </div>
              <div className="cuerpo">
                {/* <img src="http://localhost/multimedia/png/user-foto-3.png" alt=""> */}
                <div className="texto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                    Hace 5 min
                  </span>
                </div>
                <ul className="opciones-msj">
                  <li>
                    <Button type="button" icon={<CloseOutlined />} />
                  </li>
                  <li>
                    <Button type="button" icon={<ShareAltOutlined />} />
                  </li>
                </ul>
              </div>
            </div>
            {/* derecha */}
            <div className="mensaje left">
              <div className="cuerpo">
                {/* <img src="http://localhost/multimedia/png/user-foto-3.png" alt=""> */}
                <div className="texto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                    Hace 6 min
                  </span>
                </div>
                <ul className="opciones-msj">
                  <li>
                    <Button type="button" icon={<CloseOutlined />} />
                  </li>
                  <li>
                    <Button type="button" icon={<ShareAltOutlined />} />
                  </li>
                </ul>
              </div>
              <div className="avatar">
                <img src="ruta_img" alt="img" />
              </div>
            </div>
          </div>
          <div className="panel-escritura">
            <form className="textarea">
              <div className="opciones">
                <Upload>
                  <Button icon={<FileOutlined />} />
                </Upload>
                <Upload>
                  <Button icon={<PictureOutlined />} />
                </Upload>
              </div>
              <Input.TextArea placeholder="Escribir mensaje" />
              <Button type="button" className="enviar" icon={<SendOutlined />} />
            </form>
          </div>
        </div>
        <div className="Mensajep_todo"></div>
      </section>
    );
  };
  
  export default MensajeP;
  
