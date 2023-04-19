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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { IAuth } from "types/db";

// export type LoginReturnType = Promise<{
//   isOk: boolean;
//   msg?: string;
//   userId?: string;
// }>;
// export type SignupReturnType = Promise<{
//   isOk: boolean;
//   msg?: string;
//   userId?: string;
// }>;

const usersRef = collection(dbService, "users");

export const checkEmail = async (email: string) => {
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

export const signUp = async ({ email, password }: IAuth): Promise<any> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      authService,
      email,
      password
    );

    await setDoc(doc(usersRef, user.uid), { email });
    return {
      isOk: true,
    };
  } catch (err: any) {
    if (err instanceof Error) {
      return {
        isOk: false,
        msg: err.message,
      };
    }
  }
};

export const logIn = async ({ email, password }: IAuth): Promise<any> => {
  try {
    const { user } = await signInWithEmailAndPassword(
      authService,
      email,
      password
    );
    return {
      isOk: true,
      msg: "인증 성공",
      userId: user.uid,
    };
  } catch (err: any) {
    if (err instanceof Error) {
      return {
        isOk: false,
        msg: err.message,
      };
    }
  }
};

export const logOut = async (): Promise<any> => {
  try {
    await signOut(authService);
    return {
      isOk: false,
      msg: null,
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        isOk: false,
        msg: err.message,
      };
    }
  }
};
