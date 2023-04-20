import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
// import ProductCard from "../../shared/components/ProductCard";
import BarCategories from "../../shared/components/BarCategories";
import "../styles/account_menu.css";
import ProductCard from "../../shared/components/ProductCard";
import products from "../../jsonusers/products.json";

const AccountMenu = () => {
  console.log(products);
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
        {products.products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};
export default AccountMenu; 
