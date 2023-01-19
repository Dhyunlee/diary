import styled from "@emotion/styled";

export const ImageUploadForm = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const ImgUploadBox = styled.div`
  width: 100%;
  border: 2px dashed #d2d1d1;
`;

export const DrapFileArea = styled.div`
  position: relative;
  cursor: pointer;

  .icon-wrap {
    padding: 36px 0 76px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 90%;
    opacity: 0.1;
  }

  .img {
    width: 150px;
    height: 150px;
    display: block;
  }
  .upload-msg {
    position: absolute;
    font-size: 14px;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
  }

  input {
    display: none;
  }
`;
