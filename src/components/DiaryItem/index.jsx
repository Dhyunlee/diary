import React from "react";
import { Link } from "react-router-dom";

const DiaryItem = (props) => {
  const { writer, title, contents, imgUrl, createAt } = props;
  return (
    <div className="diary-item">
      <a href="#">
        <div className="img-wrap">
          <img src={imgUrl} alt="" />
        </div>
        <div className="cnt-inner">
          <div className="title">
            <span>{title}</span>
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
