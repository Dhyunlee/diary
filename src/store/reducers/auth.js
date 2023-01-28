import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: false,
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
        state.isShowModal = true;
      },
    },
    dropAuthModal: {
      reducer(state) {
        state.isShowModal = false;
      },
    },
  },
});

export const getState = (state) => state.auth;
export const {showAuthModal, dropAuthModal} = authSlice.actions
export default authSlice;

