// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH0-oB7PFA5zv-V1TTWgjYbOxaOOhgxCI",
  authDomain: "haud-react-test.firebaseapp.com",
  projectId: "haud-react-test",
  storageBucket: "haud-react-test.appspot.com",
  messagingSenderId: "449431858389",
  appId: "1:449431858389:web:96acae2d99319243ca465c",
  measurementId: "G-5YKSKPC2NH"
};
// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig))
export default db