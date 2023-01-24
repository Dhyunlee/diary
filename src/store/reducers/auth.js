import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  loginError: null,
  signupLoading: false,
  signupSuccess: false,
  signupError: null,
  logoutLoading: false,
  logoutSuccess: false,
  logoutError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
});

export default authSlice;
