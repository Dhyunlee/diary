import { memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { getState, showEmotionModal } from "@store/reducers/modal";
import { getState as userGetState } from "@store/reducers/user";
import Label from "@components/Base/Label";
import DateArea from "./DateArea";
import ImageUpload from "./ImageUpload";
import EmotionModal from "./EmotionModal";
import { fetchPostDiary, fetchPutDiaryById } from "@services/diary";
import { Form, FormBtn, InputGroup, InputWrap } from "./styles";
import { format } from "date-fns";
import { getDate } from "@utils/days";

const alert = withReactContent(Swal);

const DiaryForm = ({ diaryId, isEdit, diaryItem }) => {
  const { loadUserInfo } = useSelector(userGetState);
  const [date, setDate] = useState(new Date(diaryItem?.createdAt));
  const emotionInit = diaryItem
    ? diaryItem?.emotion
    : { id: 3, img: "/assets/images/emtion_3.png", desc: "보통" };

  const [title, setTitle] = useState(diaryItem?.title);
  const [content, setContent] = useState(diaryItem?.content);
  const [emotion, setEmotion] = useState(emotionInit);

  const [uploadImgFile, setUploadImgFile] = useState(null);

  // const { title, content } = inputs;
  const [isEmotionModal, setIsEmotionModal] = useState(false);

  const { isShowModal } = useSelector(getState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const uploadData = {
      createdAt: date,
      month: format(date, "MM월"),
      title,
      content,
      writer: loadUserInfo?.userId,
      imgUrl: uploadImgFile,
      emotion,
    };
    if (isEdit) {
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
      console.log({ 업로드: res });
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
    (e) => {
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
            <EmotionModal emotion={emotion} setEmotion={setEmotion} />
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
            onInput={(e) => setTitle(e.target.value)}
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

      {/* FIXME: 이미지 수정 */}
         <ImageUpload />   
      {/* Fix end---> */}
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
