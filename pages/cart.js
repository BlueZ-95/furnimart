import { CartItems, Header } from "../components";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useSetRecoilState } from "recoil";
// import { currentUserState } from "../lib/recoil-atoms";

export default function Cart() {
  //   const router = useRouter();
  //   const setUserState = useSetRecoilState(currentUserState);
  //   useEffect(() => {
  //     const _currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //     if (_currentUser) {
  //       setUserState(_currentUser);
  //     } else {
  //       router.push("/login");
  //     }
  //   }, []);
  return (
    <>
      <Header />
      <CartItems />;
    </>
  );
}
