// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAspwkNKEcxGLcGi5Vb3kCQLqCOAvkyc",
  authDomain: "study-sync-21d6a.firebaseapp.com",
  projectId: "study-sync-21d6a",
  storageBucket: "study-sync-21d6a.appspot.com",
  messagingSenderId: "238028852750",
  appId: "1:238028852750:web:b706555bd1e6755237f65f",
  measurementId: "G-X7KT5BPRY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);