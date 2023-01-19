import React from "react";
import { Date, Form, FormBtn, InputGroup, InputWrap } from "./styles";
import DateArea from "./DateArea";
import Label from "./Label";
import ImageForm from "./ImageForm";

const DiaryForm = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Date>
        <Label text="날짜" />
        <DateArea />
      </Date>
      <InputGroup>
        <Label text="제목" />
        <InputWrap>
          <input
            name="title"
            type="text"
            placeholder="제목을 입력해주세요"
            autoFocus
          />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="내용" />
        <InputWrap>
          <textarea name="contents" placeholder="내용을 입력해주세요" />
        </InputWrap>
      </InputGroup>
      <InputGroup>
        <Label text="이미지 추가" />
        <InputWrap>
          <ImageForm />
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
