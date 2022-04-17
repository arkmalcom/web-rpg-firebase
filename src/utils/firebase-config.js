// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCN-8uT1hYi3b-3kJKUMI5PYMwzxGwhVUg",
    authDomain: "web-rpg-6e4c8.firebaseapp.com",
    projectId: "web-rpg-6e4c8",
    storageBucket: "web-rpg-6e4c8.appspot.com",
    messagingSenderId: "1076055657380",
    appId: "1:1076055657380:web:88a3cea73b24b62f214f31",
    measurementId: "G-H0FWVH40HM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export const analytics = getAnalytics(app);