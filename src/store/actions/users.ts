import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOut } from "services/auth";
import { fetchGetUserInfo } from "services/user";

export const getUserInfo = createAsyncThunk("user/userInfo", async (userId: string) => {
  const res = await fetchGetUserInfo(userId);
  return res;
});

export const getLogOut = createAsyncThunk("user/logout", async () => {
  const res = await logOut();
  return res;
});
