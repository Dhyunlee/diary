import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../fbconfig";

const diaryCollectionRef = collection(dbService, "diarys");

// 다이어리 리스트 조회
export const fetchGetDiarys = async () => {
  const { docs } = await getDocs(diaryCollectionRef);
  return docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    createdAt: new Date(doc.data().createdAt.toDate()).getTime(),
  }));
};

// 다이어리 상세 조회
export const fetchGetDiaryItem = async (id) => {
  const { docs } = await getDocs(diaryCollectionRef);
  return docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: new Date(doc.data().createdAt.toDate()).getTime(),
    }))
    .find((item) => item.id === id);
};

// 다이어리 추가

// 다이어리 수정

// 다이어리 삭제
