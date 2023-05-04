import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYbM66-YciqJLdkvOOldSu4I-sqojevpo",
  authDomain: "level-up-library.firebaseapp.com",
  projectId: "level-up-library",
  storageBucket: "level-up-library.appspot.com",
  messagingSenderId: "646446274520",
  appId: "1:646446274520:web:4487be13f563b042fb84ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);