// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqg9u11ciCWjKBlzYseFwH-Z1IDn8vBCY",
  authDomain: "discrete-math-app.firebaseapp.com",
  projectId: "discrete-math-app",
  storageBucket: "discrete-math-app.appspot.com",
  messagingSenderId: "527299218110",
  appId: "1:527299218110:web:ea138cfde459dbe274ecef"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };