import DiaryItem from "@components/DiaryItem";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryListView = ({diaryList}) => {
  return (
    <DiaryContainer>
      <DiaryListBox>
        {diaryList?.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default DiaryListView;
