import React, { useEffect, useState } from "react";
import DiaryItem from "../../components/DiaryItem";
import { diaryData } from "../../fake/diaryData";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryList = () => {
  const [diaryList, setDiaryList] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDiaryList(diaryData);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <DiaryContainer>
      <DiaryListBox>
         {
          diaryList.map(diary => (
            <DiaryItem key={diary.id} {...diary}/>
          ))
         }
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default DiaryList;
