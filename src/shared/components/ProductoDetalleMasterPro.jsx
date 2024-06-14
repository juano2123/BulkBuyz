import React from "react";
import { useLocation } from "react-router-dom";
import MenuBarR from "../../shared/components/menuBar";
import { Image } from 'antd';

//TERMINAR
const ProductoDetalleMasterPro = () => {
  // const { location } = useLocation();
  // const product = location.state;

  // console.log(product);

  return (
    <div className="nose_todo">
         <MenuBarR />
      <div className="imageProduct">
      <Image
    width={500}
    src="https://www.apple.com/v/airpods/t/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
  />
      </div>

      <div className="info">
        <div className="infodetail">
          <span>2023 TWS 2nd generation gaming in-ear earphone 3rd wireless earbuds 3 Pro 2 For iphone</span>
        </div>
        <div className="price">
          <span>$6.50 /piece |2 piece/pieces (Min. order)</span>
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
