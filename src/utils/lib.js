import dayjs from "dayjs";

export const getDate = (date) => {
  return dayjs(date).format("YYYY년 MM월 DD일");
}
