import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Base/Modal";
import SingUpForm from "@components/Auth/SingUpForm";
import LogInForm from "@components/Auth/LogInForm";

import { AuthFormModal } from "./styles";
import { dropAuthModal, getModalState } from "@store/reducers/modal";

const AuthModal = (props) => {
  // authType(로그인 or 회원가입)에 따라 컴포넌트 불러옴
  const { authType, setAuthType } = props;
  const { isAuthModal } = useSelector(getModalState);
  const dispatch = useDispatch();
  
  const onCloseModal = () => {
    dispatch(dropAuthModal());
    setAuthType((prev) => (prev = "login"));
  };

  return (
    <Modal
      height={"605px"}
      isShowModal={isAuthModal}
      onCloseModal={onCloseModal}
    >
      <AuthFormModal>
        {authType === "singup" ? (
          <SingUpForm {...props} />
        ) : (
          <LogInForm {...props} />
        )}
      </AuthFormModal>
    </Modal>
  );
};

export default AuthModal;
