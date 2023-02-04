import { DiaryContainer, DiaryListBox } from "@components/DiaryListView/styles";
import { getState } from "@store/reducers/user";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getState);
  if (!isLoggedIn) {
    return (
      <>
        <DiaryContainer>
          <DiaryListBox>다이어리를 작성하려면 로그인 필요합니다.</DiaryListBox>
        </DiaryContainer>
      </>
    );
  } else {
    return children;
  }
};
export default PrivateRoute;
