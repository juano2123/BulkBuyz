import MenuBarR from "../../shared/components/MenuBar";
import "../styles/InfoAccount.css";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Button } from 'antd';
/*


   PREGUNTAR AL PROFESOR 

*/
const InfoAccount = () => {
  return (
    <div className="infoMenu">
      <header>
        <MenuBarR />
      </header>

      <div className="todito">
        <div className="account">
          <h1>CUENTA</h1>
        </div>
        <div className="Information">
          <div className="masGrande">
          <div className="information_big">
            <Space wrap size={16}>

              <Avatar size="large" icon={<UserOutlined />} />
            </Space>

            <Button type="link" >
              Subir Foto
            </Button>
          </div>
    


        
          <div className="information_1">
            <div className="info1">
            <span>Your member id:</span>
            <span> A4543tfwfee</span>
            </div>
            <div className="info2">
              <span>Email:</span>
              <span> example@gmail.com</span>
            </div>
            <div className="info3">
              <span>Telephone:</span>
              <span> 302555555</span>
            </div>
          </div>
          </div>
        

        <div className="information_2">

          <div className="left">
            <span>Personal information</span>

            <div className="button1">

              <Space wrap size={16}>

                <Button type="link" >
                  Mi perfil
                </Button>
              </Space>

              <Button type="link" >
                Subir mi Foto
              </Button>
            </div>
          </div>

          <div className="right">
            <span>Account Security</span>
            <div className="boton2">

              <Button type="link" >
                Cambiar contraseña
              </Button>
              <Button type="link" >
                Set security questions
              </Button>
              </div>
              </div>

            </div>
          </div>

       




      </div>
    </div>
  );
};
export default InfoAccount;
