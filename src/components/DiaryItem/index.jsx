import React from "react";
import { Link } from "react-router-dom";

const DiaryItem = (props) => {
  const { id, writer, title, content, imgUrl, createAt } = props;
  const noImg = '/assets/images/no-img.png';
  return (
    <div className="diary-item">
      <Link to={`/detail/${id}`}>
        <div className="img-wrap">{<img src={imgUrl|| noImg} alt="" />}</div>
        <div className="cnt-inner">
          <div className="title">
            <span>{title || '제목 없음'}</span>
          </div>
          <div className="content">
            <span>{content}</span>
          </div>
          <div className="create-date">
            <span>{createAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DiaryItem;
