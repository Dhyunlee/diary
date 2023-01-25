import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropAuthModal } from "../../../store/reducers/auth";
import Modal from "../../base/Modal";
import { AuthFormModal } from "./styles";

const AuthModal = () => {
  // 로그인 / 회원가입에 따라 컴포넌트 불러오게 하자!
  const { isShowAuthModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(dropAuthModal(false));
  };

  return (
    <div>
      <Modal isShowModal={isShowAuthModal} onCloseModal={onCloseModal}>
        <AuthFormModal>
           인증 모달
        </AuthFormModal>
      </Modal>
    </div>
  );
};

export default AuthModal;
