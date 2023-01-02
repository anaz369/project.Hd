import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6p6i2v62WdsK-8vnlxk6gelbwu-jheqg",
  authDomain: "datas-07.firebaseapp.com",
  projectId: "datas-07",
  storageBucket: "datas-07.appspot.com",
  messagingSenderId: "1094725972113",
  appId: "1:1094725972113:web:73273f8112fc1ac0c08f30",
  measurementId: "G-WD9HFWRQJK",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
