import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
});

export const getState = (state) => state.auth;
export default authSlice;

