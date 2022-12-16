import styled from "@emotion/styled";

export const DiaryContainer = styled.div`
  padding: 30px 20px;
  width: 100%;
  background-color: #f4e4cb;
`;
export const DiaryListBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .diary-item {
    width: 200px;
    padding: 13px 20px;
    border-radius: 4px;
    border: none;
    background-color: #f9f7f7;
    box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 17%);
    }
    .cnt-inner .title {
        font-size: 15px;
        height: 22px;
    }
    .cnt-inner .contents {
        margin-top: 12px;
        height: 130px;
        font-size: 13px;
    }

    .create-date {
        font-size: 12px;
        text-align: right;
    }
`;