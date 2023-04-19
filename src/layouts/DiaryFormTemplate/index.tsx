import React, { FunctionComponent } from "react";
import { FormWrap } from "./styles";

interface IProps {
  children: React.ReactNode
}
const FormTemplate: FunctionComponent<IProps> = ({ children }) => {
  return (
    <FormWrap> {children}</FormWrap>
  );
}

export default FormTemplate;
