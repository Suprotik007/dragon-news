// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3xSfqXS80heWacGSWMBcT3dcpM8EmkRM",
  authDomain: "dragon-news-auth-a9dd5.firebaseapp.com",
  projectId: "dragon-news-auth-a9dd5",
  storageBucket: "dragon-news-auth-a9dd5.firebasestorage.app",
  messagingSenderId: "137921884485",
  appId: "1:137921884485:web:407f4101e86fb4ff84ce2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app