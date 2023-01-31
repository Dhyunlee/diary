import { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { checkEmail } from "@services/auth";
import { dropAuthModal } from "@store/reducers/modal";
import {
  CheckBtn,
  Container,
  FormWrap,
  InputGroup,
  InputName,
  InputWrap,
  Valid,
  FrmBtnContainer,
  FormBtn,
} from "./styles";

const alert = withReactContent(Swal);

const SingUpForm = ({ setAuthType, onAuth }) => {
  const isFormValue = useRef(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isFocus, setIsFocus] = useState({
    isEmail: false,
    isPw: false,
  });

  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [isCheckPw, setIsCheckPw] = useState(false);

  const { email, password, passwordCheck } = inputs;
  const dispatch = useDispatch();

  const onGoLogin = () => {
    setAuthType("login");
  };

  const isValidValue = (e) => {
    const { name, value } = e.target;
    const isValidProps = {
      isValidEmail:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{3,6}(?:\.[a-z]{2})?)$/,
      isPw: /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/,
    };

    switch (name) {
      case "email":
        setIsEmail(isValidProps["isValidEmail"].test(value));
        break;
      case "password":
        setIsPw(isValidProps["isPw"].test(value.trim()));
        break;
      default:
        return false;
    }
  };

  const onFormChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value.trim(),
    });
    isFormValue.current = true;
  };

  const onCheckEmail = useCallback(async () => {
    if (isEmail) {
      setIsCheckEmail(false);
      console.log("이메일 중복 확인", email);
      const { isOk, msg } = await checkEmail(email);

      if (isOk) {
        alert.fire({
          html: <p style={{ fontSize: 18 }}>{msg}</p>,
          icon: "success",
        });
        setIsCheckEmail(true);
      } else {
        alert.fire({
          html: <p style={{ fontSize: 18 }}>{msg}</p>,
          icon: "error",
        });
        setIsCheckEmail(false);
      }
    } else {
      alert.fire({
        html: <p style={{ fontSize: 18 }}>이메일을 입력해주세요!</p>,
        icon: "error",
      });
    }
  }, [isEmail, email]);

  const checkPw = (p1, p2) => p1 === p2;
  const onClickCheckPw = (e) => {
    if (password === "" || passwordCheck === "") {
      alert.fire({
        html: <p style={{ fontSize: 18 }}>비밀번호를 입력해주세요</p>,
        icon: "error",
      });
      return;
    }

    let isCheck = password && checkPw(password, passwordCheck);
    if (isCheck) {
      alert.fire({
        html: <p style={{ fontSize: 18 }}>비밀번호가 일치합니다.</p>,
        icon: "success",
      });
      setIsCheckPw(true);
    } else {
      alert.fire({
        html: <p style={{ fontSize: 18 }}>비밀번호가 일치하지 않습니다.</p>,
        icon: "error",
      });
      setIsCheckPw(false);
      setInputs({
        ...inputs,
        password: "",
        passwordCheck: "",
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isCheckEmail && isCheckPw) {
      const { isOk } = await onAuth({ email, password });
      if (isOk) {
        alert.fire({
          html: <p style={{ fontSize: 18 }}>가입되었습니다. 로그인해주세요!</p>,
          icon: "success",
        });
        setAuthType("login");
        dispatch(dropAuthModal(false));
      }
    }
  };
  return (
    <div>
      <Container>
        <h1 className="title">
          <span style={{ fontSize: "25px" }}>회원가입</span>
        </h1>
        <FormWrap>
          <form onSubmit={onSubmit}>
            <InputGroup>
              <InputName htmlFor="email">이메일</InputName>
              <InputWrap>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isCheckEmail ? true : false}
                  placeholder="이메일"
                  autoComplete="off"
                  onChange={onFormChange}
                  onFocus={(e) =>
                    setIsFocus({
                      ...isFocus,
                      isEmail: true,
                    })
                  }
                  onBlur={isValidValue}
                  value={email}
                />
                <div className="buttonWrap">
                  <CheckBtn
                    className={`${isCheckEmail && "not-allowed"}`}
                    top="0px"
                    type="button"
                    disabled={isCheckEmail ? true : false}
                    onClick={onCheckEmail}
                  >
                    중복확인
                  </CheckBtn>
                </div>
                {isFocus.isEmail && (
                  <Valid className={`valid ${isEmail ? "success" : "error"}`}>
                    {isEmail
                      ? "이메일 형식이 올바릅니다."
                      : "이메일 형식이 올바르지 않습니다."}
                  </Valid>
                )}
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
                  className="input-width"
                  placeholder="비밀번호"
                  disabled={isCheckPw ? true : false}
                  onChange={onFormChange}
                  onBlur={isValidValue}
                  onFocus={(e) =>
                    setIsFocus({
                      ...isFocus,
                      isPw: true,
                    })
                  }
                  value={password}
                />
                {isFocus.isPw && (
                  <Valid className={`valid ${isPw ? "success" : "error"}`}>
                    {isPw
                      ? "비밀 번호 형식이 올바릅니다."
                      : "문자와 특수문자 조합의 6 ~ 24자리를 입력"}
                  </Valid>
                )}
              </InputWrap>
            </InputGroup>
            <InputGroup>
              <InputName htmlFor="passwordCheck">비밀번호 확인</InputName>
              <InputWrap>
                <input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  required
                  placeholder="비밀번호 확인"
                  disabled={isCheckPw ? true : false}
                  onChange={onFormChange}
                  value={passwordCheck}
                />
                <CheckBtn
                  top="0"
                  type="button"
                  onClick={onClickCheckPw}
                  disabled={isCheckPw ? true : false}
                >
                  비밀번호 확인
                </CheckBtn>
              </InputWrap>
            </InputGroup>
            <FrmBtnContainer>
              <button className="singup-btn" type="submit">
                회원가입
              </button>
            </FrmBtnContainer>
          </form>
          <FormBtn>
            <InputGroup>
              회원이신가요?&nbsp;
              <span className="btn-name" onClick={onGoLogin}>
                로그인
              </span>
            </InputGroup>
          </FormBtn>
        </FormWrap>
      </Container>
    </div>
  );
};

export default SingUpForm;
