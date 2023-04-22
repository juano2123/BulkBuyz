import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";

const BarCategories = () => {
  //cambiar las keys

  const items1 = [
    {
      label: "Categories",
      key: "setting:0",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",

          children: [
            {
              label: "Consumer Electronics / Home Appliances",
              key: "setting:1",
            },
            {
              label:
                "Apparel / Fashion Accessories / Timepieces, Jewelry, Eyewear",
              key: "setting:2",
            },
            {
              label: "Home & Garden / Furniture / Pet Supplies",
              key: "setting:3",
            },
            {
              label:
                "Beauty / Personal Care & Household Cleaning / Health & Medical",
              key: "setting:4",
            },
            {
              label: "Sports & Entertainment / Toys & Hobbies / Gifts & Crafts",
              key: "setting:5",
            },
            {
              label: "Luggage, Bags & Cases/ Shoes & Accessories",
              key: "setting:6",
            },
            {
              label: "Agriculture / Food & Beverage",
              key: "setting:7",
            },
            {
              label:
                "Packing & Printing / Office & scool Supplies / Testing Instrument & Equipment",
              key: "setting:8",
            },
            {
              label: "Commercial Service Equipment / Business Services",
              key: "setting:9",
            },
          ],
        },
      ],
    },
  ];
  const items2 = [
    {
      label: "Help",
      key: "setting:2",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Help",
          children: [
            {
              label: "Contactanos",
              key: "Contactanos",
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
      <div className="menu-categorie">
        <Menu
          onClick={onClick}
          style={{ background: "none" }}
          selectedKeys={[current]}
          mode="horizontal"
          items={items1}
        />
      </div>
      <div className="helpersss">
        <Button className="btn-sell " type="text">
          Sell on BulkBuyz
        </Button>

        <Menu
          className="menu-help"
          onClick={onClick}
          style={{ background: "none" }}
          selectedKeys={[current]}
          mode="horizontal"
          items={items2}
        />
      </div>
    </>
  );
};

export default BarCategories;
