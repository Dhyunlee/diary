import { useState } from "react";
import {Form, FormBtn, InputGroup, InputWrap } from "./styles";
import Label from "../base/Label";
import Modal from "../base/Modal";
import DateArea from "./DateArea";
import ImageUpload from "./ImageUpload";
import EmotionModal from "./EmotionModal";

const DiaryForm = () => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [emotion, setEmotion] = useState({
    id: 3,
    img: "/assets/images/emtion_3.png",
    desc: "보통",
  });
  const [isShowModal, setIsShowModal] = useState(false);

  const onCloseModal = (e) => {
    setIsShowModal((prev) => (prev = false));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ date, title, contents, emotion });
  };
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Label text="날짜" />
        <DateArea setDate={setDate} />
      </InputGroup>
      <InputGroup>
        <Label text="오늘 내 감정" />
        <InputWrap>
          <div className="emotion-text" title="오늘 기분은 어떠신가요? 클릭 >>">
            <div
              className="emotion-inner"
              onClick={(e) => setIsShowModal((prev) => !prev)}
            >
              <img src={emotion.img} alt="emotion-img" />
            </div>
          </div>
          <Modal isShowModal={isShowModal} onCloseModal={onCloseModal}>
            <EmotionModal setEmotion={setEmotion} onCloseModal={onCloseModal} />
          </Modal>
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="내용" />
        <InputWrap>
          <textarea
            onChange={(e) => setContents(e.target.value)}
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
          <button type="button">취소</button>
        </div>
        <div className="btnWrap">
          <button type="submit">등록</button>
        </div>
      </FormBtn>
    </Form>
  );
};

export default DiaryForm;
