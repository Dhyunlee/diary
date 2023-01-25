import { Helmet } from "react-helmet-async";
import DiaryForm from "@components/DiaryForm";
import DiaryFormTemplate from "@layouts/DiaryFormTemplate";
import { FormDiaryContainer, HeaderTitle } from "./styles";

const WriteDiary = () => {
  return (
    <>
      <Helmet>
        <title>diary | 새 다이어리 작성</title>
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

export default WriteDiary;
