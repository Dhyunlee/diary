import { useState } from "react";
import AuthModal from "@components/Auth/AuthModal";
import { logIn, signUp } from "@services/auth";

const ProcessAuth = () => {
  const [authType, setAuthType] = useState("login");

  // api 요청 로직 및 인증 관련된 비즈니스 코드
  const onAuth = async ({ email, password }) => {
    if (authType === "login") {
      try {
        const result = await logIn({ email, password });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        return await signUp({ email, password });
      } catch (err) {
        return err.message;
      }
    }
  };
  return (
    <AuthModal
      onAuth={onAuth}
      authType={authType}
      setAuthType={setAuthType}
    />
  );
};

export default ProcessAuth;
