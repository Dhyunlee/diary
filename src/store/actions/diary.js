const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchGetDiary, fetchGetDiaryById } = require("@services/diary");

export const getDiaryList = createAsyncThunk(
  "diary/detailList",
  async (data) => {
    const { userId, getMonth } = data;
    const resData = await fetchGetDiary(userId, getMonth);
    return resData;
  }
);

export const getDetailDiary = createAsyncThunk(
  "diary/detailDiary",
  async (userId) => {
    const resData = await fetchGetDiaryById(userId);
    return resData;
  }
);
