import { FiTrash2 } from "react-icons/fi";

export const CartItem = ({ image, title, price }) => {
  return (
    <div className="cart-item items-center mx-2 my-3">
      <div className="cart-item__image w-40 rounded-3xl max-h-52 overflow-hidden">
        <img className="block w-full h-52" src={image} alt="cart-item" />
      </div>
      <div className="cart-item__details pl-4 pt-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-md">{price} Rs</p>
      </div>
    </div>
  );
};
