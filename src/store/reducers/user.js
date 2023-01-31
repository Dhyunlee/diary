import { createSlice } from "@reduxjs/toolkit";
import { getLogOut, getUserInfo } from "@store/actions/users";

const initialState = {
  loadUserLoading: false, //로그인 정보(유저 정보) 로딩 상태
  loadUserInfo: undefined, //로그인 정보(유저 정보)
  isLoggedIn: false,
  loadUserError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.loadUserLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loadUserLoading = false;
        state.isLoggedIn = true;
        state.loadUserInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loadUserLoading = false;
        state.loadUserError = action.payload;
      })
      .addCase(getLogOut.pending, (state) => {
        state.loadUserLoading = true;
      })
      .addCase(getLogOut.fulfilled, (state, action) => {
        state.loadUserLoading = false;
        state.isLoggedIn = false;
        state.loadUserInfo = action.payload;
      })
      .addCase(getLogOut.rejected, (state, action) => {
        state.loadUserLoading = false;
        state.loadUserError = action.payload;
      })
});

export const getState = (state) => state.user;
export default userSlice;
