/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getDate } from "../../utils/lib";
import { DiaryHeaderContainer } from "./styles";

const date = getDate(new Date()).substring(0 , 9);

const DiaryHeader = () => {
  return (
    <div
      css={css`
        border-bottom: 1px solid #eae9e9;
      `}
    >
      <DiaryHeaderContainer>
        <div className="arrowBtn">
          <button>
            <AiOutlineArrowLeft />
          </button>
        </div>
        <div className="showDataText">{date}</div>
        <div className="arrowBtn">
          <button>
            <AiOutlineArrowRight />
          </button>
        </div>
      </DiaryHeaderContainer>
    </div>
  );
};

export default DiaryHeader;
