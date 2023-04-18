/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DiaryHeaderContainer } from "./styles";

interface IProps {
  thisMonth: string;
  onIncreateMonth: () => void;
  ondecreateMonth: () => void;
}
const DiaryHeader = ({ thisMonth, onIncreateMonth, ondecreateMonth }: IProps) => {
  return (
    <div
      css={css`
        border-bottom: 1px solid #eae9e9;
      `}
    >
      <DiaryHeaderContainer>
        <div className="arrowBtn">
          <button onClick={() => ondecreateMonth()}>
            <AiOutlineArrowLeft size={18}/>
          </button>
        </div>
        <div className="diary-date">{thisMonth}</div>
        <div className="arrowBtn">
          <button onClick={() => onIncreateMonth()}>
            <AiOutlineArrowRight size={18}/>
          </button>
        </div>
      </DiaryHeaderContainer>
    </div>
  );
};

export default DiaryHeader;
