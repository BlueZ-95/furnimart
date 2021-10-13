import { FiMapPin, FiPhone, FiShoppingCart, FiUser } from "react-icons/fi";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItem, ProductCard } from "..";
import {
  currentCartState,
  numberOfItemsInCart,
  totalAmount,
  userNameState,
} from "../../lib/recoil-atoms";

export const CartItems = () => {
  const [_currentCartState, _setCurrentCartState] =
    useRecoilState(currentCartState);
  const cartItemNumber = useRecoilValue(numberOfItemsInCart);
  const userName = useRecoilValue(userNameState);
  const _totalAmount = useRecoilState(totalAmount);

  return (
    <div className="cart-items flex flex-row justify-around container mx-auto px-40">
      <div className="cart-items__details border-r border-gray-300 w-9/12 py-8">
        <div className="cart-items__title-container text-center flex flex-col justify-center items-center my-4">
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
      {/* Shipping Information */}
      <div className="cart-items__overview w-3/12 pl-4 py-8">
        <div className="cart-items__overview-card">
          <div className="cart-items__shipping-information rounded-xl bg-gray-100 my-4 px-8 py-6 text-gray-700">
            <h2 className="text-lg font-bold text-black">
              Shipping Information
            </h2>
            <div className="cart-items__shipping-name flex my-2">
              <FiUser className="text-xl text-green-500" />
              <p className="pl-3">{userName}</p>
            </div>
            <div className="cart-items__shipping-address flex my-2">
              <FiMapPin className="text-3xl text-green-500" />
              <p className="pl-3">
                7348 Scarletwood Ter San Jose, CA 91259 - 1940
              </p>
            </div>
            <div className="cart-items__shipping-contact-number flex my-2">
              <FiPhone className="text-xl text-green-500" />
              <p className="pl-3">408-027-8153</p>
            </div>
          </div>
          {/* Total */}
          <div className="cart-items__receipt my-4 px-4 py-6 text-gray-700 text-lg">
            <div className="cart-items__subtotal flex justify-between my-2">
              <p>Subtotal</p>
              <p className="pl-3">{_totalAmount} Rs</p>
            </div>
            <div className="cart-items__taxes flex justify-between my-2">
              <p>Taxes</p>
              <p className="pl-3">Free</p>
            </div>
            <div className="cart-items__total flex justify-between my-2 py-2 text-black font-bold border-t border-gray-300">
              <p>Total Price</p>
              <p className="pl-3">{_totalAmount} Rs</p>
            </div>
          </div>
          {/* Place Order Button */}
          {/* <div className="cart-items__button my-4 px-8 py-6"> */}
          <button
            className="bg-green-500 hover:bg-green-400 px-8 py-4 rounded-lg float-right text-white"
            type="button"
          >
            PLACE YOUR ORDER
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
