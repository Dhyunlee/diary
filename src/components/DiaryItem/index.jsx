import React from "react";

const DiaryItem = (props) => {
  const { writer, title, contents, imgUrl, createAt } = props;
  const noImg = '/assets/images/no-img.png';
  return (
    <div className="diary-item">
      <a href="#">
        <div className="img-wrap">{<img src={imgUrl|| noImg} alt="" />}</div>
        <div className="cnt-inner">
          <div className="title">
            <span>{title || '제목 없음'}</span>
          </div>
          <div className="contents">
            <span>{contents}</span>
          </div>
          <div className="create-date">
            <span>{createAt}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DiaryItem;
