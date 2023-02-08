import React, { useEffect, useState, memo, useCallback } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import DetailView from "@components/DetailView";
import { fetchDeleteDiaryById, fetchGetDiaryById } from "@services/diary";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const alert = withReactContent(Swal);

const DiaryDetail = () => {
  const navigate = useNavigate();
  const { id: paramId } = useParams();
  const { state: diaryId } = useLocation();
  const [diaryItem, setDiaryItem] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchGetDiaryById(diaryId);
      setDiaryItem(data);
      setLoading(false);
    };

    getData();
  }, [diaryId, paramId]);

  console.log({ diaryItem });

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

  const onEditDiary = useCallback((id) => {
    console.log(id);
  }, []);

  if (isLoading) return <div>다이어리 불러오기</div>;
  return (
    <>
      {diaryItem && (
        <DetailView
          diaryItem={diaryItem}
          onDelDiary={onDelDiary}
          onEditDiary={onEditDiary}
        />
      )}
    </>
  );
};

export default memo(DiaryDetail);
