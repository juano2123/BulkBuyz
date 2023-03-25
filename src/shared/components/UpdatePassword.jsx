import { Input } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const UpdatePassword = (props) => {
  return (
    <>
      <Input.Password
        className="input-password-forget"
        placeholder="contraseña"
        style={{ width: "40%" }}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </>
  );
};
