export interface QueryDiary {
  userId: string;
}

export interface IGetDiaryList extends QueryDiary {
  getMonth: number;
}