import React from "react";

const SingUpForm = ({ authType, setAuthType }) => {
  const onGoLogin = () => {
    setAuthType("login");
  };
  return (
    <div>
      <div>회원가입</div>
      회원이신가요? <button onClick={onGoLogin}>로그인</button>
    </div>
  );
};

export default SingUpForm;
