import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { authService, dbService } from "../fbconfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const usersRef = collection(dbService, "users");

export const checkEmail = async (email) => {
  console.log(email);
  let hasUserEmail;
  const getQuery = query(usersRef, where("email", "==", email));

  const querySnapshot = await getDocs(getQuery);
  querySnapshot.forEach((doc) => {
    hasUserEmail = doc.data();
  });
  if (hasUserEmail) {
    return {
      isOk: false,
      msg: "사용중인 이메일입니다.",
    };
  } else {
    return {
      isOk: true,
      msg: "사용 가능한 이메일입니다.",
    };
  }
};

export const signUp = async ({ email, password }) => {
  const auth = getAuth();
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(usersRef, user.uid), { email });
    return {
      isOk: true,
    };
  } catch (err) {
    return {
      isOk: false,
      msg: err.message,
    };
  }
};

export const logIn = async ({ email, password }) => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return {
      isOk: true,
      data: {
        msg: "인증 성공",
      },
    };
  } catch (err) {
    return {
      isOk: false,
      data: {
        msg: err.message,
      },
    };
  }
};

export const logOut = async () => {
  try {
    const res = signOut(authService);
    return res && "로그아웃됨";
  } catch (err) {
    console.error(err);
  }
};
