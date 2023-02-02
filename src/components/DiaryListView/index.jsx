import React from 'react';
import DiaryItem from "@components/DiaryItem";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryListView = ({diaryList}) => {
  return (
    <DiaryContainer>
      <DiaryListBox>
        {diaryList.length === 0 && <div>작성하신 내용이 없습니다.</div>}
        {diaryList?.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default React.memo(DiaryListView);
