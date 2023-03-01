import Search from "antd/es/transfer/search";
import LOGO from "../images/LOGO.png";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import React from "react";

const menuBar = () => {
  const onSearch = (value = "") => console.log(value);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 1", "1"),
      getItem("Option 2", "2"),
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
    ]),
  ];
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="inicio">
      <header>
        <img className="logo" alt="logo" src={LOGO}></img>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
          }}
          items={items}
        />
      </header>
    </div>
  );
};
export default menuBar;
