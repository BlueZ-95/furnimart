import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Counter from "../components/counter";
import { Home } from "../components/Home/Home";
import { currentUserState } from "../lib/recoil-atoms";

const IndexPage = () => {
  let currentUser = useRecoilValue(currentUserState);

  return <Home />;
};

export default IndexPage;
