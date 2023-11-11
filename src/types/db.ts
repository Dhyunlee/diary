import { TEmotion } from "utils/emotion";

export interface IAuth {
  email: string;
  password: string;
}

export type TDiaryQuery = Omit<IDiary, "diaryId">

export interface IDiary {
  diaryId: string;
  title: string;
  writer: string;
  content: string;
  emotion: TEmotion;
  month?: string;
  imgUrl?: string;
  imgFileName?: string;
  createdAt: number | Date;
}
