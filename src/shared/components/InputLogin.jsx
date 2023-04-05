import React, { useState } from "react";
import usersData from "../../json users/users.json";
import { Button, Checkbox, Form, Input } from "antd";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Buscamos el usuario en el archivo JSON
    const user = usersData.users.find((u) => u.username === username);

    console.log(user);

    if (!user) {
      setErrorMessage("Usuario no encontrado");
    } else if (user.password !== password) {
      setErrorMessage("Contraseña incorrecta");
    } else {
      setErrorMessage("");
      alert("Inicio de sesión exitoso");
      console.log("melo caramelo");
    }
  };

  return (
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
        value={username}
        type="text"
        onChange={(event) => setUsername(event.target.value)}
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
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
        <Button type="link" >
          ¿Olvidó su contraseña?
        </Button>
        <Button className="btn_ingresar" onClick={handleSubmit}>
          Ingresar
        </Button>
      </Form.Item>
      {errorMessage && <p>{errorMessage}</p>}
    </Form>
  );
};

export default LoginForm;
