import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { diaryData } from "../../fake/diaryData";
import { fetchGetDiaryItem } from "../../services/diary";

const DiaryDetail = () => {
  const noImg = "/assets/images/no-img.png";
  const { id: paramId } = useParams();
  const [diaryItem, setDiaryItem] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchGetDiaryItem(paramId);
      setDiaryItem(data);
    };

    getData();
  }, [paramId]);
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
