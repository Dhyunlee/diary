import Header from "./components/Header";
import DiaryTemplate from "./layouts/DiaryTemplate";
import Routers from "./routers";

function App() {
  return (
    <>
      <Header />
      <DiaryTemplate>
        <Routers/>
      </DiaryTemplate>
    </>
  );
}

export default App;
