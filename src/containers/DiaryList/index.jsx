import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DiaryListView from "../../components/DiaryListView";
import { loadDiary } from "../../store/actions/diary";
import { getDiary } from "../../store/reducers/diary";

function DiaryList() {
  const dispatch = useDispatch();
  const {diary, isLoading} = useSelector(getDiary);

  useEffect(() => {
    if(!isLoading) {
      dispatch(loadDiary());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DiaryListView isLoading={isLoading} diaryList={diary} />;
}

export default DiaryList;
