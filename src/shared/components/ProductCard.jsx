import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button} from 'antd';
import {MessageOutlined} from '@ant-design/icons';

const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product", { state: props});
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
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>


          <p style={{ fontSize: "18px" }}>{props.product.name}</p>
          <p style={{ fontSize: "18px" }}>Precio: {props.product.price}</p>
          <p style={{ fontSize: "18px" }}>Minimo de compra: {props.product.minimo}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
          < Button type="primary" style={{ background: "#388087" }}>Message {<MessageOutlined />}</Button>
          </div>
          
         
          
        </Card>
      </a>
    </>
  );
};
export default ProductCard;
