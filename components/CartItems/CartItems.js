import { useRecoilState } from "recoil";
import { CartItem } from "..";
import { currentCartState } from "../../lib/recoil-atoms";

export const CartItems = () => {
  const [_currentCartState, _setCurrentCartState] =
    useRecoilState(currentCartState);
  return (
    <div className="cart-items">
      <p>Cart Items</p>
      {
        _currentCartState.map((item) => {
          return (<CartItem title={item.productTitle} price={item.productPrice} />)
        })
      }
    </div>
  );
};
