// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf8_k9FRT7gHiQREdlgXdxrQlz3OTz3HM",
  authDomain: "community-repair-workshops.firebaseapp.com",
  projectId: "community-repair-workshops",
  storageBucket: "community-repair-workshops.appspot.com",
  messagingSenderId: "18999849337",
  appId: "1:18999849337:web:a4910e4bda7820c7d5ffa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;