import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetDiary } from "../../services/diary";

export const loadDiary = createAsyncThunk(
  "diary/loadDiary",
  async (_, thunkAPI) => {
    try {
      const getData = await fetchGetDiary();
      return getData;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { diary } = getState();
      if (diary.isLoading) { // 중복 요청 방지 (최초 1번만 요청)
        return false;
      }
      return true;
    },
  }
);
