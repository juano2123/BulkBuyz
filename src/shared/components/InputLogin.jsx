import { Input } from "antd";
//aqui se hara la validacion del login
const InputLogin = (props) => {
  return <Input className="user" placeholder={props.inputName} />;
};

export default InputLogin;
