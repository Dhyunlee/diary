import React, { useCallback, useEffect, useState } from "react";
import DiaryListView from "@components/DiaryListView";
import { fetchGetDiary } from "@services/diary";
import {useSelector} from 'react-redux'
import { getState } from "@store/reducers/user";

const DiaryList = ({getMonth}) => {
  const [diary, setDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { loadUserInfo } = useSelector(getState);
  
  const fetchDiaryList = useCallback(async () => {
    setIsLoading(true);
    const data = loadUserInfo && await fetchGetDiary(loadUserInfo.userId, getMonth);
    setIsLoading(false);
    setDiary(data);
  }, [getMonth, loadUserInfo]);

  useEffect(() => {
    fetchDiaryList();
  }, [fetchDiaryList]);

  return (
    <>{<DiaryListView isLoading={isLoading} diaryList={diary} />}</>
  );
};

export default React.memo(DiaryList);
