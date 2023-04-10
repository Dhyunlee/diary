import styled from '@emotion/styled';

export const DiaryHeaderContainer = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .diary-date {
    font-size: 18px;
    font-weight: 600;
    color: #212121;
  }
  .arrowBtn {
    button {
      padding: 15px 20px;
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


