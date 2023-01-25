// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5-CP8T8hSwhIrgi7_2XDjn_epyAwWONU",
    authDomain: "portfolio-10d40.firebaseapp.com",
    projectId: "portfolio-10d40",
    storageBucket: "portfolio-10d40.appspot.com",
    messagingSenderId: "941594017953",
    appId: "1:941594017953:web:81e65f33c4bde7ba95f0e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app