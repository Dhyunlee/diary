import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DateArea,
  DetailWrap,
  Contents,
  Title,
  ImgWrap,
  Content,
  EditArea,
} from "./styles";

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
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [paramId]);

  if (isLoading) return <div>로딩중...</div>;
  const { title, createdAt, content, imgUrl } = diaryItem;
  return (
    <DetailWrap>
      <EditArea>
         <button>수정</button>
         <button>삭제</button>
      </EditArea>
      <DateArea>
        <span>{getDate(createdAt)}</span>
      </DateArea>
      <Title className="title">{title}</Title>
      <Contents className="contents">
        <ImgWrap className="img-wrap">
          <img src={imgUrl || noImg} alt="detail-img" />
        </ImgWrap>
        <Content className="content-wrap">
          <div>{content}</div>
        </Content>
      </Contents>
    </DetailWrap>
  );
};

export default DiaryDetail;
