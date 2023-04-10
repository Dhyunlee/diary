import React from "react";
import styled from "@emotion/styled";
import { LabelWrap } from "./styles";

const Label = ({ text }) => {
  return (
    <LabelWrap>
      <span>{text}</span>
    </LabelWrap>
  );
};


export default Label;
