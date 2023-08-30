import React, {useState} from "react";
import MenuBarR from "../../shared/components/MenuBar";
import { Radio, Upload, Button, Input } from "antd";
import { SendOutlined, SearchOutlined, VideoCameraOutlined, FileOutlined, PictureOutlined, CloseOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import "../styles/MensajeCliente.css";


const MensajeP = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajesEnviados, setMensajesEnviados] = useState([]);
  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);



  

  const handleChatSeleccionado = (usuario) => {
    setUsuarioSeleccionado(usuario);
    // Resto de la lógica para cambiar de chat si es necesario
  };
  
  // const handleChatSeleccionado = (chatId) => {
  //   setChatSeleccionado(chatId);
  //   setMensaje("");
  // };

  const renderMensaje = () => {
    if (chatSeleccionado === 1) {
      return (
        <div className="mensaje">
          <div className="burbuja-chat saliente">
            {/* <div className="avatar">
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
            </div> */}
          </div>
          <div className="burbuja-chat entrante">
            {/* <div className="avatar">
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
            </div> */}
          </div>
          {/* Otras burbujas de chat del primer mensaje */}
        </div>
      );
    } else if (chatSeleccionado === 2) {
      return (
        <div className="mensaje">
          <div className="burbuja-chat saliente">
            {/* <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
            </div> */}
            {/* <div className="cuerpo">
              <div className="texto">
                <span>Contenido del segundo mensaje saliente</span>
              </div>
              <span className="tiempo">
                <i className="far fa-clock"></i>
                Hace 5 min
              </span>
            </div> */}
          </div>
          <div className="burbuja-chat entrante">
            {/* <div className="avatar">
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
            </div> */}
          </div>
          {/* Otras burbujas de chat del segundo mensaje */}
        </div>
      );
    // // } else if (chatSeleccionado === 3) {
    // //   return (
    // //     <div className="mensaje">
    // //       <div className="burbuja-chat saliente">
    // //         {/* <div className="avatar">
    // //           <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
    // //         </div>
    // //         <div className="cuerpo">
    // //           <div className="texto">
    // //             <span>Contenido del tercer mensaje saliente</span>
    // //           </div>
    // //           <span className="tiempo">
    // //             <i className="far fa-clock"></i>
    // //             Hace 5 min
    // //           </span>
    // //         </div> */}
    // //       </div>
    // //       <div className="burbuja-chat entrante">
    // //         {/* <div className="avatar">
    // //           <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="img" />
    // //         </div>
    // //         <div className="cuerpo">
    // //           <div className="texto">
    // //             <span>Contenido del tercer mensaje entrante</span>
    // //           </div>
    // //           <span className="tiempo">
    // //             <i className="far fa-clock"></i>
    // //             Hace 5 min
    // //           </span>
    // //         </div> */}
    // //       </div>
    // //       {/* Otras burbujas de chat del tercer mensaje */}
    // //     </div>
    //   );
    }
  };

  const enviarMensaje = () => {
    // Validar que el mensaje no esté vacío
    if (mensaje.trim() !== "") {
      // Agregar el mensaje a la lista de mensajes enviados
      setMensajesEnviados([...mensajesEnviados, mensaje]);
      // Limpiar el campo de texto
      setMensaje("");
    }
  };

  return (
    <div>
      <div className="menu-bar">
        {<MenuBarR/>}
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
            <div className="usuario" onClick={() => handleChatSeleccionado(1)}>
              <div className="avatar">
                <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" alt="img" />
                <span className="estado-usuario enlinea"></span>
              </div>
              <div className="cuerpo">
                <span>Natalia Bejarano</span>
                <span>detalles de mensaje</span>
              </div>
              {/* <span className="notificacion">3</span> */}
            </div>
            <div className="usuario" onClick={() => handleChatSeleccionado(2)}>
              <div className="avatar">
                <img src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1685438938.jpg" alt="img" />
                <span className="estado-usuario ocupado"></span>
              </div>
              <div className="cuerpo">
                <span>Marcos Lopez</span>
                <span>detalles de mensaje</span>
              </div>
              <span className="notificacion"></span>
            </div>
            {/* <div className="usuario" onClick={() => handleChatSeleccionado(3)}> */}
              {/* <div className="avatar"> */}
                {/* <img src="https://www.shutterstock.com/image-photo/portrait-young-smiling-caucasian-man-260nw-1491969899.jpg" alt="img" /> */}
                {/* <span className="estado-usuario desconectado"></span> */}
              {/* </div> */}
              {/* <div className="cuerpo"> */}
                {/* <span>Nombre apellido</span> */}
                {/* <span>detalles de mensaje</span> */}
              {/* </div> */}
              {/* <span className="notificacion">1</span> */}
            {/* </div> */}
          </div>
        </div>
        <div className="seccion-chat">
          <div className="usuario-seleccionado">
            <div className="avatar">
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" alt="img" />
            </div>
            <div className="cuerpo">
              <span>Natalia Bejarano</span>
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
            {mensajesEnviados.map((mensajeEnviado, index) => (
              <div className="mensaje" key={index}>
                <div className="burbuja-chat saliente">
                  <div className="texto">
                    <span>{mensajeEnviado}</span>
                  </div>
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                    Hace 5 min
                  </span>
                </div>
                <div className="burbuja-chat entrante">
                  <div className="texto">
                    <span>Contenido del mensaje entrante</span>
                  </div>
                  <span className="tiempo">
                    <i className="far fa-clock"></i>
                    Hace 5 min
                  </span>
                </div>
                {/* Otras burbujas de chat */}
              </div>
            ))}
          </div>
          <div className="panel-escritura">
            <form className="textarea">
              <Input.TextArea
                placeholder="Escribir mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
              <div className="opciones">
                <Upload>
                  <Button icon={<FileOutlined />} />
                </Upload>
                <Upload>
                  <Button icon={<PictureOutlined />} />
                </Upload>
              </div>
              <Button type="button" className="enviar" icon={<SendOutlined />} onClick={enviarMensaje} />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MensajeP;
