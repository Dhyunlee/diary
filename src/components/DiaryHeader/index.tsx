import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DiaryHeaderContainer, DiaryWrap } from "./styles";

interface IProps {
  curMonth: string;
  onIncreateMonth: () => void;
  ondecreateMonth: () => void;
}
const DiaryHeader = ({
  curMonth,
  onIncreateMonth,
  ondecreateMonth,
}: IProps) => {
  return (
    <DiaryWrap>
      <DiaryHeaderContainer>
        <div className="arrowBtn">
          <button onClick={() => ondecreateMonth()}>
            <AiOutlineArrowLeft size={18} />
          </button>
        </div>
        <div className="diary-date">{curMonth}</div>
        <div className="arrowBtn">
          <button onClick={() => onIncreateMonth()}>
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </DiaryHeaderContainer>
    </DiaryWrap>
  );
};

export default DiaryHeader;
