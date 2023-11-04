import { startOfMonth, format, endOfMonth } from "date-fns";
import { IDiary } from "types/db";

/**
 * 월별로 정렬해주는 함수 구현
 * @param {number | Date} curDate
 * @param {IDiary[]} data
 * @returns {IDiary[]}
 */

export const getThisMonthData = (
  data: IDiary[],
  curDate: number | Date
): IDiary[] => {
  // const startOfDate = dayjs(curDate).startOf("month").format("YYYYMMDD");
  // const endOfDate = dayjs(curDate).endOf("month").format("YYYYMMDD");
  const startOfDate = format(startOfMonth(curDate), "yyyyMMdd");
  const endOfDate = format(endOfMonth(curDate), "yyyyMMdd");

  const result = data?.filter((item: IDiary) => {
    const fomattedCreatedAt = format(new Date(item.createdAt), "yyyy-MM-dd");
    const targetDate = parseInt(fomattedCreatedAt.split("-").join(""), 10);
    if (Number(startOfDate) <= targetDate && targetDate <= Number(endOfDate)) {
      return item;
    }
  });
  return result;
};
