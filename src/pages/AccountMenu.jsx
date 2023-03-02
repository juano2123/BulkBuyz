import React from "react";
import MenuBarR from "../shared/components/MenuBar";
import ProductCard from "../shared/components/ProductCard"
import BarCategories from "../shared/components/BarCategories";
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

