// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBIPGyVY3ltiNCODH3i6nQvc-HB57E6Hg",
  authDomain: "play-b2b31.firebaseapp.com",
  projectId: "play-b2b31",
  storageBucket: "play-b2b31.appspot.com",
  messagingSenderId: "256472309738",
  appId: "1:256472309738:web:0595f42aeb69ebe9b49c93",
  measurementId: "G-03BD3E52CG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
