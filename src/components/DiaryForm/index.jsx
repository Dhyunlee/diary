import { memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getState, showEmotionModal } from "@store/reducers/modal";
import Label from "@components/base/Label";
import DateArea from "./DateArea";
import ImageUpload from "./ImageUpload";
import EmotionModal from "./EmotionModal";
import { Form, FormBtn, InputGroup, InputWrap } from "./styles";

const DiaryForm = () => {
  console.log("호출");
  const [date, setDate] = useState(new Date());
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const [emotion, setEmotion] = useState({
    id: 3,
    img: "/assets/images/emtion_3.png",
    desc: "보통",
  });

  const {title, contents} = inputs;
  const [isEmotionModal, setIsEmotionModal] = useState(false);

  const { isShowModal } = useSelector(getState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ date, title, contents, emotion });
  };

  const onFormChange = useCallback(
    (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value.trim(),
      });
    },
    [inputs]
  );

  const onClickEmotionModal = useCallback((e) => {
    setIsEmotionModal((prev) => (prev = true));
    dispatch(showEmotionModal(isShowModal));
  }, [dispatch, isShowModal]);

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Label text="날짜" />
        <DateArea setDate={setDate} />
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
            onChange={onFormChange}
            value={title}
          />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="내용" />
        <InputWrap>
          <textarea
            onChange={onFormChange}
            name="contents"
            required
            placeholder="내용을 입력해주세요"
            value={contents}
          />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="이미지 추가" />
        <InputWrap>
          <ImageUpload />
        </InputWrap>
      </InputGroup>
      <FormBtn>
        <div className="btnWrap">
          <button type="button" onClick={onGoBack}>
            취소
          </button>
        </div>
        <div className="btnWrap">
          <button type="submit">등록</button>
        </div>
      </FormBtn>
    </Form>
  );
};

export default memo(DiaryForm);
