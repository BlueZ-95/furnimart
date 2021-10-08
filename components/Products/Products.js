import { ProductCard } from "..";

export const Products = () => {
  return (
    <div className="products container mx-auto px-48">
      <div className="flex flex-wrap items-center justify-between">
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
    </div>
  );
};
