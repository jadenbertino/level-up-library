import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATZpXegZ-WdbbUQGmIL-WHL0W63xbF_m8",
  authDomain: "library-ecommerce.firebaseapp.com",
  projectId: "library-ecommerce",
  storageBucket: "library-ecommerce.appspot.com",
  messagingSenderId: "286773940007",
  appId: "1:286773940007:web:7cdd660f0a46e178206302"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);