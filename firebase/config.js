import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwGqLUu5SAYJVfi_f_MZ8NWPvF5L7R19U",
  authDomain: "react-hw-14280.firebaseapp.com",
  projectId: "react-hw-14280",
  storageBucket: "react-hw-14280.appspot.com",
  messagingSenderId: "553060629545",
  appId: "1:553060629545:web:14796c9f81bf85d9643038",
  measurementId: "G-1EZZLZ46L3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
