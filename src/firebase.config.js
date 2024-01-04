// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQcmTfHxXlHKA2AGzRIyO652M2ESOw5a4",
  authDomain: "verify-7159d.firebaseapp.com",
  projectId: "verify-7159d",
  storageBucket: "verify-7159d.appspot.com",
  messagingSenderId: "553469772002",
  appId: "1:553469772002:web:25f36571a344f92de65ebb",
  measurementId: "G-6JQ9ZVBPFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
