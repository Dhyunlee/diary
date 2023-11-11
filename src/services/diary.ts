import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dbService } from "../fbconfig";
import { TDiaryQuery } from "types/db";

const diaryCollectionRef = collection(dbService, "diarys");

// 다이어리 리스트 조회
export const fetchGetDiary = async (userId: string) => {
  try {
    const q = query(
      diaryCollectionRef,
      where("writer", "==", userId),
      orderBy("createdAt", "desc"),
      limit(10)
    );
    const getData = new Promise((res, rej) => {
      onSnapshot(q, (snapshop) => {
        let result = snapshop.docs.map((doc) => ({
          diaryId: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toDate()).getTime(),
        }));
        if (!result) {
          rej("Failed to fetch data");
        } else {
          res(result);
        }
      });
    });
    return getData.then((data) => data);
  } catch (err: any) {
    new Error(err);
  }
};

// 다이어리 상세 조회
export const fetchGetDiaryById = async (id: string) => {
  const diaryDocRef = doc(dbService, "diarys", id);
  try {
    const getData = await getDoc(diaryDocRef);
    if (!getData.exists()) return "해당 데이터가 존재하지 않습니다.";
    return {
      diaryId: id,
      ...getData.data(),
      createdAt: new Date(getData.data().createdAt.toDate()).getTime(),
    };
  } catch (err: any) {
    new Error(err);
  }
};
// 다이어리 추가
export const fetchPostDiary = async (data: TDiaryQuery) => {
  try {
    await addDoc(diaryCollectionRef, data);
    return {
      isOk: true,
      msg: "추가했습니다.",
    };
  } catch (err: any) {
    new Error(err);
  }
};

// 다이어리 수정
export const fetchPutDiaryById = async (id: string, data: any) => {
  const diaryDocRef = doc(diaryCollectionRef, id);
  try {
    await updateDoc(diaryDocRef, data);
    return {
      isOk: true,
      msg: "수정했습니다.",
    };
  } catch (err: any) {
    new Error(err);
  }
};

// 다이어리 삭제
export const fetchDeleteDiaryById = async (id: string) => {
  const diaryDocRef = doc(dbService, "diarys", id);
  try {
    await deleteDoc(diaryDocRef);
    return {
      isOk: true,
      msg: "삭제되었습니다.",
    }; // res는 undefined
  } catch (err: any) {
    new Error(err);
  }
};
