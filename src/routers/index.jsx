import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import IndexPage from '@pages/IndexPage';
import DetailPage from '@pages/DetailPage';
import WriteDiary from '@pages/WriteDiary';
import EditPage from '@pages/EditPage';
const Routers = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" index element={<IndexPage isLoggedIn={isLoggedIn} />} />
      <Route
        path="write"
        element={isLoggedIn ? <WriteDiary /> : <Navigate to="/" replace={false} />}
      />
      <Route
        path="detail/:title"
        element={isLoggedIn ? <DetailPage /> : <Navigate to="/" replace={false} />}
      />
      <Route
        path="/edit/:title"
        element={isLoggedIn ? <EditPage /> : <Navigate to="/" replace={false} />}
      />
      <Route path="not-found" element={<div>요청하신 페이지가 없습니다.</div>} />
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  );
};

export default Routers;
