import { combineReducers } from "@reduxjs/toolkit";
import diarySlice from "./diary";
import authSlice from "./auth";

export const rootReducer = combineReducers({
  diary: diarySlice.reducer,
  auth: authSlice.reducer 
});
