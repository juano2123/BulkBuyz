import React, {useState} from "react";
import MenuBarR from "../../shared/components/MenuBar";
import { Radio, Upload, Button, Input } from "antd";
import { SendOutlined, SearchOutlined, VideoCameraOutlined, FileOutlined, PictureOutlined, CloseOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import "../styles/MensajeCliente.css";

const MensajeP = () => {

  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  const handleChatSeleccionado = (chatId) => {
    setChatSeleccionado(chatId);
  };

  const renderMensaje = () => {
    if (chatSeleccionado === 1) {
      return (
        <div className="mensaje">
          <div className="burbuja-chat saliente">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
            </div>
            <div className="cuerpo">
              <div className="texto">
                <span>Contenido del primer mensaje saliente</span>
              </div>
              <span className="tiempo">
                <i className="far fa-clock"></i>
                Hace 5 min
              </span>
            </div>
          </div>
          <div className="burbuja-chat entrante">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
            </div>
            <div className="cuerpo">
              <div className="texto">
                <span>Contenido del primer mensaje entrante</span>
              </div>
              <span className="tiempo">
                <i className="far fa-clock"></i>
                Hace 5 min
              </span>
            </div>
          </div>
          {/* Otras burbujas de chat del primer mensaje */}
        </div>
      );
    } else if (chatSeleccionado === 2) {
      return (
        <div className="mensaje">
          <div className="burbuja-chat saliente">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
            </div>
            <div className="cuerpo">
              <div className="texto">
                <span>Contenido del segundo mensaje saliente</span>
              </div>
              <span className="tiempo">
                <i className="far fa-clock"></i>
                Hace 5 min
              </span>
            </div>
          </div>
          <div className="burbuja-chat entrante">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
            </div>
            <div className="cuerpo">
              <div className="texto">
                <span>Contenido del segundo mensaje entrante</span>
              </div>
              <span className="tiempo">
                <i className="far fa-clock"></i>
                Hace 5 min
              </span>
            </div>
          </div>
          {/* Otras burbujas de chat del segundo mensaje */}
        </div>
      );
    } else if (chatSeleccionado === 3){
      return (
        <div className="mensaje">
        <div className="burbuja-chat saliente">
          <div className="avatar">
            <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
          </div>
          <div className="cuerpo">
            <div className="texto">
              <span>Contenido del tercer mensaje saliente</span>
            </div>
            <span className="tiempo">
              <i className="far fa-clock"></i>
              Hace 5 min
            </span>
          </div>
        </div>
        <div className="burbuja-chat entrante">
          <div className="avatar">
            <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
          </div>
          <div className="cuerpo">
            <div className="texto">
              <span>Contenido del tercer mensaje entrante</span>
            </div>
            <span className="tiempo">
              <i className="far fa-clock"></i>
              Hace 5 min
            </span>
          </div>
        </div>
        {/* Otras burbujas de chat del segundo mensaje */}
      </div>
      );
    }
  };

  return (
    <div>
      <div className="menu-bar">
        <MenuBarR />
      </div>

      <section className="body-chat">
        <div className="seccion-titulo">
          <h3>
            <i className="fas fa-comments"></i> 
          </h3>
        </div>
        <div className="seccion-usuarios">
          <div className="seccion-buscar">
            <div className="input-buscar">
              <Input.Search placeholder="Buscar usuario" enterButton={<SearchOutlined />} />
            </div>
          </div>
          <div className="seccion-lista-usuarios">
            <div className="usuario" onClick={() =>handleChatSeleccionado(1)}>
              <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" alt="img" />
                
                <span className="estado-usuario enlinea"></span>
              </div>
              <div className="cuerpo">
                <span>Nombre apellido</span>
                <span>detalles de mensaje</span>
              </div>
              {/* <span className="notificacion">3</span> */}
            </div>
            <div className="usuario" onClick={() =>handleChatSeleccionado(2)}>
              <div className="avatar">
                <img src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1685438938.jpg" alt="img" />
                <span className="estado-usuario ocupado"></span>
              </div>
              <div className="cuerpo">
                <span>Nombre apellido</span>
                <span>detalles de mensaje</span>
              </div>
              <span className="notificacion"></span>
            </div>
            <div className="usuario" onClick={() =>handleChatSeleccionado(3)}>
              <div className="avatar">
                <img src="https://www.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg" alt="img" />
                <span className="estado-usuario desconectado"></span>
              </div>
              <div className="cuerpo">
                <span>Nombre apellido</span>
                <span>detalles de mensaje</span>
              </div>
              {/* <span className="notificacion">1</span> */}
            </div>
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
                  {/* <Button type="button" icon={<VideoCameraOutlined />} /> */}
                </li>
                <li>
                  <Button type="button" icon={<StarOutlined />} />
                </li>
              </ul>
            </div>
          </div>
          <div className="panel-chat">
          {renderMensaje()}
            
        <div>
              <div className="avatar">
               
              </div>
              <div className="cuerpo">
                {/* <img src="http://localhost/multimedia/png/user-foto-3.png" alt=""> */}
                <div className="texto">
  
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                   
                  </span>
                </div>
                <ul className="opciones-msj">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
            {/* derecha */}
            <div >
              <div className="cuerpo">
                {/* <img src="http://localhost/multimedia/png/user-foto-3.png" alt=""> */}
                <div className="texto">
                  
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                   
                  </span>
                </div>
                <ul className="opciones-msj">
                  <li>
                
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
              <div className="avatar">
               
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
    </div>
  );
};

export default MensajeP;
