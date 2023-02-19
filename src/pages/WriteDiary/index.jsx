import { Helmet } from "react-helmet-async";
import DiaryForm from "@components/DiaryForm";
import DiaryFormTemplate from "@layouts/DiaryFormTemplate";
import { FormDiaryContainer, HeaderTitle } from "./styles";
import { memo } from "react";

const WriteDiary = () => {
  return (
    <>
      <Helmet>
        <title>새 다이어리 작성</title>
      </Helmet>
      <FormDiaryContainer className="frm-diary-container">
        <HeaderTitle>
          <span>다이어리 작성</span>
        </HeaderTitle>
        <DiaryFormTemplate>
          <DiaryForm />
        </DiaryFormTemplate>
      </FormDiaryContainer>
    </>
  );
};

export default memo(WriteDiary);
