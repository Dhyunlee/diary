const { default: styled } = require("@emotion/styled");

export const EmailAuthWrap = styled.div`
  border-bottom: 1px solid lightgray;
`;

export const SocialAuthWrap = styled.div`
  .title {
    span {
      color: #aeaab3;
      font-weight: bold;
    }
    margin-bottom: 30px;
  }
  .social-link {
  }
`;

export const FormBtn = styled.div`
  .btn-name {
    cursor: pointer;
    font-weight: 600;
    color: #3c6b8a;
  }
`;
