import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Detail from "@pages/Detail";
import WriteDiary from "@pages/WriteDiary";
import Mypage from "@pages/Mypage";
import PrivateRoute from "./PrivateRoute";

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
