import React from "react";
import AuthModal from "@components/Auth/AuthModal";
import { useState } from "react";

const ProcessAuth = () => {
  const [authType, setAuthType] = useState("login");
  // api 요청 로직 및 인증 관련된 비즈니스 코드
  return <AuthModal authType={authType} setAuthType={setAuthType} />;
};

export default ProcessAuth;
