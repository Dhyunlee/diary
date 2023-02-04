import React, { useEffect, useState } from "react";
import DiaryItem from "@components/DiaryItem";
import { DiaryContainer, DiaryListBox } from "./styles";
import { useDispatch } from "react-redux";
import { showAuthModal } from "@store/reducers/modal";

const DiaryListView = ({ isLoading, diaryList }) => {
  console.log({ isLoading, diaryList })
  const dispatch = useDispatch();

  useEffect(() => {
    if(diaryList === undefined) {
      console.log('없음')
      dispatch(showAuthModal())
    }
  }, [diaryList, dispatch])
  return (
    <DiaryContainer>
      <DiaryListBox>
        {isLoading && <div>로딩중...</div>}
        {diaryList?.length === 0 ? (
          <div>작성하신 내용이 없습니다.</div>
        ) : (
          diaryList?.map((diary) => <DiaryItem key={diary.id} {...diary} />)
        )}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default React.memo(DiaryListView);
