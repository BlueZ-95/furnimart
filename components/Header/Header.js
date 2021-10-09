import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { numberOfItemsInCart, userNameState } from "../../lib/recoil-atoms";

export const Header = () => {
  const userName = useRecoilValue(userNameState);
  const cartItemNumber = useRecoilValue(numberOfItemsInCart);

  return (
    <div className="header bg-gray-100 py-8">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between">
          <div className="header__logo">
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">Furni</span>mart
            </h1>
          </div>
          <div className="header__searchbar flex items-center justify-center border rounded-lg bg-white">
            <input
              type="text"
              className="w-96 bg-white mx-1 p-2 outline-none focus:border-green-700"
              name="searchbar"
              id="searchbar"
            />
            <span className="mx-3 text-xl text-gray-400">
              <IoSearch />
            </span>
          </div>
          <ul className="header__navigation text-xl text-gray-700 font-medium cursor-pointer">
            <li>
              <div className="relative">
                {cartItemNumber > 0 && (
                  <span className="absolute flex items-center justify-center top-0 right-full text-sm bg-green-400 w-5 h-5 rounded-full">
                    {cartItemNumber}
                  </span>
                )}
                <FiShoppingCart />
              </div>
            </li>
            <li>
              <FiUser />
            </li>
            <li>{userName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
