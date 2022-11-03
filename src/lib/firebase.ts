// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, signInAnonymously, onAuthStateChanged} from "firebase/auth";
import {getFirestore, updateDoc, arrayUnion, arrayRemove, FieldValue, query, limit, collection, doc, getDocs,setDoc, addDoc, where} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk0QP5yBIB4VD_-vSJNwrP-yPRh4lK6HE",
  authDomain: "enigma-21e99.firebaseapp.com",
  projectId: "enigma-21e99",
  storageBucket: "enigma-21e99.appspot.com",
  messagingSenderId: "674790994356",
  appId: "1:674790994356:web:4f49f2c1d1afd9e84ac2e1",
  measurementId: "G-MTPWZQXQH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {db, signInWithEmailAndPassword, signOut, auth, createUserWithEmailAndPassword, onAuthStateChanged, signInAnonymously};


