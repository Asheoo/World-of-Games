// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8G0yajYiQC_6wGr_5aaNvLHh1MnlkpE",
  authDomain: "game-store-810d3.firebaseapp.com",
  projectId: "game-store-810d3",
  storageBucket: "game-store-810d3.appspot.com",
  messagingSenderId: "519177421498",
  appId: "1:519177421498:web:ec4c9e158f9cbef6ed3883",
  databaseURL: "https://game-store-810d3-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);

export const db=getDatabase(app)
// console.log(db);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();