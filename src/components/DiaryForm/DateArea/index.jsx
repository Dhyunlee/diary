import React, { useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getMonth, getYear } from "date-fns";

import { DatePickerBtn, DatePickerWrap } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("ko", ko);

function DateArea({setDate}) {
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ];
  const renderCustomHeader = ({
    date,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    decreaseMonth,
    increaseMonth,
  }) => {
    return (
      <DatePickerWrap>
        <DatePickerBtn
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <AiOutlineArrowLeft />
        </DatePickerBtn>
        <span className="month-day">
          {getYear(date)}년 {months[getMonth(date)]}
        </span>
        <DatePickerBtn
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
         <AiOutlineArrowRight />
        </DatePickerBtn>
      </DatePickerWrap>
    );
  };
  return (
    <DatePicker
      withPortal
      locale="ko"
      dateFormat="yyyy.MM.dd"
      maxDate={new Date()}
      selected={startDate}
      onChange={(date) => {setStartDate(date); setDate(date)}}
      renderCustomHeader={renderCustomHeader}
    />
  );
}

export default DateArea;
