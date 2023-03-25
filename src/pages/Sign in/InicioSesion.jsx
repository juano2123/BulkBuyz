import "../../pages/styles/inicio_sesion.css";
import "../../pages/styles/Principal.css";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
import { Button, Checkbox, Form, Input } from "antd";
import ImgRef from "../../images/David-Castro.jpg";

function InicioSesion() {
  return (
    <div className="Area_login">
      <div className="Barra_Inicio">
        <BarSignInHeader />
      </div>
      <div className="todo-menos-header">
        {/* aqui tenes que hacer divs para la zona de la imagen, otro div con el input */}
        <div className="Imagen">
          <img
            className="img-img-ref "
            alt="img de ref"
            src={ImgRef}
            style={{ width: "85%", height: "75%" }}
          ></img>
        </div>

        {/* <a>WELCOME</a> */}
        <div className="Ingresar_datos">
          <h1>BIENVENIDO</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              width: 800,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <span>¿Olvidó su contraseña?</span>
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
