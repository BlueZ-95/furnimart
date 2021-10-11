import { useEffect, useState } from "react";
import { ProductCard } from "..";

export const Products = () => {
  let baseURL = "http://localhost:3001";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(baseURL + "/products")
      .then((res) => res.json())
      .then((_products) => {
        setProducts(_products);
      });
  }, []);
  return (
    <div className="products container mx-auto px-48 py-8">
      <div className="flex flex-wrap items-start justify-between">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              productImage={product.productImage}
              productTitle={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              productImage={product.productImage}
              productTitle={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
};
