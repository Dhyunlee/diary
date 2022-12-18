import DiaryTemplate from "./layouts/DiaryTemplate";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import DiaryDetail from "./pages/DiaryDetail";

function App() {
  return (
    <>
      <header>헤더 영역</header>
      <DiaryTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<DiaryDetail />} />
        </Routes>
      </DiaryTemplate>
    </>
  );
}

export default App;
