import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config (same hi rahega)
const firebaseConfig = {
  apiKey: "AIzaSyCMpzFrNvG9C4x1L_oEUkGt64qmYIY",
  authDomain: "portfolio-c303e.firebaseapp.com",
  projectId: "portfolio-c303e",
  storageBucket: "portfolio-c303e.appspot.com",
  messagingSenderId: "460459896054",
  appId: "1:460459896054:web:05c4269e1dc08be6f50d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ THIS WAS MISSING
export const db = getFirestore(app);
