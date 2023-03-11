import React from "react";

//TERMINAR
const ProductoDetalleMasterPro = () => {
  return (
    <div className="nose_todo">
      <div className="imageProduct">
        <img src="#" alt="" width={400} height={300} />
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
          <span>The minimum order quantity is 2 piece 2/2 piece</span>
          <span>from 6.50</span>
          <span>shiping</span>
          {/* la verdad son muchos div y me confundo TERMINAR */}
        </div>
      </div>
    </div>
  );
};
export default ProductoDetalleMasterPro;
