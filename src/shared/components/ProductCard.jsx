import { Card } from "antd";
import React from "react";

export const ProductCard = (props) => {
  console.log(props);
  return (
    <Card
      title={props.product.name}
      bordered={false}
      style={{ width: 300, color: "black" }}
    >
      <p>{props.product.price}</p>
    </Card>
  );
};