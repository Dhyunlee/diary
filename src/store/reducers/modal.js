import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmotionModal: false,
  isAuthModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showAuthModal: {
      reducer(state) {
        state.isAuthModal = true;
      },
    },
    dropAuthModal: {
      reducer(state) {
        state.isAuthModal = false;
      },
    },
    showEmotionModal: {
      reducer(state) {
        state.isEmotionModal = true;
      },
    },
    dropEmotionModal: {
      reducer(state) {
        state.isEmotionModal = false;
      },
    },
  },
});

export const getModalState = (state) => state.modal;
export const {
  showAuthModal,
  dropAuthModal,
  showEmotionModal,
  dropEmotionModal,
} = modalSlice.actions;
export default modalSlice;
