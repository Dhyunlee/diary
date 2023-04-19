import React, { FunctionComponent } from "react";
import DiaryItem from "components/DiaryItem";
import {IDiary} from 'types/db';
import { DiaryListBox } from "./styles";

interface IProps {
  diaryList: IDiary[]
}

const DiaryListView: FunctionComponent<IProps> = ({ diaryList}) => {
  return (
    <DiaryListBox>
      {diaryList?.length === 0 ? (
        <div className="empty-diary">
          <p>작성하신 내용이 없습니다.</p>
        </div>
      ) : (
        diaryList?.map((diary) => <DiaryItem key={diary.diaryId} {...diary} />)
      )}
    </DiaryListBox>
  );
};
export default React.memo(DiaryListView);
