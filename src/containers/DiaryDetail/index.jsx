import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailView from "@components/DetailView";
import { fetchGetDiaryById } from "@services/diary";

export const DiaryDetail = () => {
  const { id: paramId } = useParams();
  const {state: diaryId} = useLocation();
  const [diaryItem, setDiaryItem] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchGetDiaryById(diaryId);
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [diaryId, paramId]);

  if(isLoading) return <div>다이어리 불러오기</div>
  return (
    <>
      {diaryItem && (
        <DetailView
          {...diaryItem}/>
      )}
    </>
  );
};
