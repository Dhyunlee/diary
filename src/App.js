import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "@store/actions/users";
import Header from "./components/base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { authService } from "./fbconfig";

import { useSelector } from "react-redux";
import { getState } from "@store/reducers/user";

import { Wrap } from "./styles/common";
import { DiaryContainer } from "@components/DiaryListView/styles";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { loadUserInfo } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserInfo(user?.uid));
        setIsLoggedIn(true);
      } else {
        dispatch(getUserInfo(false));
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  if (isLoggedIn === null && !loadUserInfo) return <div>불러오는중...</div>;
  return (
    <Wrap>
      <>
        <Header isLoggedIn={isLoggedIn} />
        <>
          <DiaryTemplate>
            <DiaryContainer>
              <Routers isLoggedIn={isLoggedIn}/>
            </DiaryContainer>
          </DiaryTemplate>
        </>
      </>
    </Wrap>
  );
};

export default App;
