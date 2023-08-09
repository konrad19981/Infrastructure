// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFQc3GhCbrH2OwlSVv96gA5to0uPAgOfU",
  authDomain: "infrastructure-394913.firebaseapp.com",
  projectId: "infrastructure-394913",
  storageBucket: "infrastructure-394913.appspot.com",
  messagingSenderId: "950925654069",
  appId: "1:950925654069:web:ac85745a4b0e1432eb197c",
  measurementId: "G-PCN9F7DZ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);