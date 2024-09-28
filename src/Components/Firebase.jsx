// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCErhzA7vBARtsOaJ5L_Hg-3hO5IpChRBw",
  authDomain: "exam-portal-1f657.firebaseapp.com",
  projectId: "exam-portal-1f657",
  storageBucket: "exam-portal-1f657.appspot.com",
  messagingSenderId: "673630538936",
  appId: "1:673630538936:web:ad68882e2c28f8a10d784d",
  measurementId: "G-X173LFTEF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);