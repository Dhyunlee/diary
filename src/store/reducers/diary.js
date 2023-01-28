import { createSlice } from "@reduxjs/toolkit";
import { loadDiary } from "../actions/diary";

const initialState = {
  isShowModal: false,
  isAuth: null,
  isLoading: false,
  isDone: false,
  isError: null,
  diary: [],
  singleDiary: {},
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    showEmotionModal: {
      reducer(state) {
        state.isShowModal = true;
      },
    },
    dropEmotionModal: {
      reducer(state) {
        state.isShowModal = false;
      },
    },
  },
});

export const getState = (state) => state.diary;
export const { showEmotionModal, dropEmotionModal } = diarySlice.actions;
export default diarySlice;
