import styled from "@emotion/styled";

export const DiaryContainer = styled.div`
  padding: 30px 20px;
  width: 700px;
  height: 780px;
  overflow-y: auto;
`;
export const DiaryListBox = styled.div`
  margin-top: 42px;
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
    padding: 17px 20px;
  }
  .cnt-inner .title {
    font-size: 18px;
    height: 22px;
  }
  .cnt-inner .content {
    margin-top: 12px;
    height: 70px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  }

  .create-date {
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const CreateBtn = styled.div``;
