// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7c7Y98VAHIHU7OhpKJwFn5Km8zND2RuY",
  authDomain: "dukaan-assignment-51978.firebaseapp.com",
  projectId: "dukaan-assignment-51978",
  storageBucket: "dukaan-assignment-51978.appspot.com",
  messagingSenderId: "504141398381",
  appId: "1:504141398381:web:e57f62c5190703da0d5a64",
  measurementId: "G-94SS1F7XEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);