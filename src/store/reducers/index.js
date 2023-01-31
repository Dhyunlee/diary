import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modal";
import authSlice from "./auth";

export const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  auth: authSlice.reducer 
});
