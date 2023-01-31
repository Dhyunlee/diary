import { useEffect, useState } from "react";
import Header from "./components/base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { authService } from "./fbconfig";
import { Wrap } from "./styles/common";
import { getUserInfo } from "@store/actions/users";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      dispatch(getUserInfo(user?.uid));
    });
  }, [dispatch]);

  return (
    <Wrap>
      <Header />
      <DiaryTemplate>
        <Routers />
      </DiaryTemplate>
    </Wrap>
  );
};

export default App;
