import { Card, Col, Divider, Row } from "antd";
import React from "react";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const ProductCard = (props) => {
  return (
    <>
      <Divider orientation="left">Responsive</Divider>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Col className="gutter-row" span={8} style={{ padding: "0 8px" }}>
          <div style={style}>col-8</div>
        </Col>
      </Row>
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
