import styled from "@emotion/styled";

export const DiaryContainer = styled.div`
  padding: 30px 20px;
  width: 100%;
`;
export const DiaryListBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .diary-item {
    width: 310px;
    border-radius: 4px;
    border: none;
    background-color: #f9f7f7;
    box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 17%);
    transition: transform 0.25s ease-in;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
    }
  }
  .img-wrap {
    width: 100%;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  .cnt-inner {
    padding: 17px 8px;
  }
  .cnt-inner .title {
    font-size: 15px;
    height: 22px;
  }
  .cnt-inner .content {
    margin-top: 12px;
    height: 130px;
    font-size: 13px;
  }

  .create-date {
    font-size: 12px;
  }
`;
