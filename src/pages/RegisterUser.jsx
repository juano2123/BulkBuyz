import Register from "../shared/components/RegisterInput";
import "./styles/register_input.css";
import LOGO from "../images/LOGO.png";
import { Button } from "antd";
import InputPassword from "../shared/components/InputPassword";
import InputLogin from "../shared/components/InputLogin";
const RegisterUser = () => {
  return (
    <div className="register">
      <header>
        <img className="logo" alt="logo" src={LOGO}></img>
      </header>
      <div className="content">
        <div className="create_user">
          <p>Create yor count</p>
        </div>
        <div className="content_left">
          <Register inputRegister={"Country"} />

          <Register inputRegister={"Names"} />
          <Register inputRegister={"Last name"} />
          <Register inputRegister={"Number"} />
        </div>
        <div className="content_rigth">
          <Register inputRegister={"Name Company"} />
          <Register inputRegister={"ID"} />
          <InputLogin input Name={"Mail"} />
          <InputPassword inputPass={"Password"} />
          <Register inputRegister={"confirmated password"} />
          {/* toca preguntar como se hace esa validacion */}
        </div>
        <div>
          <Button className="login" type="primary">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RegisterUser;
