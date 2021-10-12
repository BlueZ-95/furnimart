import { FiShoppingCart } from "react-icons/fi";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItem, ProductCard } from "..";
import {
  currentCartState,
  numberOfItemsInCart,
  totalAmount,
} from "../../lib/recoil-atoms";

export const CartItems = () => {
  const [_currentCartState, _setCurrentCartState] =
    useRecoilState(currentCartState);
  const cartItemNumber = useRecoilValue(numberOfItemsInCart);

  const _totalAmount = useRecoilState(totalAmount);
  console.log(_totalAmount);
  return (
    <div className="cart-items flex flex-row justify-around container mx-auto px-48 py-8">
      <div className="cart-items__details">
        <div className="cart-items__title-container text-center flex flex-col justify-center items-center">
          <span className="cart-items__icon text-4xl">
            <FiShoppingCart />
          </span>
          <h2 className="text-4xl font-bold">Confirm Cart</h2>
          <p className="text-2xl text-gray-500">{cartItemNumber} Items</p>
        </div>
        <div className="cart-items__items-list flex flex-wrap">
          {_currentCartState.map((item) => {
            return (
              <CartItem
                image={item.productImage}
                title={item.productTitle}
                price={item.productPrice}
              />
            );
          })}
        </div>
      </div>
      <div className="cart-items__overview">
        <h2 className="text-2xl text-gray-700">Overview</h2>
        <div className="cart-items__overview-card shadow rounded-xl w-full">
          <h1>S</h1>
        </div>
      </div>
    </div>
  );
};
