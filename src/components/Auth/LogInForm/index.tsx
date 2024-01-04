import { getUserInfo } from "store/actions/users";
import { dropAuthModal } from "store/reducers/modal";
import React, { Dispatch } from "react";

import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  FrmBtnContainer,
  FormBtn,
} from "../SingUpForm/styles";
import { EmailAuthWrap } from "./styles";
import { IAuth } from "types/db";
import { AppDispatch } from "store/configureStore";

const alert = withReactContent(Swal);

interface IProps {
  setAuthType: Dispatch<React.SetStateAction<"login" | "signup">>;
  onAuth: ({ email, password }: IAuth) => Promise<any>;
}

const LogInForm = ({ setAuthType, onAuth }: IProps) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const { email, password } = inputs;

  const onGoSingUp = () => {
    setAuthType((prev) => (prev = "signup"));
  };

  const onFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value.trim(),
      });
    },
    [inputs]
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      const { isOk, userId } = await onAuth({ email, password });
      if (isOk) {
        dispatch(dropAuthModal());
        dispatch(getUserInfo(userId));
      } else {
        alert.fire({
          html: (
            <p style={{ fontSize: 18 }}>
              로그인 실패, 확인해주시고 다시 시도해주세요!
            </p>
          ),
          icon: "error",
        });
      }
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
                <button className="login-btn" type="submit">
                  로그인
                </button>
              </FrmBtnContainer>
            </form>
          </EmailAuthWrap>
          {/* <SocialAuthWrap>
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
          </SocialAuthWrap> */}
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

LogInForm.defaultProps = {
  LogInForm: 'login'
}

export default LogInForm;
