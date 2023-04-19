import { useDispatch, useSelector } from "react-redux";
import Modal from "components/Base/Modal";
import SingUpForm from "components/Auth/SingUpForm";
import LogInForm from "components/Auth/LogInForm";
import { dropAuthModal, getModalState } from "store/reducers/modal";

import { AuthFormModal } from "./styles";
import { Dispatch } from "react";
import { IAuth } from "types/db";

interface IProps {
  onAuth: ({ email, password }: IAuth) => Promise<any>;
  authType: "login" | "signup"; 
  setAuthType: Dispatch<React.SetStateAction< "login" | "signup">>;
}
const AuthModal = (props: IProps) => {
  // authType(로그인 or 회원가입)에 따라 컴포넌트 불러옴
  const { authType, setAuthType } = props;
  const { isAuthModal } = useSelector(getModalState);
  const dispatch = useDispatch();
  
  const onCloseModal = () => {
    dispatch(dropAuthModal(false));
    setAuthType((prev) => (prev = "login"));
  };

  return (
    <Modal
      height={"605px"}
      isShowModal={isAuthModal}
      onCloseModal={onCloseModal}
    >
      <AuthFormModal>
        {authType === "signup" ? (
          <SingUpForm {...props} />
        ) : (
          <LogInForm {...props}/>
        )}
      </AuthFormModal>
    </Modal>
  );
};

export default AuthModal;
