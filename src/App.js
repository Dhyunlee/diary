import DiaryTemplate from "./layouts/DiaryTemplate";
import Header from './components/Header'
import DiaryList from "./pages/DiaryList";

function App() {
  return (
    <DiaryTemplate>
      <Header />
      <DiaryList/>
    </DiaryTemplate>
  );
}

export default App;
