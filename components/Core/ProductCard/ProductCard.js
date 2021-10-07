import { FiHeart } from "react-icons/fi";

export const ProductCard = ({ productImage, productTitle, productPrice }) => {
  return (
    <div className="product-card inline-block m-4">
      <div className="product-card__image relative w-52 rounded overflow-hidden flex justify-center">
        <img className="w-full" src={productImage} alt="product-image" />
        <div className="absolute p-0 bottom-0 flex items-center justify-center bg-white border-b-2 border-green-400 text-center rounded-tl rounded-tr text-xl">
          <span className="p-3 border-r border-gray-400 hover:text-red-400">
            <FiHeart />
          </span>
          <p className="p-3">ADD TO CART</p>
        </div>
      </div>
      <p className="product-card__title mt-4 text-gray-500">{productTitle}</p>
      <p className="product-card__price mt-2 text-gray-800 font-bold">
        {productPrice}
      </p>
    </div>
  );
};
