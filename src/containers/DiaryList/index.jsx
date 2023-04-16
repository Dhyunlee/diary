import React, { useCallback, useEffect, useState } from 'react';
import DiaryListView from '@components/DiaryListView';
import { fetchGetDiary } from '@services/diary';
import { useSelector } from 'react-redux';
import { format, add, sub } from 'date-fns';
import { getState } from '@store/reducers/user';
import DiaryHeader from '@components/DiaryHeader';

const DiaryList = ({ isLoggedIn }) => {
  const [diary, setDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const thisMonth = format(currentDate, 'yyyy년 MM월');
  const getMonth = thisMonth.substring(6);

  const { loadUserInfo } = useSelector(getState);

  const fetchDiaryList = useCallback(async () => {
    setIsLoading(true);
    const data = loadUserInfo && (await fetchGetDiary(loadUserInfo.userId, getMonth));
    if (data) {
      setIsLoading(false);
      setDiary(data);
    }
  }, [getMonth, loadUserInfo]);

  useEffect(() => {
    fetchDiaryList();
  }, [fetchDiaryList]);

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
      {isLoggedIn && loadUserInfo && <DiaryListView isLoading={isLoading} diaryList={diary} />}
    </>
  );
};

export default React.memo(DiaryList);
