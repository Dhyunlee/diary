import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Routers from "./routers";
import { authService } from "./fbconfig";
import DiaryTemplate from "./layouts/DiaryTemplate";
import { getUserInfo } from "store/actions/users";
import { getUserState } from "store/reducers/user";
import Header from "./components/Base/Header";
import Spinners from "components/Base/Spinners";
import { Wrap } from "./styles/common";
import { AppDispatch } from "store/configureStore";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const { loadUserInfo } = useSelector(getUserState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserInfo(user?.uid));
        setIsLoggedIn(true);
      } else {
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
        {isLoggedIn && !loadUserInfo ? (
          <Spinners type="bar" color="#424242" loading={loadUserInfo} />
        ) : (
          <div>
            {isLoggedIn && (
              <>
                <Header isLoggedIn={isLoggedIn} />
                <DiaryTemplate>
                  {isLoggedIn !== null ? (
                    <Routers isLoggedIn={isLoggedIn} />
                  ) : (
                    ComponentIsNotLogged()
                  )}
                </DiaryTemplate>
              </>
            )}
          </div>
        )}
      </>
    </Wrap>
  );
};

export default App;
