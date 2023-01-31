import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const fadeIn = keyframes`
 from {
    opacity: 0;
} to {
    opacity: 1;
 }
`;

export const Container = styled.div`
  width: 75%;
  margin: 20px auto;

  animation: ${fadeIn} 0.25s ease-in;

  h1.title {
    width: 100%;
    padding-bottom: 15px;
    text-align: center;
    border-bottom: 1px solid lightgray;
  }
`;

export const FormWrap = styled.div`
  margin-top: 30px;
  width: 100%;

  form {
    position: relative;
  }
`;

export const InputGroup = styled.div`
  margin: 18px 18px 32px;
  position: relative;
`;

export const InputName = styled.label`
  margin-left: 0.3rem;
  font-size: 13px;
  font-weight: bold;

  &.genderLabel {
    display: inline-block;
    position: relative;
    top: -15px;
    margin-top: 20px;
    font-size: 12px;
  }

  .icon {
    color: #d8445d;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  margin-top: 8px;
  height: 30px;

  input {
    outline: none;
    width: 225px;
    height: 100%;
    padding: 3px 8px;
    border: 1px solid #dcdcdc;
  }

  .input-width {
    width: 98% !important;
  }

  button {
    font-size: 13px;
    outline: none;
    transition: 0.2s;
    cursor: pointer;

    &:active {
      position: relative;
      top: -3px;
    }
  }
`;

export const CheckBtn = styled.button`
  padding: 5px;
  margin: 0 0.3rem;
  position: relative;
  border: 1px solid #dcdcdc;
  width: 100px;
  height: 100%;

  &.not-allowed {
    cursor: not-allowed;
    &:active {
      position: relative;
      top: 0px;
    }
  }
`;

export const FrmBtnContainer = styled.div`
  margin: 18px 18px 32px;
  position: relative;

  & > button {
    border: 1px solid transparent;
    height: 38px;
    color: #fff;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    background-color: #3c6b8a;

    &.login-btn {
      width: 100%;
    }

    &.singup-btn {
      width: 98%;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormBtn = styled.div`
  .btn-name {
    cursor: pointer;
    font-weight: 600;
    color: #3c6b8a;
  }
`;

// 유효성
export const Valid = styled.p`
  position: absolute;
  bottom: -20px;
  font-size: 13px;
  font-weight: 600;

  &.success {
    color: #448044;
  }

  &.error {
    color: #ee1919;
  }
`;
