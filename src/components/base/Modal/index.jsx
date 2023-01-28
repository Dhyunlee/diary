import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { CloseBtn, ModalContainer, ModalWrap } from "./styles";

const Modal = ({ children, isShowModal, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const [localVisible, setLocalVisible] = useState(isShowModal);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log(localVisible)
    if ((localVisible, !isShowModal)) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(isShowModal);
  }, [isShowModal, localVisible]);

  if (!localVisible && !animate) return null;

  return (
    <ModalWrap disappear={!isShowModal} onClick={onCloseModal}>
      <ModalContainer disappear={!isShowModal} onClick={stopPropagation}>
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
