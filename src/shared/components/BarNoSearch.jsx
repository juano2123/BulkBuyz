import React, { useState } from "react";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import LOGO from "../../images/LOGO.png";
import styles from "../../pages/styles/Principal.module.css";
import styleBar from "../../pages/styles/BarMenu.module.css";

// import LOGO from "./BulkBuyz/src/images/LOGO.PNG";
const BarNoSearch = () => {
  //const onSearch = (value = "") => console.log(value);

  //cambiar las keys

  const items = [
    {
      key: "SubAccount",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: `Hi, ${""}`,
          children: [
            {
              label: "Account",
              key: "account-nosearch",
            },
            {
              label: "Sign Out",
              key: "SignOut-nosearch",
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
              key: "option 1-nosearch",
            },
            {
              label: "Option 2",
              key: "option 2-nosearch",
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
        {/* mira si puedes hacer los div aca o en el principal */}
        <img className={styles.logo} alt="logo" src={LOGO}></img>

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          style={{ background: "none" }}
          mode="horizontal"
          items={items}
        />
      </div>
    </>
  );
};

export default BarNoSearch;
