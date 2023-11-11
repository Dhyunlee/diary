import React, { memo, useState } from "react";
import DatePicker, {
  ReactDatePickerCustomHeaderProps,
  registerLocale,
} from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getMonth, getYear } from "date-fns";

import { DatePickerBtn, DatePickerWrap } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("ko", ko);

interface IProps {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}
const DateArea = ({ setDate }: IProps) => {
  const [startDate, setStartDate] = useState<Date | null | undefined>(
    new Date()
  );
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
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <DatePickerWrap>
        <DatePickerBtn
          type="button"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <AiOutlineArrowLeft />
        </DatePickerBtn>
        <span className="month-day">
          {getYear(date)}년 {months[getMonth(date)]}
        </span>
        <DatePickerBtn
          type="button"
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
      onChange={(date) => {
        setStartDate(date);
        setDate(date as Date);
      }}
      renderCustomHeader={renderCustomHeader}
    />
  );
};

export default memo(DateArea);
