import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ProductCard } from "..";
import { currentCartState } from "../../lib/recoil-atoms";

export const Products = () => {
  let baseURL = "http://localhost:3001";
  const [products, setProducts] = useState([]);
  const [currentCart, setCurrentCart] = useRecoilState(currentCartState);

  const addItemToCart = (itemToAdd) => {
    setCurrentCart([...currentCart, itemToAdd]);
  };

  useEffect(() => {
    fetch(baseURL + "/products")
      .then((res) => res.json())
      .then((_products) => {
        setProducts(_products);
      });
  }, []);

  return (
    <div className="products container mx-auto px-40 py-8">
      <div className="flex flex-wrap items-start justify-between">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productImage={product.productImage}
              productTitle={product.productName}
              productPrice={product.productPrice}
              addItemToCart={addItemToCart}
            />
          );
        })}
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productImage={product.productImage}
              productTitle={product.productName}
              productPrice={product.productPrice}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
