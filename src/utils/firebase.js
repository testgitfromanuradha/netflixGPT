// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxKYf2CX8Hzwcf4hO9OSmuFZER33Xa5c8",
  authDomain: "netflixgpt-2621b.firebaseapp.com",
  projectId: "netflixgpt-2621b",
  storageBucket: "netflixgpt-2621b.appspot.com",
  messagingSenderId: "142540496127",
  appId: "1:142540496127:web:5ec74ef84766df58fc80ca",
  measurementId: "G-68DFM2W0HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();