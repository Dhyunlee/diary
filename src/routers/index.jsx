import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Detail from "@pages/Detail";
import WriteDiary from "@pages/WriteDiary";
import Mypage from "@pages/Mypage";
const Routers = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" index element={<Home isLoggedIn={isLoggedIn} />} />
      <>
        <Route path="detail/:id" element={isLoggedIn ? <Detail /> : <Navigate to='/' replace={false}/>} />
        <Route path="write" element={isLoggedIn ? <WriteDiary /> : <Navigate to='/' replace={false}/>} />
        <Route path="mypage" element={isLoggedIn ? <Mypage /> : <Navigate to='/' replace={false}/> } />
        <Route
          path="not-found"
          element={<div>요청하신 페이지가 없습니다.</div>}
        />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </>
    </Routes>
  );
};

export default Routers;
