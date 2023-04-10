import styled from "@emotion/styled";
export const DetailWrap = styled.div`
  width: 100%;
  padding: 32px 35px;
  height: 790px;
  position: relative;
`;

export const DateArea = styled.div`
  margin: 15px 0;
  text-align: center;
  font-size: 15px;
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  margin: 25px 0;
`;
export const Contents = styled.div``;

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
  margin: 30px 0;
  font-size: 18px;
`;

export const EditArea = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

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
      background: #f6f3f3; ;
    }
  }
`;
