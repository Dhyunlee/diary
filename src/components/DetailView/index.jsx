import { getDate } from "@utils/lib";
import { Helmet } from "react-helmet-async";
import {
  DateArea,
  DetailWrap,
  Contents,
  Title,
  ImgWrap,
  Content,
  EditArea,
} from "./styles";

const DetailView = ({ title, createdAt, imgUrl, content }) => {
  const noImgUrl = '/assets/images/no-img.png';

  return (
    <>
      <Helmet>
        <title>{`${title || "제목 없음"}`}</title>
      </Helmet>
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

export default DetailView;
