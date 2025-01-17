// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGztn8RpZVTqYXMZuR6u297ClVot3-CAA",
  authDomain: "idinchatai.firebaseapp.com",
  projectId: "idinchatai",
  storageBucket: "idinchatai.firebasestorage.app",
  messagingSenderId: "763000222914",
  appId: "1:763000222914:web:329a9f54c79ffa6b2b375b",
  measurementId: "G-T5SFM617ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };