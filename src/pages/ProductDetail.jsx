import BarCategories from "../shared/components/BarCategories";
import MenuBarR from "../shared/components/MenuBar";
import ProductoDetalleMasterPro from "../shared/components/ProductoDetalleMasterPro";

const ProductDetail = () => {
  return (
    <div className="product_detail">
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
