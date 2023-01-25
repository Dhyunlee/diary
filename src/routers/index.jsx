import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import PrivateRoute from "./PrivateRoute";
import Mypage from "../pages/Mypage";
import WriteDiary from "../pages/WriteDiary";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="write" element={<WriteDiary />} />
      <Route
        path="mypage"
        element={
          <PrivateRoute>
            <Mypage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
