// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA0G1Gv-UGOj63mvdgDzCEInCMxjvISHI",
  authDomain: "biodata-2453c.firebaseapp.com",
  databaseURL: "https://biodata-2453c-default-rtdb.firebaseio.com",
  projectId: "biodata-2453c",
  storageBucket: "biodata-2453c.appspot.com",
  messagingSenderId: "213447425264",
  appId: "1:213447425264:web:a6d31043b83ccf95015635",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
