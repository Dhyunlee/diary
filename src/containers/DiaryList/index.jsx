import React, { useCallback, useEffect, useState } from "react";
import DiaryListView from "@components/DiaryListView";
import { fetchGetDiary } from "@services/diary";

const DiaryList = ({getMonth}) => {
  const [diary, setDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDiaryList = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchGetDiary(getMonth);
    console.log({data})
    setIsLoading(false);
    setDiary(data);
  }, [getMonth]);

  useEffect(() => {
    fetchDiaryList();
  }, [fetchDiaryList]);

  if (isLoading) return <div>로딩중...</div>;
  console.log(diary.length)
  return (
    <>{diary && <DiaryListView isLoading={isLoading} diaryList={diary} />}</>
  );
};

export default React.memo(DiaryList);
