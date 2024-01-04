import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const fadeIn = keyframes`
 from {
    opacity: 0;
} to {
    opacity: 1;
 }
`;

export const fadeOut = keyframes`
 from {
    opacity: 1;
} to {
    opacity: 0;
 }
`;

export const slideUp = keyframes`
 from {
    transform: translateY(200px);
} to {
    transform: translateY(0px);
 }
`;

export const slideDown = keyframes`
 from {
    transform: translateY(0px);
 } to {
    transform: translateY(200px);
 }
`;

export const ModalWrap = styled.div<{ disappear: boolean }>`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 111;
  animation-duration: 0.25s;
  animation-timing-function: else-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  /* animation: 0.2s fadeub, .25s, else-out, forwards; */

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

export const ModalContainer = styled.div<{
  height: string;
  disappear: boolean;
}>`
  width: auto;
  height: ${({ height }) => (height ? height : "auto")};
  padding: 85px 0px;
  position: absolute;
  border: 1px solid gray;
  border-radius: 5px;
  background: #fff;

  animation-duration: 0.25s;
  animation-timing-function: else-out; /* 첨에 빨랐다가 느려지는 효과 */
  animation-name: ${slideUp};
  animation-fill-mode: forwards; /* 애니메이션이 끝난 상태를 유지 */

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;

  &:active {
    margin-top: -2px;
  }

  span {
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 0 5px;
    font-size: 20px;
    color: #2d2d2d;
  }
`;

export const ModalTitle = styled.header`
  padding: 20px 30px;
  text-align: center;
  font-size: 20px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: gray;
  }
`;
