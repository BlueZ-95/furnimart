import { useRecoilState } from "recoil";
import { CartItem } from "..";
import { currentCartState, totalAmount } from "../../lib/recoil-atoms";

export const CartItems = () => {
  const [_currentCartState, _setCurrentCartState] =
    useRecoilState(currentCartState);

  const _totalAmount = useRecoilState(totalAmount);
  console.log(_totalAmount);
  return (
    <div className="cart-items flex flex-row justify-between">
      <div className="cart-items__details">
        <p>Cart Items</p>
        {_currentCartState.map((item) => {
          return (
            <CartItem title={item.productTitle} price={item.productPrice} />
          );
        })}
      </div>
      <div className="cart-items__overview"></div>
    </div>
  );
};
