import LOGO from "../images/LOGO.png";
import "./styles/inicio_sesion.css";
import { Button } from "antd";
import InputLogin from "../shared/components/InputLogin";
import { ProductCard } from "../shared/components/ProductCard";

function Inicio_sesion() {
  const products = [
    {
      name: "Airpods",
      price: 1200,
    },
    {
      name: "Minispeaker",
      price: 430,
    },
    {
      name: "apple",
      price: 100,
    },
  ];

  return (
    <div className="Inicio_sesion">
      <header>
        <img className="logo" alt="logo" src={LOGO}></img>
        <Button className="login" type="primary">
          login
        </Button>
        <Button className="register" type="primary">
          Register
        </Button>
      </header>

      <div className="Area_login">
        <div>
          <img className="los" alt="logo" src={LOGO}></img>
        </div>
        {/* <a>WELCOME</a> */}

        <InputLogin inputName={"Mail"} />
        <InputLogin inputName={"Password"} />
      </div>

      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default Inicio_sesion;
