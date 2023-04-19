import { memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { getModalState, showEmotionModal } from "store/reducers/modal";
import { getUserState } from "store/reducers/user";
import Label from "components/Base/Label";
import DateArea from "./DateArea";
import ImageUpload from "./ImageUpload";
import EmotionModal from "./EmotionModal";
import { fetchPostDiary, fetchPutDiaryById } from "services/diary";
import { Form, FormBtn, InputGroup, InputWrap } from "./styles";
import { format } from "date-fns";
import { getDate } from "utils/days";
import { IDiary } from "types/db";
import { TEmotion } from "utils/emotion";

const alert = withReactContent(Swal);

interface IProps {
  diaryId?: string;
  isEdit?: boolean;
  diaryItem?: IDiary;
}
const DiaryForm = ({ diaryId, isEdit, diaryItem }: IProps) => {
  const savedDate = diaryItem ? diaryItem?.createdAt : Date.now();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date(savedDate));
  const emotionInit: TEmotion = diaryItem
    ? diaryItem?.emotion
    : { id: 3, img: "/assets/images/emtion_3.png", desc: "보통" };

  const [title, setTitle] = useState(diaryItem?.title || "");
  const [content, setContent] = useState(diaryItem?.content || "");
  const [emotion, setEmotion] = useState<TEmotion>(emotionInit);

  const [imgUrl, setImgUrl] = useState(diaryItem?.imgUrl || "");
  const [imgFileName, setImgFileName] = useState(diaryItem?.imgFileName || "");
  const [isEmotionModal, setIsEmotionModal] = useState(false);
  const { isShowModal } = useSelector(getModalState);
  const { loadUserInfo } = useSelector(getUserState);

  const onGoBack = () => {
    navigate(-1);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadData = {
      createdAt: date,
      month: format(date, "MM월"),
      title,
      content,
      writer: loadUserInfo?.userId,
      imgUrl,
      imgFileName,
      emotion,
    };
    if (isEdit) {
      console.log(uploadData);
      const res = await fetchPutDiaryById(diaryId, uploadData);
      console.log(res);
      if (res.isOk) {
        alert.fire({
          html: <p style={{ fontSize: 18 }}>다이어리가 수정되었습니다.</p>,
          icon: "success",
        });
        navigate("/");
      }
    } else {
      const res = await fetchPostDiary(uploadData);
      if (res.isOk) {
        alert.fire({
          html: <p style={{ fontSize: 18 }}>다이어리가 등록되었습니다.</p>,
          icon: "success",
        });
        navigate("/");
      }
    }
  };

  const onClickEmotionModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsEmotionModal((prev) => (prev = true));
      dispatch(showEmotionModal(isShowModal));
    },
    [dispatch, isShowModal]
  );

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Label text="날짜" />
        {diaryItem ? (
          <div>{getDate(diaryItem.createdAt)}</div>
        ) : (
          <DateArea setDate={setDate} />
        )}
      </InputGroup>

      <InputGroup>
        <Label text="오늘 내 감정" />
        <InputWrap>
          <div className="emotion-text">
            <div
              className="emotion-inner"
              title="오늘 기분은 어떠신가요?"
              onClick={onClickEmotionModal}
            >
              <img src={emotion.img} alt="emotion-img" />
            </div>
          </div>
          {isEmotionModal && (
            <EmotionModal setEmotion={setEmotion} />
          )}
        </InputWrap>
      </InputGroup>

      <InputGroup>
        <Label text="제목" />
        <InputWrap>
          <input
            type="text"
            name="title"
            required
            placeholder="제목을 입력해주세요"
            autoFocus
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            value={title}
          />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="내용" />
        <InputWrap>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            name="content"
            required
            placeholder="내용을 입력해주세요"
            value={content}
          />
        </InputWrap>
      </InputGroup>
      <InputGroup style={{ position: "relative" }}>
        {
          diaryItem && (
            <ImageUpload
              diaryItem={diaryItem}
              setImgUrl={setImgUrl}
              setImgFileName={setImgFileName}
            />
          )
        }
      </InputGroup>
      <FormBtn>
        <div className="btnWrap">
          <button type="button" onClick={onGoBack}>
            취소
          </button>
        </div>
        <div className="btnWrap">
          <button type="submit">{isEdit ? "수정" : "등록"}</button>
        </div>
      </FormBtn>
    </Form>
  );
};

DiaryForm.defaultProps = {
  isEdit: false,
  diaryItem: null,
};

export default memo(DiaryForm);
