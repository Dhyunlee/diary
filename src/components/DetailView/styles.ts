import styled from "@emotion/styled";
export const DetailWrap = styled.div`
  width: 100%;
  padding: 32px 35px;
  height: 790px;
  position: relative;
`;

export const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-header {
    display: flex;
    align-items: center;
  }

  .date-area {
    margin: 15px 0;
    font-size: 15px;
  }

  .emotion-wrap {
    width: 30px;
    margin-left: 10px;
    margin-top: 5px;
    img {
      width: 100%;
    }
  }

  .edit-area {
    button {
      display: inline-block;
      background: transparent;
      border: none;
      border-radius: 5px;
      padding: 8px 5px;
      margin-right: 13px;
      cursor: pointer;
      font-size: 15px;

      &:first-of-type {
        margin-right: 3px;
      }

      &:active {
        background: #f6f3f3;
      }
    }
  }
`;

export const DetailContent = styled.section`
  .title {
    font-size: 32px;
    margin: 25px 0;
  }
  .contents {
    padding: 20px 0px;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  margin: 50px 0 30px;
  font-size: 18px;
`;
