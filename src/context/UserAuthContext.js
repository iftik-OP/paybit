import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSVJwcYP2hB4XtpASM4lDqxRwUrQizEcY",
  authDomain: "paybit-b1267.firebaseapp.com",
  projectId: "paybit-b1267",
  storageBucket: "paybit-b1267.appspot.com",
  messagingSenderId: "402886094162",
  appId: "1:402886094162:web:88b57299789ce9fc3fde8b",
  measurementId: "G-5KTGFPWZLW",
};

const app = initializeApp(firebaseConfig);

const userAuthContext = createContext();


export const auth = getAuth(app);


export const logout = async () => {};

export function useUserAuth() {
  return useContext(userAuthContext);
}