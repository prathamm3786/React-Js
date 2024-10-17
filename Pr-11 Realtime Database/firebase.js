// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqeCZ-OPBAskSezbSt1N6AhPHW23Ia6Go",
  authDomain: "fir-realtime-database-51bd7.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-51bd7-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-database-51bd7",
  storageBucket: "fir-realtime-database-51bd7.appspot.com",
  messagingSenderId: "1078289555859",
  appId: "1:1078289555859:web:9cbc523a1418cf89660866",
  measurementId: "G-MGK6615G13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
