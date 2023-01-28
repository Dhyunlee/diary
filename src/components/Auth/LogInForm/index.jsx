import React from "react";

import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  FrmBtnContainer,
} from "../SingUpForm/styles";
import { EmailAuthWrap, FormBtn, SocialAuthWrap } from "./styles";

const LogInForm = ({ setAuthType }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onGoSingUp = () => {
    setAuthType((prev) => (prev = "singup"));
  };

  const onFormChange = useCallback(
    (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value.trim(),
      });
    },
    [inputs]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 완료");
  };

  return (
    <div>
      <Container>
        <h1 className="title">
          <span style={{ fontSize: "25px" }}>로그인</span>
        </h1>
        <FormWrap>
          <EmailAuthWrap onSubmit={onSubmit}>
            <InputGroup>
              <InputName htmlFor="email">이메일</InputName>
              <InputWrap>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                  }}
                  placeholder="이메일"
                  onChange={onFormChange}
                  value={email}
                />
              </InputWrap>
            </InputGroup>
            <InputGroup>
              <InputName htmlFor="pw">비밀번호</InputName>
              <InputWrap>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  style={{
                    width: "100%",
                  }}
                  placeholder="비밀번호"
                  onChange={onFormChange}
                  value={password}
                />
              </InputWrap>
            </InputGroup>
            <FrmBtnContainer>
              <button className="login-btn" type="submit">로그인</button>
            </FrmBtnContainer>
          </EmailAuthWrap>
          <SocialAuthWrap>
            <InputGroup>
              <div className="title">
                <span>쇼셜 로그인</span>
              </div>
              <div className="social-link">
                <Link to="">카카오</Link>
                <Link to="">네이버</Link>
                <Link to="">구글</Link>
              </div>
            </InputGroup>
          </SocialAuthWrap>
          <FormBtn>
            <InputGroup>
              회원이 아니신가요?&nbsp;
              <span className="btn-name" onClick={onGoSingUp}>
                회원가입
              </span>
            </InputGroup>
          </FormBtn>
        </FormWrap>
      </Container>
    </div>
  );
};

export default LogInForm;
