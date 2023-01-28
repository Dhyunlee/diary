import styled from "@emotion/styled";

export const EmotionWrap = styled.div`
  padding: 20px 15px;
`;

export const Emotions = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;

  .emotion {
    width: 135px;
    height: 150px;
    padding: 10px 15px;
    text-align: center;
    border: 1px solid lightgray;
    cursor: pointer;

    &.selected {
      border: 3px dashed #f06292;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
`;
