import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailView from "../../components/DetailView";
import { fetchGetDiaryById } from "../../services/diary";
import { getDate } from "../../utils/lib";

export const DiaryDetail = () => {
  const { id: paramId } = useParams();
  const [diaryItem, setDiaryItem] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await fetchGetDiaryById(paramId);
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [paramId]);

  if (isLoading) return <div>로딩중...</div>;
  const { title, createdAt, content, imgUrl } = diaryItem;
  const date = getDate(createdAt);

  return (
    <DetailView title={title} date={date} imgUrl={imgUrl} content={content} />
  );
};
