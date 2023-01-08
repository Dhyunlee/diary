import dayjs from "dayjs";

export function getDate(date) {
  return dayjs(date).format("YYYY년 MM월 DD일");
}
