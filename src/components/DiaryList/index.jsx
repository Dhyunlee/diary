import React, { useEffect, useState } from "react";
import DiaryItem from "../../components/DiaryItem";
import { fetchGetDiarys } from "../../services/diary";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryList = () => {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchGetDiarys();
      setDiaryList(res);
    };
    getData();
  }, []);

  return (
    <DiaryContainer>
      <DiaryListBox>
        {diaryList.length === 0 && <div>로딩중...</div>}
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default DiaryList;
