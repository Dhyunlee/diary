import { memo } from "react";
import { getDate } from "@utils/lib";
import { Helmet } from "react-helmet-async";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  DateArea,
  DetailWrap,
  Contents,
  Title,
  ImgWrap,
  Content,
  EditArea,
} from "./styles";

const DetailView = ({ onDelDiary, onEditDiary, diaryItem }) => {
  const noImgUrl = "/assets/images/no-img.png";
  const { diaryId, title, createdAt, imgUrl, content } = diaryItem;
  console.log({ diaryItem });
  return (
    <>
      <Helmet>
        <title>{`${title || "제목 없음"}`}</title>
      </Helmet>
      <DetailWrap>
        <EditArea>
          <button
            title="수정"
            onClick={(e) => {
              onEditDiary(diaryId);
            }}
          >
            <FiEdit size="20" color="#424242" />
          </button>
          <button
            title="삭제"
            onClick={(e) => {
              onDelDiary(diaryId);
            }}
          >
            <FiTrash2 size="20" color="#424242" />
          </button>
        </EditArea>
        <DateArea>
          <span>{getDate(createdAt)}</span>
        </DateArea>
        <Title className="title">{title}</Title>
        <Contents className="contents">
          <ImgWrap className="img-wrap">
            <img src={imgUrl || noImgUrl} alt="detail-img" />
          </ImgWrap>
          <Content className="content-wrap">
            <div>{content}</div>
          </Content>
        </Contents>
      </DetailWrap>
    </>
  );
};

export default memo(DetailView);
