import React, { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DetailView from "@components/DetailView";
import Spinners from "@components/Base/Spinners";
import { fetchDeleteDiaryById } from "@services/diary";
import { getDetailDiary } from "@store/actions/diary";
import { getDiaryState } from "@store/reducers/diary";
const alert = withReactContent(Swal);

const DiaryDetail = () => {
  const navigate = useNavigate();
  const { state: diaryId } = useLocation();
  const dispatch = useDispatch();

  const { detailDiary, detailDiaryLoading } = useSelector(getDiaryState);

  useEffect(() => {
    dispatch(getDetailDiary(diaryId));
  }, [dispatch, diaryId]);

  const onDelDiary = useCallback(async (id) => {
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
        if (result.isConfirmed) {
          const res = await fetchDeleteDiaryById(id);
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
    (id) => {
      const editUrl = `/edit/${
        detailDiary.title ? detailDiary.title.replaceAll(" ", "-") : "제목-없음"
      }`;
      navigate(editUrl, { state: diaryId, replace: true });
    },
    [diaryId, detailDiary?.title, navigate]
  );
  console.log({detailDiary, detailDiaryLoading})
  return (
    <>
      {detailDiary ? (
        <DetailView diaryItem={detailDiary} onDelDiary={onDelDiary} onEditDiary={onEditDiary} />
      ) : (
        <Spinners type="bar" color="#424242" loading={detailDiaryLoading} />
      )}
    </>
  );
};

export default memo(DiaryDetail);
