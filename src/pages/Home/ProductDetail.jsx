import BarCategories from "../../shared/components/BarCategories";
import MenuBarR from "../../shared/components/MenuBar";
import ProductoDetalleMasterPro from "../../shared/components/ProductoDetalleMasterPro";
import "../styles/ProductoDetalleMasterPro.css";
const ProductDetail = () => {
  return (
    <div className="product_detail">
      {/* lo mismo de siempre */}
      <div className="menu">
        <MenuBarR />
        <BarCategories />
      </div>
      <div className="productDeta">
        <ProductoDetalleMasterPro />
      </div>
    </div>
  );
};
export default ProductDetail;
