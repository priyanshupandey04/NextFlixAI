// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoq0oh011HFf0pQu9CMmNzLuB947XZWv4",
  authDomain: "nextflixai-1.firebaseapp.com",
  projectId: "nextflixai-1",
  storageBucket: "nextflixai-1.firebasestorage.app",
  messagingSenderId: "419686816479",
  appId: "1:419686816479:web:0f6d00518449d4fc77276a",
  measurementId: "G-QKPKF1NG7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);