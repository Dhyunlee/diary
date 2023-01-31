import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modal";
import userSlice from "./user";

export const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  user: userSlice.reducer 
});
