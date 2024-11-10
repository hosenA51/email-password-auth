// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// DO NOT Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyBNtfCCXhdWdGVDyQ6FPT5h2lMlltpEFc8",
  authDomain: "email-password-auth-e8ea4.firebaseapp.com",
  projectId: "email-password-auth-e8ea4",
  storageBucket: "email-password-auth-e8ea4.firebasestorage.app",
  messagingSenderId: "957609803405",
  appId: "1:957609803405:web:2a1ba2d12774fcc1a72cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);