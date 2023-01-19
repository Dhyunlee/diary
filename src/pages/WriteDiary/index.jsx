import DiaryForm from "../../components/DiaryForm";
import DiaryFormTemplate from "../../layouts/DiaryFormTemplate";
import { FormDiaryContainer, HeaderTitle } from "./styles";

const WriteDiary = () => {
  return (
    <FormDiaryContainer className="frm-diary-container">
      <HeaderTitle>
        <span>다이어리 작성</span>
      </HeaderTitle>
      <DiaryFormTemplate>
        <DiaryForm />
      </DiaryFormTemplate>
    </FormDiaryContainer>
  );
};

export default WriteDiary;
