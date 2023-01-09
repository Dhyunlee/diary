import { combineReducers } from "@reduxjs/toolkit";
import diarySlice from "./diary";

export const rootReducer = combineReducers({
  diary: diarySlice.reducer,
});
