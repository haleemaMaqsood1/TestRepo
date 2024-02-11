// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from '@react-native-firebase/app';

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import {getAuth} from "@react-native-firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7H0YdFZ_I5yuXnbuB6XM_vMYypMR0zv4",
  authDomain: "test-2565d.firebaseapp.com",
  projectId: "test-2565d",
  storageBucket: "test-2565d.appspot.com",
  messagingSenderId: "455953238169",
  appId: "1:455953238169:web:102ef9a27489308f9cd008",
  measurementId: "G-1702FFBY66"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP);

// const analytics = getAnalytics(app);