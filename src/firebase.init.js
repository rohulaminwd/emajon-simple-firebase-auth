// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBTvEj1iCQLZICStV9T8rSdaSTBVNIVyX4",
  authDomain: "emajon-simple-8a75c.firebaseapp.com",
  projectId: "emajon-simple-8a75c",
  storageBucket: "emajon-simple-8a75c.appspot.com",
  messagingSenderId: "5856305468",
  appId: "1:5856305468:web:873c79eaf45a191c94fe39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;