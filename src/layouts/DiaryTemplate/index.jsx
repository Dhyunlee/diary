import React from "react";
import { TemplateWrap, TemplateContainer } from "./styles";

const DiaryTemplate = ({ children }) => {
  return (
    <TemplateWrap>
      <TemplateContainer>{children}</TemplateContainer>
    </TemplateWrap>
  );
};

export default DiaryTemplate;
