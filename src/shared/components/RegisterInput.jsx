import React from "react";
import { Input } from "antd";

const Register = (props) => {
  console.log(props);
  return <Input className="register" placeholder={props.inputRegister} />;
};
export default Register;
