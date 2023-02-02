/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DiaryHeaderContainer } from "./styles";
const DiaryHeader = ({ thisMonth, onIncreateMonth, ondecreateMonth }) => {
  return (
    <div
      css={css`
        border-bottom: 1px solid #eae9e9;
      `}
    >
      <DiaryHeaderContainer>
        <div className="arrowBtn">
          <button onClick={() => ondecreateMonth()}>
            <AiOutlineArrowLeft />
          </button>
        </div>
        <div className="showDataText">{thisMonth}</div>
        <div className="arrowBtn">
          <button onClick={() => onIncreateMonth()}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </DiaryHeaderContainer>
    </div>
  );
};

export default DiaryHeader;
