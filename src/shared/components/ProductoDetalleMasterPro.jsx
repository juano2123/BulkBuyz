import React from "react";
import { useLocation } from "react-router-dom";

//TERMINAR
const ProductoDetalleMasterPro = () => {
  const { location } = useLocation();
  const product = location.state;

  console.log(product);

  return (
    <div className="nose_todo">
      <div className="imageProduct">
        <img src={product.product.image} alt="" width={400} height={300} />
      </div>

      <div className="info">
        <div className="infodetail">
          <span>info detail</span>
        </div>
        <div className="price">
          <span>precio al por mayor</span>
        </div>
        <div className="details_especific">
          <div className="detail">
            <span>color</span>
          </div>
          <div className="varition">
            <ul>varicion de tipos de cosas</ul>
          </div>
        </div>
        <div className="a_box_inner">
          <div className="sapan-minium">
            <span>The minimum order quantity is 2 piece 2/2 piece</span>
            <span> from 6.50</span>
          </div>
          <div className="spam-ship">
            <span> shiping</span>
            <span> $34.00</span>
          </div>
          <div className="Total">
            <span> Total</span>
            <span> $40.50</span>
          </div>
          <div className="Botones">
            <button>Chat Now</button>
            <button> Contact Supplier</button>
          </div>
          <div className="another_box_inner">
            <div className="nombre">
              <span>Name of Company</span>
              <span>Manufactuer</span>
            </div>
            <div>
              <img src="#" alt="" width={40} height={30} />
              <span>CN 1YR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductoDetalleMasterPro;
