import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import styles from "../../pages/styles/Principal.module.css";
import LOGO from "../../images/LOGO.png";
import styleBar from "../../pages/styles/BarMenu.module.css";
import { useNavigate } from "react-router-dom";

//import LOGO from "./BulkBuyz/src/images/LOGO.PNG";
const MenuBarR = () => {
  const onSearch = (value = "") => console.log(value);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  //cambiar las keys

  const items = [
    {
      key: "SubAccount",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: `Hi,${""}`,
          children: [
            {
              label: "Account",
              key: "account",
            },
            {
              label: "Sign Out",
              key: "SignOut",
            },
          ],
        },
      ],
    },
    {
      key: "SubMenu",
      icon: <InboxOutlined />,
      children: [
        {
          type: "group",
          label: "Message",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className={styleBar.toro}>
        <div className="img-logo">
          <img
            className={styles.logo}
            alt="logo"
            src={LOGO}
            onClick={handleClick}
          ></img>
        </div>
        <div className={styleBar.bar_search}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            // style={{ width: "400px", height: "50px", fontSize: "24px" }}
            enterButton
            size="large"
          />
        </div>
        <div className="btn-laterales">
          <Menu
            style={{ background: "none" }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default MenuBarR;
