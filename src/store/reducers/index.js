import { combineReducers } from "@reduxjs/toolkit";
import diarySlices from "./diary";
import modalSlice from "./modal";
import userSlice from "./user";

export const rootReducer = combineReducers({
  diary: diarySlices.reducer,
  modal: modalSlice.reducer,
  user: userSlice.reducer,
});
