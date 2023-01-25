import Header from "./components/base/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { Wrap } from "./styles/common";

const App = () => {
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
