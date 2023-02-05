import React, { useCallback, useEffect, useState } from "react";
import DiaryListView from "@components/DiaryListView";
import { fetchGetDiary } from "@services/diary";
import { useSelector } from "react-redux";
import { format, add, sub } from "date-fns";
import { getState } from "@store/reducers/user";
import DiaryHeader from "@components/DiaryHeader";

const DiaryList = ({ isLoggedIn }) => {
  const [diary, setDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const thisMonth = format(currentDate, "yyyy년 MM월");
  const getMonth = thisMonth.substring(6);

  const { loadUserInfo } = useSelector(getState);

  const fetchDiaryList = useCallback(async () => {
    const data =
      loadUserInfo && (await fetchGetDiary(loadUserInfo.userId, getMonth));
    setIsLoading(false);
    setDiary(data);
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

  // if (!isLoggedIn && !loadUserInfo) {
  //   return (
  //     <div>
  //       <p>다이어리를 사용하시려면 인증이 필요합니다.</p>
  //     </div>
  //   );
  // }
  return (
    <>
      <DiaryHeader
        thisMonth={thisMonth}
        onIncreateMonth={onIncreateMonth}
        ondecreateMonth={ondecreateMonth}
      />
      {isLoggedIn && loadUserInfo ? (
        <DiaryListView isLoading={isLoading} diaryList={diary} />
      ) : (
          <div style={{marginTop: 150,fontSize: 18, textAlign: 'center'}}>
            <p>다이어리를 사용하시려면 인증이 필요합니다.</p>
          </div>
      )}
    </>
  );
};

export default React.memo(DiaryList);
