import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowAuthModal: false,
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
  reducers: {
    showAuthModal: {
      reducer(state) {
        state.isShowAuthModal = true;
      },
    },
    dropAuthModal: {
      reducer(state) {
        state.isShowAuthModal = false;
      },
    },
  },
});

export const {showAuthModal, dropAuthModal} = authSlice.actions
export default authSlice;

