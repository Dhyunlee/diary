import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOut } from "services/auth";
import { fetchGetUserInfo } from "services/user";
import { QueryDiary } from "./types";

export const getUserInfo = createAsyncThunk("user/userInfo", async (userId: QueryDiary) => {
  const res = await fetchGetUserInfo(userId);
  return res;
});

export const getLogOut = createAsyncThunk("user/logout", async () => {
  const res = await logOut();
  return res;
});
