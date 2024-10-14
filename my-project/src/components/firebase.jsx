// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-MoxMRgPoDWIMtYWxkm2Jcxv_c6fvKJg",
  authDomain: "authforportfolio.firebaseapp.com",
  projectId: "authforportfolio",
  storageBucket: "authforportfolio.appspot.com",
  messagingSenderId: "335125354959",
  appId: "1:335125354959:web:d8f7f32392f4fee69d1aba",
  measurementId: "G-GQPC6RY9B7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
