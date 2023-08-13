import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBR_Svp4uvPq3IKWBk1T-D35VXECFr7Hx4",
  authDomain: "chat-room-f5294.firebaseapp.com",
  projectId: "chat-room-f5294",
  storageBucket: "chat-room-f5294.appspot.com",
  messagingSenderId: "863988486985",
  appId: "1:863988486985:web:4d74f128239437c7940098",
  measurementId: "G-B2C364Y70W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);