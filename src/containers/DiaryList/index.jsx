import React, { useEffect, useState } from "react";
import DiaryListView from "@components/DiaryListView";
import { useDispatch, useSelector } from "react-redux";
import { format, add, sub } from "date-fns";
import { getUserState } from "@store/reducers/user";
import { getDiaryState } from "@store/reducers/diary";
import DiaryHeader from "@components/DiaryHeader";
import { getDiaryList } from "@store/actions/diary";

const DiaryList = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const thisMonth = format(currentDate, "yyyy년 MM월");
  const getMonth = thisMonth.substring(6);

  const { loadUserInfo } = useSelector(getUserState);
  const { diaryList } = useSelector(getDiaryState);

  const userId = loadUserInfo?.userId;

  useEffect(() => {
    dispatch(getDiaryList({ userId, getMonth }));
  }, [dispatch, getMonth, userId]);

  const onIncreateMonth = () => {
    setCurrentDate((prev) => add(prev, { months: 1 }));
  };
  const ondecreateMonth = () => {
    setCurrentDate((prev) => sub(prev, { months: 1 }));
  };

  return (
    <>
      <DiaryHeader
        thisMonth={thisMonth}
        onIncreateMonth={onIncreateMonth}
        ondecreateMonth={ondecreateMonth}
      />
      {isLoggedIn && loadUserInfo && <DiaryListView diaryList={diaryList} />}
    </>
  );
};

export default React.memo(DiaryList);
