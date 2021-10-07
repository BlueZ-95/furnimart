import { Header, ProductCard } from "..";

export const Home = () => {
  return (
    <div className="home font-gemunu">
      <Header />
      <ProductCard
        productImage="/sample-image-small.jpg"
        productTitle="Product Title"
        productPrice="5000 Rs"
      />
      <ProductCard
        productImage="/sample-image-small.jpg"
        productTitle="Product Title"
        productPrice="5000 Rs"
      />
    </div>
  );
};
