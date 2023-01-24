import DiaryItem from "../DiaryItem";
import { DiaryContainer, DiaryListBox } from "./styles";

const DiaryListView = ({isLoading, diaryList}) => {
  return (
    <DiaryContainer>
      <DiaryListBox>
        {isLoading && <div style={{ height: 1000 }}>로딩중...</div>}
        {diaryList?.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </DiaryListBox>
    </DiaryContainer>
  );
};
export default DiaryListView;
