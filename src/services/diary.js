import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { dbService } from "../fbconfig";

const diaryCollectionRef = collection(dbService, "diarys");

// 다이어리 리스트 조회
export const fetchGetDiarys = async () => {
  try {
    const { docs } = await getDocs(diaryCollectionRef);
    return docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: new Date(doc.data().createdAt.toDate()).getTime(),
    }));
  } catch (err) {
    console.error(err);
  }
};

// 다이어리 상세 조회
export const fetchGetDiaryItem = async (id) => {
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

// 다이어리 수정

// 다이어리 삭제
