import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "../fbconfig";

const diaryCollectionRef = collection(dbService, "diarys");

// 다이어리 리스트 조회
export const fetchGetDiary = async () => {
  try {
    const { docs } = await getDocs(diaryCollectionRef);
    const getData = docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: new Date(doc.data().createdAt.toDate()).getTime(),
    }));
    return getData;
  } catch (err) {
    console.error(err);
  }
};

// 다이어리 상세 조회
export const fetchGetDiaryById = async (id) => {
  const diaryDocRef = doc(dbService, "diarys", id);
  try {
    const getData = await getDoc(diaryDocRef);
    if (!getData.exists()) return "해당 데이터가 존재하지 않습니다.";
    return {
      ...getData.data(),
      createdAt: new Date(getData.data().createdAt.toDate()).getTime(),
    };
  } catch (err) {
    console.error(err);
  }
};

// 다이어리 추가
export const fetchPostDiary = async (data) => {
  try {
    await addDoc(diaryCollectionRef, data);
    return {
      isOk: true,
      msg: "추가했습니다.",
    };
  } catch (err) {
    return {
      isOk: false,
      msg: err.massage,
    };
  }
};

// 다이어리 수정
export const fetchPutDiaryById = async (id, data) => {
  const diaryDocRef = doc(dbService, "diarys", id);
  await updateDoc(diaryDocRef, data)
};

// 다이어리 삭제
export const fetchDeleteDiaryById = async (id) => {
  const diaryDocRef = doc(dbService, "diarys", id);
  try {
    await deleteDoc(diaryDocRef);
    return {
      isOk: true,
      msg: "삭제되었습니다.",
    }; // res는 undefined
  } catch (err) {
    return {
      isOk: false,
      msg: err.massage,
    };
  }
};
