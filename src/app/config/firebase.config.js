// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmXFKOFNRcXf9eig8QtV4udv33CmaxdL0",
  authDomain: "sh-shop-8891f.firebaseapp.com",
  projectId: "sh-shop-8891f",
  storageBucket: "sh-shop-8891f.appspot.com",
  messagingSenderId: "308903551282",
  appId: "1:308903551282:web:e4755bbf46a3d7d398772b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;