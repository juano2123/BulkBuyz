import React from "react";
import MenuBarR from "../../shared/components/menuBar";

import ProductCard from "../../shared/components/ProductCard";
import BarCategories from "../../shared/components/BarCategories";

import "../styles/account_menu.css";

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
    {
      name: "Silicon Wristband",
      price: 0.99,    
    },
    {
      name:"Silicone Phone Case",
      price: 1.39 ,

    }
  ];

  return (
    <div className="inicio">
      {/* aqui podes mejorarla no se  */}
      <div className="menu_bar">
        <MenuBarR />
      </div>
      <div className="bar_categories">
        <BarCategories />
      </div>

      <div className="card">
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};
export default AccountMenu;
