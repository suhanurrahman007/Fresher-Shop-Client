// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk14PoncxjJIrgkNfJ5BTSSm4jN9I4SWA",
  authDomain: "super-shop-54e2e.firebaseapp.com",
  projectId: "super-shop-54e2e",
  storageBucket: "super-shop-54e2e.firebasestorage.app",
  messagingSenderId: "347120287622",
  appId: "1:347120287622:web:6e9d8a77642ddb8b3b7607",
  measurementId: "G-T163XGG2DK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;