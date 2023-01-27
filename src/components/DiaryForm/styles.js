import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  margin-bottom: 25px;
  padding: 0 0;
`;

export const InputWrap = styled.div`
  input,
  textarea {
    width: 100%;
    font-size: 18px;
  }

  textarea {
    resize: none;
    height: 400px;
  }
  .emotion-text .emotion-inner {
    width: 40px;
    height: 40px;
    padding-left: 5px;

    img {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
    }
  }
`;

export const FormBtn = styled.div`
  margin-top: 95px;
  display: flex;
  justify-content: center;
  gap: 5px;

  .btnWrap {
    width: calc(50% / 2);

    button {
      padding: 5px 30px;
      width: 100%;
      display: inline-block;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: #fffafa;
      font-size: 18px;
      transition: transform 0.1s;

      &[type="button"] {
        background: #eb5a40;
      }

      &[type="submit"] {
        background: #3c6b8a;
      }
      &:active {
        transform: translateY(-3px);
      }
    }
  }
`;
