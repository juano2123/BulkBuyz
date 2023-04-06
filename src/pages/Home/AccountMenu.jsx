import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
// import ProductCard from "../../shared/components/ProductCard";
import BarCategories from "../../shared/components/BarCategories";
import "../styles/account_menu.css";
import ProductCard from "../../shared/components/ProductCard";

const AccountMenu = () => {
  const products = [
    {
      name: "Airpods",
      price: 1200,
      key: 1,
    },
    {
      name: "Minispeaker",
      price: 430,
      key: 2,
    },
    {
      name: "Silicon Wristband",
      price: 0.99,
      key: 3,
    },
    {
      name: "Silicone Phone Case",
      price: 1.39,
      key: 4,
    },
    { name: "sds Phone Case", price: 1.39, key: 5 },
    { name: "Silicone Phone ssad", price: 1.39, key: 5 },
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
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};
export default AccountMenu;
