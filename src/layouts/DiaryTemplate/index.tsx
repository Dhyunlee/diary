import React, { FunctionComponent } from "react";
import { TemplateWrap, TemplateContainer } from "./styles";

interface IProps {
  children: React.ReactNode
}
const DiaryTemplate: FunctionComponent<IProps> = ({ children }) => {
  return (
    <TemplateWrap>
      <TemplateContainer>{children}</TemplateContainer>
    </TemplateWrap>
  );
};

export default DiaryTemplate;
