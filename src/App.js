import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "@store/actions/users";
import Header from "./components/Base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { authService } from "./fbconfig";

import { useSelector } from "react-redux";
import { getState } from "@store/reducers/user";

import { Wrap } from "./styles/common";
import Spinners from "@components/Spinners";
import { BounceLoader } from "react-spinners";
import Modal from "@components/Base/Modal";

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

  const ComponentIsNotLogged = () => {
    if (isLoggedIn === false) {
      console.log("인증 필요");
      return (
        <div
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          <p>다이어리를 사용하시려면 인증이 필요합니다.</p>
        </div>
      );
    }
  };

  return (
    <Wrap>
      <>
        {isLoggedIn && loadUserInfo === undefined ? (
          <Spinners
            type="bar"
            color="#424242"
            loading={loadUserInfo}
          />
        ) : (
          <div>
            <Header isLoggedIn={isLoggedIn} />
            <>
              <DiaryTemplate>
                {isLoggedIn ? (
                  <Routers isLoggedIn={isLoggedIn} />
                ) : (
                  ComponentIsNotLogged()
                )}
              </DiaryTemplate>
            </>
          </div>
        )}
      </>
    </Wrap>
  );
};

export default App;
