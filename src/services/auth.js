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
  console.log("로그인");
  const auth = getAuth();
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      isOk: true,
      msg: "인증 성공",
      userId: user.uid,
    };
  } catch (err) {
    return {
      isOk: false,
      msg: err.message,
    };
  }
};

export const logOut = async () => {
  try {
    await signOut(authService);
    return {
      isOk: false,
      msg: null,
    };
  } catch (err) {
    console.error(err);
  }
};
