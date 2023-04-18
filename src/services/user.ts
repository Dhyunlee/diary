import { dbService } from "../fbconfig";
import {
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

const usersRef = collection(dbService, "users");

export const fetchGetUserInfo = async (userId: string) => {
  const userDocRef = doc(usersRef, userId);
  try {
    const getData = await getDoc(userDocRef);
    if (!getData.exists()) return "해당 데이터가 존재하지 않습니다.";
    return {
      userId: userId,
      ...getData.data(),
    };
  } catch (err) {
    console.error(err);
  }
};

export const fetchGetUserId = async () => {};
