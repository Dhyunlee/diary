/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HeaderContainer } from "./styles";

const Header = ({ headDate }) => {
  return (
    <header
      css={css`
        border-bottom: 1px solid #eae9e9; ;
      `}
    >
      <HeaderContainer>
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
      </HeaderContainer>
    </header>
  );
};

Header.defaultProps = {
  headDate: new Date().getMonth() + 1 + "월",
};

export default Header;
