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
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="detail/:id"
        element={
          <PrivateRoute>
            <Detail />
          </PrivateRoute>
        }
      />
      <Route
        path="write"
        element={
          <PrivateRoute>
            <WriteDiary />
          </PrivateRoute>
        }
      />
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
