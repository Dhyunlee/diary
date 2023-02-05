import DiaryItem from "@components/DiaryItem";
import React from "react";
import {DiaryListBox } from "./styles";

const DiaryListView = ({diaryList }) => {
  console.log('DiaryListView')
  return (
    <DiaryListBox>
      {diaryList?.length === 0 ? (
        <div>작성하신 내용이 없습니다.</div>
      ) : (
        diaryList?.map((diary) => <DiaryItem key={diary.id} {...diary} />)
      )}
    </DiaryListBox>
  );
};
export default React.memo(DiaryListView);
