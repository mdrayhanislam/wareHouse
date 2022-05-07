// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJZF44srGbQvSW1cNKL7wocz4Eo4vrlw",
  authDomain: "assignment-11-af770.firebaseapp.com",
  projectId: "assignment-11-af770",
  storageBucket: "assignment-11-af770.appspot.com",
  messagingSenderId: "309136378478",
  appId: "1:309136378478:web:1d201d53b00964dfc0747f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;