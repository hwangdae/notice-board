// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQHgI-ANUB29l1CJ2slOPJ__LhVxbcQlE",
  authDomain: "notice-board-aa3be.firebaseapp.com",
  projectId: "notice-board-aa3be",
  storageBucket: "notice-board-aa3be.appspot.com",
  messagingSenderId: "274954205955",
  appId: "1:274954205955:web:9a37b63bbdc29e03808736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const db = getDatabase(app)
export const db = getFirestore(app)