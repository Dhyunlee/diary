import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  .arrowBtn {
    button {
      padding: 15px 20px;
      font-size: 18px;
      cursor: pointer;
      line-height: 10px;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      &:active {
        background-color: #f6f3f3;
      }
    }
  }
  .showDataText {
    font-weight: 600;
  }
`;


