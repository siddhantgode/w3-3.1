// src/firebase.js

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getAuth } from "firebase/auth"; // Authentication (if needed)

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
const analytics = getAnalytics(app);

// Export Firebase services
export const db = getFirestore(app); // Firestore for database
export const auth = getAuth(app); // Authentication
export default app;