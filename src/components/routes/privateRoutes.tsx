import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES_PATH } from "../../constants/paths/routes_path";
import Home from "../../pages/home";

const ProtectedRoutes = () => {
  const {HOME} = ROUTES_PATH;

  return (
    // 로그인 되었을떄 보이는 페이지
    <Routes>
      <Route path={HOME} element={<Home />} />
      {/* 작업 편의성을 위함 */}
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
