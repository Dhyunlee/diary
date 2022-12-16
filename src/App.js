import DiaryTemplate from "./layouts/DiaryTemplate";
import DiaryList from "./pages/DiaryList";
import DiaryHeader from "./components/DiaryHeader";

function App() {
  return (
    <DiaryTemplate>
      <DiaryHeader />
      <DiaryList/>
    </DiaryTemplate>
  );
}

export default App;
