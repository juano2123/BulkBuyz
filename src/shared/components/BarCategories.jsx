import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";

const BarCategories = () => {
  //cambiar las keys

  const items1 = [
    {
      label: "Categories",
      key: "SubAccount",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
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
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
  ];
  const items2 = [
    {
      label: "Help",
      key: "SubAccount",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
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
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
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
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items1}
      />
      <Button type="text">Sell on BulkBuyz</Button>

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items2}
      />
    </>
  );
};

export default BarCategories;