import "../../pages/styles/inicio_sesion.css";
import InputLogin from "../../shared/components/InputLogin";
import InputPassword from "../../shared/components/InputPassword";
import { BarSignInHeader } from "../../shared/components/BarSignInHeader";
import { Button, Checkbox, Form, Input } from "antd";

function InicioSesion() {
  return (
    <div className="Area_login">
      <div className="Barra_Inicio">
        <BarSignInHeader />
      </div>

      {/* aqui tenes que hacer divs para la zona de la imagen, otro div con el input */}
      <div className="Imagen">
        <img className="los" alt="logo" src="#"></img>
      </div>

      {/* <a>WELCOME</a> */}
      <div className="Ingresar_datos">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
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
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default InicioSesion;
