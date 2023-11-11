import { memo } from "react";
import { getDate } from "utils/days";
import { Helmet } from "react-helmet-async";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  DetailWrap,
  ImgWrap,
  Content,
  DetailHeader,
  DetailContent,
} from "./styles";

import { IDiary } from "types/db";

interface IProps {
  onDelDiary: (diaryId: string) => void;
  onEditDiary: (diaryId: string) => void;
  diaryItem: IDiary;
}
const DetailView = ({ onDelDiary, onEditDiary, diaryItem }: IProps) => {
  const noImgUrl = "/assets/images/no-img.png";
  const { diaryId, title, createdAt, imgUrl, content, emotion: {desc, img} } = diaryItem;
  return (
    <>
      <Helmet>
        <title>{`${title || "제목 없음"}`}</title>
      </Helmet>
      <DetailWrap>
        <DetailHeader>
          <div className="left-header">
            <div className="date-area">
              <span>{getDate(createdAt)}</span>
            </div>
            <div className="emotion-wrap">
              <img src={img} alt="emotion-img" title={desc}/>
            </div>
          </div>
          <div className="right-header">
            <div className="edit-area">
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
            </div>
          </div>
        </DetailHeader>
        <hr />
        <DetailContent>
          <h3 className="title">{title}</h3>
          <div className="contents">
            <ImgWrap className="img-wrap">
              <img src={imgUrl || noImgUrl} alt="detail-img" />
            </ImgWrap>
            <Content className="content-wrap">
              <div>{content}</div>
            </Content>
          </div>
        </DetailContent>
      </DetailWrap>
    </>
  );
};

export default memo(DetailView);
