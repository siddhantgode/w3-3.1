// src/firebase.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Authentication (if needed)
import { getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDttTbb4rNzZv8AP9x1nu7W1JOJ2xN_iU0",
  authDomain: "edufulness-w3.firebaseapp.com",
  projectId: "edufulness-w3",
  storageBucket: "edufulness-w3.firebasestorage.app",
  messagingSenderId: "682304222760",
  appId: "1:682304222760:web:0eb463133e3abd055d271d",
  measurementId: "G-L2D2SG9J6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firestore methods
export { db, auth, collection, addDoc };
export default app;
