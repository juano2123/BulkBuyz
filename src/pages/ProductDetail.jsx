import BarCategories from "../shared/components/BarCategories";
import MenuBarR from "../shared/components/MenuBar";

const ProductDetail = () => {
  return (
    <div className="product_detail">
      <div className="menu">
        <MenuBarR />
        <BarCategories />
      </div>
      <div className="productDeta">
        <ProductDetail />
      </div>
    </div>
  );
};
export default ProductDetail;
