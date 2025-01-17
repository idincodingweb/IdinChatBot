import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUnDv6kY3Y633kCo13PCO-oV7udFSJCoE",
    authDomain: "database-8ba6f.firebaseapp.com",
    projectId: "database-8ba6f",
    storageBucket: "database-8ba6f.firebasestorage.app",
    messagingSenderId: "812622567667",
    appId: "1:812622567667:web:6c6755e487a04249233f86",
    measurementId: "G-YZ9N3FQ59E"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };