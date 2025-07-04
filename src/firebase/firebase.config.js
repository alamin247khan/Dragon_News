import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv8B2U9w26Uj9mptRqSNxl-KHEdYc3J_Q",
  authDomain: "dragon-news01.firebaseapp.com",
  projectId: "dragon-news01",
  storageBucket: "dragon-news01.firebasestorage.app",
  messagingSenderId: "248832249178",
  appId: "1:248832249178:web:a7544df40a3bf4e580b763"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);