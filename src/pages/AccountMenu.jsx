import { ProductCard } from "../shared/components/ProductCard";

const AccountMenu = () => {
  const products = [
    {
      name: "Airpods",
      price: 1200,
      preview: Image,
    },
    {
      name: "Minispeaker",
      price: 430,
    },
  ];

  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};
export default AccountMenu;
