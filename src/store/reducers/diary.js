import { createSlice } from "@reduxjs/toolkit";
import { loadDiary } from "../actions/diary";

const initialState = {
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
  extraReducers: (builder) =>
    builder
      .addCase(loadDiary.pending, (state, action) => {
        state.isLoading = true;
        state.isDone = false;
        state.isError = null;
      })
      .addCase(loadDiary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDone = true;
        state.diary = state.diary.concat(action.payload);
      })
      .addCase(loadDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      }),
});

export const getDiary = state => state.diary;
export default diarySlice;
