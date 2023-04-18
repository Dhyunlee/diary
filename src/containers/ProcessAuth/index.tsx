import { useState } from "react";
import AuthModal from "components/Auth/AuthModal";
import { logIn, signUp } from "services/auth";
import { IAuth } from "types/db";

const ProcessAuth = () => {
  const [authType, setAuthType] = useState("login");

  // api 요청 로직 및 인증 관련된 비즈니스 코드
  const onAuth = async ({ email, password }: IAuth) => {
    if (authType === "login") {
      return await logIn({ email, password });
    } else {
      return await signUp({ email, password });
    }
  };
  return (
    <AuthModal onAuth={onAuth} authType={authType} setAuthType={setAuthType} />
  );
};

export default ProcessAuth;
