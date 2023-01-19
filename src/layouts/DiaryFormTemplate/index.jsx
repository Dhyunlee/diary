import React from "react";
import { FormWrap } from "./styles";

function FormTemplate({ children }) {
  return (
    <FormWrap> {children}</FormWrap>
  );
}

export default FormTemplate;
