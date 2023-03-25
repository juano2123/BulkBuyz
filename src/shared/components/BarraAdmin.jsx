import React from "react"
import { Button } from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';




const BarraAdmin = (props) => {

    const items = [
        {
            key: '1',
            label: 'Agregar Página',
        },
        {
            key: '2',
            label: 'Agregar Entrada',
        },
        {
            key: '3',
            label: 'Agregar Usuario',
        },
    ];





    return (
        <div className="Todo_adminBar" >

            <img className="logo" alt="logo" src={"#"}></img>

            <div className="Izquierdo">

                <Button className="btn-forget" type="primary">
                    Panel de Control
                </Button>
                <Button className="btn-forget" type="primary">
                    Paginas
                </Button>
                <Button className="btn-forget" type="primary">
                    Entradas
                </Button>
                <Button className="btn-forget" type="primary" >
                    Usuarios

                </Button>


            </div>

            <div className="Derecho">

                <Dropdown
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                        
                    }}
                >
                    <Typography.Link>
                        <Space>
                            Crear Contenido
                            <DownOutlined />
                        </Space>
                    </Typography.Link>
                </Dropdown>

                <Button className="btn-forget" type="primary" >
                    Salir
                </Button>
                



            </div>





        </div >

    );
};

export default BarraAdmin
