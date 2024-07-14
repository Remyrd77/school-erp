// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArYHk-ZB17a0S3hsl1BAB83PaTightptM",
  authDomain: "netflix-6973b.firebaseapp.com",
  projectId: "netflix-6973b",
  storageBucket: "netflix-6973b.appspot.com",
  messagingSenderId: "60043051218",
  appId: "1:60043051218:web:d19117f1dd5a7066b32d0b",
  measurementId: "G-843TDWTJ9S",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// console.log(auth);
export { auth };
export default db;
