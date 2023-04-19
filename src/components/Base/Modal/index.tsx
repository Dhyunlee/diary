import React, { memo, useCallback, useState } from "react";
import { useEffect } from "react";
import { CloseBtn, ModalContainer, ModalWrap } from "./styles";

interface IProps {
  height?: string;
  children: React.ReactNode;
  isShowModal: boolean;
  onCloseModal: () => void;
}

const Modal = ({
  height = "auto",
  children,
  isShowModal,
  onCloseModal,
}: IProps) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const [localVisible, setLocalVisible] = useState(isShowModal);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log({ isShowModal });
  }, [isShowModal]);
  useEffect(() => {
    let t: any;
    if (localVisible || !isShowModal) {
      setAnimate(true);
      t = setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(isShowModal);

    return () => {
      clearTimeout(t);
    };
  }, [isShowModal, localVisible]);

  if (!localVisible && !animate) return null;

  return (
    <ModalWrap disappear={!isShowModal} onClick={onCloseModal}>
      <ModalContainer
        height={height}
        disappear={!isShowModal}
        onClick={stopPropagation}
      >
        <CloseBtn onClick={onCloseModal}>
          <span>&times;</span>
        </CloseBtn>
        {children}
      </ModalContainer>
    </ModalWrap>
  );
};

export default memo(Modal);
