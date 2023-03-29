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
      id: 1,
    },
    {
      name: "Minispeaker",
      price: 430,
      id: 2,
    },
    {
      name: "Silicon Wristband",
      price: 0.99,
      id: 3,
    },
    {
      name: "Silicone Phone Case",
      price: 1.39,
      id: 4,
    },
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
