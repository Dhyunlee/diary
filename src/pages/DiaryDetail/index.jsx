import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailWrap } from "./styles";

import { fetchGetDiaryItem } from "../../services/diary";
import { getDate } from "../../utils/lib";

const DiaryDetail = () => {
  const noImg = "/assets/images/no-img.png";
  const { id: paramId } = useParams();
  const [diaryItem, setDiaryItem] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await fetchGetDiaryItem(paramId);
      console.log({data})
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [paramId]);

  if (isLoading) return <div>로딩중...</div>;
  const {title, createdAt, content, imgUrl} = diaryItem;
  return (
    <DetailWrap>
      <div className="date">
        <span>{getDate(createdAt)}</span>
      </div>
      <h3 className="title">{title}</h3>
      <div className="contents">
        <div className="img-wrap">
          <img src={imgUrl || noImg} alt="detail-img" />
        </div>
        <div className="content-wrap">{content}</div>
      </div>
    </DetailWrap>
  );
};

export default DiaryDetail;
