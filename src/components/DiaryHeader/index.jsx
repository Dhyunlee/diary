/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DiaryHeaderContainer } from "./styles";

const today =  new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;

const DiaryHeader = ({ headDate }) => {

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
        <div className="showDataText">{headDate}</div>
        <div className="arrowBtn">
          <button>
            <AiOutlineArrowRight />
          </button>
        </div>
      </DiaryHeaderContainer>
    </div>
  );
};

DiaryHeader.defaultProps = {
  headDate: `${thisYear}년 ${thisMonth}월`,
};

export default DiaryHeader;
