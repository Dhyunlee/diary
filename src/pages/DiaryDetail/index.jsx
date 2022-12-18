import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { diaryData } from "../../fake/diaryData";

const DiaryDetail = () => {
  const noImg = '/assets/images/no-img.png';
  
  const { id } = useParams();
  const [diaryItem, setDiaryItem] = useState([]);

  console.log({ paramId: id });
  useEffect(() => {
    const timerId = setTimeout(() => {
      const diaryItem = diaryData.find((item) => item.id === Number(id));
      setDiaryItem(diaryItem);
    }, 500);

    console.log({ diaryItem });
    return () => {
      clearTimeout(timerId);
    };
  }, [diaryItem, id]);
  return (
    <div>
      <div className="detail-wrap">
        <h3 className="title">{diaryItem.title}</h3>
        <div>
          <span>{diaryItem.createAt}</span>
        </div>
        <div className="contents">
          <div className="img-wrap">
          <img src={diaryItem.imgUrl || noImg} alt="detail-img" />
          </div>
          <div className="content-wrap">{diaryItem.content}</div>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetail;
