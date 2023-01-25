import React from "react";
import styled from "@emotion/styled";

const Label = ({ text }) => {
  return (
    <LabelWrap>
      <span>{text}</span>
    </LabelWrap>
  );
};

const LabelWrap = styled.div`
  width: 100px;
  margin-bottom: 5px;
  border-left: 3px solid #dea79e;
  border-bottom: 1px solid lightgray;

  span {
    display: inline-block;
    padding-left: 3px;
    font-size: 15px;
    font-weight: 400;
  }
`;

export default Label;
