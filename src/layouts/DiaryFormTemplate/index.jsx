import React from "react";
import { FormWrap } from "./styles";

const FormTemplate = ({ children }) => {
  return (
    <FormWrap> {children}</FormWrap>
  );
}

export default FormTemplate;
