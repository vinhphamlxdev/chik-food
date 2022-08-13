import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2fXw1RTpp0d-m5zfACWw7l0XqQ2aIQ5c",
  authDomain: "chik-food.firebaseapp.com",
  projectId: "chik-food",
  storageBucket: "chik-food.appspot.com",
  messagingSenderId: "159825516749",
  appId: "1:159825516749:web:da765db42161835200f184",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
