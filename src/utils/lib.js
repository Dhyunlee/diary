import { format } from "date-fns";

export const getDate = (date) => {
  return format(date, "yyyy년 MM월 dd일");
};

export const getUserName = (email) => {
  const name = email?.slice(0, email?.indexOf("@"));
  return `${name}님 환영합니다.`;
};
