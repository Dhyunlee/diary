import DiaryItem from "@components/DiaryItem";
import React from "react";
import { DiaryListBox } from "./styles";

const DiaryListView = ({ diaryList }) => {
  return (
    <DiaryListBox>
      {diaryList?.length === 0 ? (
        <div className="empty-diary">
          <p>작성하신 내용이 없습니다.</p>
        </div>
      ) : (
        diaryList?.map((diary) => <DiaryItem key={diary.id} {...diary} />)
      )}
    </DiaryListBox>
  );
};
export default React.memo(DiaryListView);
