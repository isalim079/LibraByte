// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6utPei12H6y-NwA2YNA6_PeTO7Q1zQ44",
  authDomain: "libra-byte.firebaseapp.com",
  projectId: "libra-byte",
  storageBucket: "libra-byte.appspot.com",
  messagingSenderId: "528055717043",
  appId: "1:528055717043:web:a6d14342d120a1d87bb4c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;