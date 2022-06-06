// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlq9_IIsB108hk_YHtEpipp7TljDYtH_4",
  authDomain: "ema-john-simepl.firebaseapp.com",
  projectId: "ema-john-simepl",
  storageBucket: "ema-john-simepl.appspot.com",
  messagingSenderId: "1074201746815",
  appId: "1:1074201746815:web:53bb8e14b0a8df78ef8e4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
