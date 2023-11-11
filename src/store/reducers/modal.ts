import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmotionModal: false,
  isAuthModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showAuthModal: (state) => {
      state.isAuthModal = true;
    },
    dropAuthModal: (state) => {
      state.isAuthModal = false;
    },
    showEmotionModal: (state) => {
      state.isEmotionModal = true;
    },
    dropEmotionModal: (state) => {
      state.isEmotionModal = false;
    },
  },
});

export const getModalState = (state: any) => state.modal;
export const {
  showAuthModal,
  dropAuthModal,
  showEmotionModal,
  dropEmotionModal,
} = modalSlice.actions;
export default modalSlice;
