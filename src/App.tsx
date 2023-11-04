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
  console.log(loadUserInfo)
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

  const render = () => {
    if (isLoggedIn === null) {
      console.log("loading", { isLoggedIn });
      return <Spinners type="bar" color="#424242" loading={true} />;
    } else {
      if (isLoggedIn) {
        console.log("로그인함", { isLoggedIn });
        return (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <DiaryTemplate>
              <Routers isLoggedIn={isLoggedIn} />
            </DiaryTemplate>
          </>
        );
      } else {
        console.log("로그아웃", { isLoggedIn });
        return (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <DiaryTemplate>
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
            </DiaryTemplate>
          </>
        );
      }
    }
  };

  return <Wrap>{render()}</Wrap>;
};

export default App;
