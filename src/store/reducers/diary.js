import { getDate } from "@utils/lib";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentDate: getDate(new Date()).substring(0, 9),
};

const diarySlices = createSlice({
  name: "diary",
  initialState: initialState,
  reducers: {
    increamentMonth: {
      prepare: (state) => {
        const currentDate = getDate(new Date()).substring(0, 9);
        const changeDate = state.currentDate + 1;
        return changeDate < currentDate ? currentDate : currentDate;
      },
      reducer: (state, action) => {
        state.currentDate += action.payload;
      },
    },
    decrementMonth: {
      reducer: (state) => {
        state.currentDate = state.currentDate - 1;
      },
    },
  },
});

export const getState = (state) => state.diary;
export const { increamentMonth, decrementMonth } = diarySlices.actions;
export default diarySlices;
