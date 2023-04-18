import { getDiaryList, getDetailDiary } from "store/actions/diary";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  diaryList: null,
  detailDiary: null,
  diaryListLoading: false,
  diaryListError: null,
  detailDiaryLoading: false,
  detailDiaryError: null,
};

const diarySlices = createSlice({
  name: "diary",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getDiaryList.pending, (state) => {
        state.diaryListLoading = true;
        state.diaryList = null;
        state.diaryListError = null;
      })
      .addCase(getDiaryList.fulfilled, (state, action) => {
        state.diaryListLoading = false;
        state.diaryList = action.payload;
      })
      .addCase(getDiaryList.rejected, (state, action) => {
        state.diaryListLoading = false;
        state.diaryListError = action.error;
      })
      .addCase(getDetailDiary.pending, (state) => {
        state.detailDiaryLoading = true;
        state.detailDiary = null;
        state.detailDiaryError = null;
      })
      .addCase(getDetailDiary.fulfilled, (state, action) => {
        state.detailDiaryLoading = false;
        state.detailDiary = action.payload;
      })
      .addCase(getDetailDiary.rejected, (state, action) => {
        state.detailDiaryLoading = false;
        state.detailDiaryError = action.error;
      }),
});

export const getDiaryState = (state) => state.diary;
export default diarySlices;
