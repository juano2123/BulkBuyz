import { Card, Col, Divider, Row } from "antd";
import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <Card
        title={props.product.name}
        bordered={false}
        style={{ width: 300, color: "black", margin: "1rem" }}
      >
        <p>{props.product.price}</p>
      </Card>
    </>

    /*
    <Card
      title={props.product.name}
      bordered={false}
      style={{ width: 300, color: "black" }}
    >
      <p>{props.product.price}</p>
    </Card>
    */
  );
};
export default ProductCard;
