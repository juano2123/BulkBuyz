import { Card } from "antd";
import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <Card
        title={props.product.name}
        bordered={false}
        style={{
          width: 300,
          color: "black",
          margin: "1rem",
          background: "none",
        }}
      >
        <p>{props.product.price}</p>
      </Card>
    </>
  );
};
export default ProductCard;
