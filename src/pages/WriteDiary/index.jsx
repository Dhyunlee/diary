import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const WriteDiary = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="write-wrap">
      <div className="write-container">
        <div className="header-title">
          <span style={{ fontSize: "22px" }}>다이어리 작성</span>
        </div>
        <form onSubmit={(e) => {e.preventDefault()}}>
          <div>
            <div>
              <label>Title</label>
            </div>
            <div>
              <input type="text" name="title" placeholder="제목" />
            </div>
          </div>
          <div>
            <div>
              <label>날짜</label>
              <DatePicker
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label>contents</label>
            </div>
            <div>
              <textarea name="contents" placeholder="내용" />
            </div>
            <div>
              <div>
                <label>이미지 추가</label>
              </div>
              <div>
                <input type="file" name="contents" placeholder="제목" />
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button type="button">취소</button>
            <button type="submit">등록</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteDiary;
