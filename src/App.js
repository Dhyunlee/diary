import Header from "./components/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";
import { Wrap } from "./styles/common";

function App() {
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
