import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3H76OgRN6IiUASaXw3UZRnf5ZDX6wi1U",
  authDomain: "projectblog-96268.firebaseapp.com",
  projectId: "projectblog-96268",
  storageBucket: "projectblog-96268.appspot.com",
  messagingSenderId: "661733594349",
  appId: "1:661733594349:web:7eb6c01df195a859e5e8e4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);