import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React from "react";
//validacion del password
const InputPassword = (props) => {
  return (
    <Input.Password
      placeholder={props.inputPass}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};

export default InputPassword;
