import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, add, sub } from "date-fns";
import DiaryListView from "components/DiaryListView";
import DiaryHeader from "components/DiaryHeader";
import { getUserState } from "store/reducers/user";
import { getDiaryState } from "store/reducers/diary";
import { getDiaryList } from "store/actions/diary";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getThisMonthData } from "utils/getThisMonthData";

interface IProps {
  isLoggedIn: boolean;
}
const DiaryList = ({ isLoggedIn }: IProps) => {
  const alert = withReactContent(Swal);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today] = useState(new Date());
  const curMonth = format(currentDate, "yyyy년 MM월");

  const thisMonth_ = format(today, "yyyy-MM").split("-").join("");
  const curMonth_ = format(new Date(currentDate), "yyyy-MM").split("-").join("");

  const { loadUserInfo } = useSelector(getUserState);
  const { diaryList } = useSelector(getDiaryState);

  const userId = loadUserInfo?.userId;
  const sortedDiaryList = useMemo(() => getThisMonthData(diaryList, currentDate), [currentDate, diaryList])

  useEffect(() => {
    dispatch(getDiaryList({ userId }));
  }, [dispatch, userId]);

  const onIncreateMonth = () => {
    if(thisMonth_ <=curMonth_) {
      alert.fire({
        html: <p style={{ fontSize: 18 }}>이번달까지만 조회 가능합니다.</p>,
        icon: "warning",
      });
      return;
    }
    setCurrentDate((prev) => add(prev, { months: 1 }));
  };
  const ondecreateMonth = () => {
    setCurrentDate((prev) => sub(prev, { months: 1 }));
  };

  return (
    <>
      <DiaryHeader
        curMonth={curMonth}
        onIncreateMonth={onIncreateMonth}
        ondecreateMonth={ondecreateMonth}
      />
      {isLoggedIn && <DiaryListView diaryList={sortedDiaryList} />}
    </>
  );
};

export default React.memo(DiaryList);
