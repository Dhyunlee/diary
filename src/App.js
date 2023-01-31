import { useEffect } from "react";
import Header from "./components/base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { authService } from "./fbconfig";
import { Wrap } from "./styles/common";

const App = () => {
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      console.log(user)
    })
  }, [])
  return (
    <Wrap>
      <Header />
      <DiaryTemplate>
        <Routers />
      </DiaryTemplate>
    </Wrap>
  );
}

export default App;
