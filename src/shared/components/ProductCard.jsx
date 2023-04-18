import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <a href="#" onClick={handleClick}>
        <Card
          // title={props.product.name}
          bordered={false}
          style={{
            width: 300,
            color: "black",
            margin: "1rem",
          }}
          cover={
            /* */
            <img
              className="img-product-detail"
              alt="example"
              style={{ width: "260px", height: "260px", marginTop: "1em" }}
              src={props.product.image}
            />
          }
        >
          <p>{props.product.price}</p>
        </Card>
      </a>
    </>
  );
};
export default ProductCard;
