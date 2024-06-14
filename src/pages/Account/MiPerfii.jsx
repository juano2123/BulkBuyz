import React from "react";
import MenuBarR from "../../shared/components/menuBar";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Button, Image } from 'antd';
import Imagen from "../../images/Flag-Colombia.jpg";
import "../styles/Miperfil.css";


export const MiPerfil = () => {
    return (
        <div className="TodoTodito">
            <header>
                <MenuBarR />
            </header>
            <div className="MedioTodito">
                <div className="Arriba">
                    <div className="left">

                    <div className="Izquierda1">

                        <div className="Avatar">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </div>
                    </div>

                    <div className="Izquierda2">
                        <div className="Nombre">
                            <h3>Juan Camilo</h3>
                        </div>
                        <div className="Imagen">

                            {/* <img className="img-img-ref " alt="img de ref" src={Imagen}></img> */}

                            <span>CO</span>
                            <div className="correo">
                                <span>Email:</span>                          
                                <span> Unejemplo@gmail.com</span>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="Derecha">
                        <span>Joing BulkedBuyz in 2023</span>
                    </div>



                </div>
                <div className="Medio">
                    <div className="Titulo">
                        <h1>Contact Information</h1>
                    </div>
                    <div className="lefty">
                        <div className="Email">
                        <span>email:</span>
                        <span> usario@gmail.com</span>
                        </div>
                        <div className="another">
                        <span>Alternativa email:</span>
                        <span> None</span>
                        </div>
                        <div className="social">
                        <span>Social Links:</span>
                        <span> None</span>
                        </div>

                    </div>
                    <div className="righty">
                        <div className="Fax">
                        <span>Fax:</span>
                        <span> None</span>
                        </div>
                        <div className="Tel">
                        <span>Telephone:</span>
                        <span> None</span>
                        </div>
                        <div className="Mob">
                        <span>Mobile:</span>
                        <span> None</span>
                        </div>

                    </div>


                </div>
                <div className="Abajo">

                    <div className="segundo_texto">
                        <h1>Company Information</h1>
                    </div>
                    <div className="zurdo">
                        <div className="Company">
                        <span>Company Name:</span>
                        <span> None</span>
                        </div>
                        <div className="Year">
                        <span>Year established:</span>
                        <span> None</span>
                        </div>
                        <div className="Buisness">
                        <span>Business type:</span>
                        <span> None</span>
                        </div>
                    </div>

               

                <div className="derecho">
                    <div className="Name">
                    <span>Main Products:</span>
                    <span> None</span>
                    </div>
                    <div className="Adress">
                    <span>Registered Adress:</span>
                    <span> CO</span>
                    </div>
                    <div className="About">
                    <span>About us:</span>
                    <span> None</span>
                    </div>
                </div>
            </div>
            </div>

        </div>


    )
}
export default MiPerfil;

