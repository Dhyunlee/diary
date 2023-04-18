import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Header from "./components/Base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { authService } from "./fbconfig";
import { getUserInfo } from "@store/actions/users";
import { getUserState } from "@store/reducers/user";
import { Wrap } from "./styles/common";
import Spinners from "@components/Base/Spinners";
import { format } from "date-fns";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { loadUserInfo } = useSelector(getUserState);
  const dispatch = useDispatch();
  
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
