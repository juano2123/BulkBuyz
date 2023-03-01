import React from "react";
import MenuBarR from "../shared/components/MenuBarr";
const AccountMenu = () => {
  const products = [
    {
      name: "Airpods",
      price: 1200,
      preview: Image,
    },
    {
      name: "Minispeaker",
      price: 430,
    },
  ];

  return (
    <div className="inicio">
      <div className="menu_bar">
        <MenuBarR />
      </div>
    </div>
  );
};
export default AccountMenu;

