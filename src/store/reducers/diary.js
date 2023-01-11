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
});

export const getDiary = state => state.diary;
export default diarySlice;
