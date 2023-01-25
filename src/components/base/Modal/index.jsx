import React, { useCallback } from "react";
import { CloseBtn, ModalContainer, ModalWrap } from "./styles";

const Modal = ({ children, isShowModal, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!isShowModal) return null;
  return (
    <ModalWrap onClick={onCloseModal}>
      <ModalContainer onClick={stopPropagation}>
        <CloseBtn onClick={onCloseModal}>
          <span>&times;</span>
        </CloseBtn>
        {children}
      </ModalContainer>
    </ModalWrap>
  );
};

Modal.defaultProps = {
  isShowModal: false,
};

export default Modal;
