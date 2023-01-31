import { dropAuthModal } from "@store/reducers/modal";
import React from "react";

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  FrmBtnContainer,
  FormBtn
} from "../SingUpForm/styles";
import { EmailAuthWrap, SocialAuthWrap } from "./styles";

const LogInForm = ({ setAuthType, onAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(email && password) {
        const {isOk} = await onAuth({email, password});
        if(isOk) {
          dispatch(dropAuthModal(false));
        } 
      }
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <div>
      <Container>
        <h1 className="title">
          <span style={{ fontSize: "25px" }}>로그인</span>
        </h1>
        <FormWrap>
          <EmailAuthWrap>
            <form onSubmit={onSubmit}>
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
            </form>
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
