import React, { useEffect, useState } from "react";
import DiaryItem from "../../components/DiaryItem";
import { fetchGetDiarys } from "../../services/diary";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryList = () => {
  const [diaryList, setDiaryList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetchGetDiarys();
      setDiaryList(res);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <DiaryContainer>
      <DiaryListBox>
        {isLoading && <div style={{height: 1000}}>로딩중...</div>}
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default DiaryList;
