import { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DetailView from "components/DetailView";
import Spinners from "components/Base/Spinners";
import { fetchDeleteDiaryById } from "services/diary";
import { getDetailDiary } from "store/actions/diary";
import { getDiaryState } from "store/reducers/diary";
import { deleteObject, getStorage, ref } from "firebase/storage";
const alert = withReactContent(Swal);

const DiaryDetail = () => {
  const storage = getStorage();
  const navigate = useNavigate();
  const { state: diaryId } = useLocation();
  const dispatch = useDispatch();

  const { detailDiary, detailDiaryLoading } = useSelector(getDiaryState);
  console.log(detailDiary);

  useEffect(() => {
    dispatch(getDetailDiary(diaryId));
  }, [dispatch, diaryId]);

  const onDelDiary = useCallback(async (diaryId: string) => {
    alert
      .fire({
        title: "정말 삭제하실건가요?",
        text: "삭제하면 되돌릴 수 없습니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#77acdd",
        cancelButtonColor: "#cf4b4b",
        cancelButtonText: "취소",
        confirmButtonText: "삭제",
      })
      .then(async (result) => {
        console.log(detailDiary);
        if (result.isConfirmed) {
          const fileRef = ref(storage, "images/" + detailDiary?.imgFileName);
          deleteObject(fileRef)
            .then(() => {
              console.log("삭제완료");
              // File deleted successfully
            })
            .catch((error) => {
              // Uh-oh, an error occurred!
            });

          const res = await fetchDeleteDiaryById(diaryId);
          console.log({ 삭제결과: res });
          if (res.isOk) {
            Swal.fire("삭제되었습니다.", `${res.msg}`, "success");
            navigate("/", { replace: true });
          }
        }
      });
    console.log("삭제 ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEditDiary = useCallback(
    (diaryId: string) => {
      const editUrl = `/edit/${
        detailDiary.title ? detailDiary.title.replaceAll(" ", "-") : "제목-없음"
      }`;
      navigate(editUrl, { state: diaryId, replace: true });
    },
    [detailDiary.title, navigate]
  );
  console.log({ detailDiary, detailDiaryLoading });
  return (
    <>
      {detailDiary ? (
        <DetailView
          diaryItem={detailDiary}
          onDelDiary={onDelDiary}
          onEditDiary={onEditDiary}
        />
      ) : (
        <Spinners type="bar" color="#424242" loading={detailDiaryLoading} />
      )}
    </>
  );
};

export default memo(DiaryDetail);
