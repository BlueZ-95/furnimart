import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Header, Products } from "..";
import { currentUserState } from "../../lib/recoil-atoms";

export const Home = () => {
  const setUserState = useSetRecoilState(currentUserState);
  const router = useRouter();

  useEffect(() => {
    const _currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (_currentUser) {
      setUserState(_currentUser);
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div className="home font-gemunu">
      <Header />
      <Products />
    </div>
  );
};
