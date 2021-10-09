import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import { currentUserName } from "../../lib/recoil-atoms";

export const Header = () => {
  const userName = useRecoilValue(currentUserName);

  return (
    <div className="header bg-gray-100 py-8">
      <div className="container mx-auto px-48">
        <div className="flex items-center justify-between">
          <div className="header__logo">
            <h1 className="text-3xl font-bold">
              <span className="text-green-500">Furni</span>mart
            </h1>
          </div>
          <ul className="header__navigation text-xl text-gray-700 font-medium cursor-pointer">
            <li>
              <FiShoppingCart />
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
