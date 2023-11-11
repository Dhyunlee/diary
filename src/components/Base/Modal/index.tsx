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
    let t: any;
    console.log("animation before", {
      localVisible,
      isShowModal: !isShowModal,
    });
    if (localVisible || !isShowModal) {
      console.log("animation after", {
        localVisible,
        isShowModal: !isShowModal,
      });
      setAnimate(true);
      t = setTimeout(() => {
        console.log("animation close localVisible", localVisible);
        console.log("animation close !isShowModal", !isShowModal);
        setAnimate(false);
      }, 250);
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
