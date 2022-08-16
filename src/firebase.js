// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSVJwcYP2hB4XtpASM4lDqxRwUrQizEcY",
  authDomain: "paybit-b1267.firebaseapp.com",
  projectId: "paybit-b1267",
  storageBucket: "paybit-b1267.appspot.com",
  messagingSenderId: "402886094162",
  appId: "1:402886094162:web:88b57299789ce9fc3fde8b",
  measurementId: "G-5KTGFPWZLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;