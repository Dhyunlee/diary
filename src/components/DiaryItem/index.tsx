import { Link } from "react-router-dom";
import { IDiary } from "types/db";
import { getDate } from "utils/days";

const DiaryItem = (props: IDiary) => {
  const { diaryId, title, content, imgUrl, createdAt } = props;
  const noImg = '/assets/images/no-img.png';
  return (
    <div className="diary-item">
      <Link to={`/detail/${title ? title.replace(' ', '-') : '제목-없음'}`} state={diaryId}>
        <div className="img-wrap">{<img src={imgUrl|| noImg} alt="" />}</div>
        <div className="cnt-inner">
          <div className="title">
            <span>{title || '제목 없음'}</span>
          </div>
          <div className="content">
            <span>{content}</span>
          </div>
          <div className="create-date">
            <span>{getDate(createdAt)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DiaryItem;
