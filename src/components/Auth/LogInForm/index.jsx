import React from "react";

const LogInForm = ({ authType, setAuthType }) => {
  const onGoSingUp = () => {
    setAuthType((prev) => (prev = "singup"));
  };
  return (
    <div>
      <div>로그인</div>
      회원이 아니신가요? <button onClick={onGoSingUp}>회원가입</button>
    </div>
  );
};

export default LogInForm;
