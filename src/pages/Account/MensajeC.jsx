import React from "react";
import MenuBarR from "../../shared/components/MenuBar";

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export const MensajeC = () => {

    return (

        <div className="Mensajec_todo">
            <div className="Barra_A">
                <MenuBarR />
            </div>

            <div className="avatar">
            <Avatar size="large" icon={<UserOutlined />} />
            </div>

            <div className="details">
                <h2>John Doe</h2>
                <p>Last message sent at 10:30 am</p>
            </div>

            </div>






    );

};
export default MensajeC;


