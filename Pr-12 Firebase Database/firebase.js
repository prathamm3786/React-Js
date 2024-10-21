// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1oYB4lNF1F4rppISmVU_4J-mooWGDEt0",
  authDomain: "fir-database-8ae9d.firebaseapp.com",
  databaseURL: "https://fir-database-8ae9d-default-rtdb.firebaseio.com",
  projectId: "fir-database-8ae9d",
  storageBucket: "fir-database-8ae9d.appspot.com",
  messagingSenderId: "118192561777",
  appId: "1:118192561777:web:ab7935f493554339a605d0",
  measurementId: "G-H0J29EZPQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);