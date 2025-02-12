import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyA9p6WQ99ZOtfN23seMYhDkrC8GrPP-BeE",
//   authDomain: "ecommerce-mu.firebaseapp.com",
//   projectId: "ecommerce-mu",
//   storageBucket: "ecommerce-mu.firebasestorage.app",
//   messagingSenderId: "465286996949",
//   appId: "1:465286996949:web:ee9efd6620731395bf135c",
//   measurementId: "G-XHNRFTMY8R"
// };


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

// Create Google authentication provider
export const provider = new GoogleAuthProvider();




// Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWbzCD8kVr_9gpFQTJsrhxcwlr4CKKrmM",
//   authDomain: "ecommerce-mu2.firebaseapp.com",
//   projectId: "ecommerce-mu2",
//   storageBucket: "ecommerce-mu2.firebasestorage.app",
//   messagingSenderId: "209291624920",
//   appId: "1:209291624920:web:518067ae1d19b6388bb2ad",
//   measurementId: "G-HEWVMRSDM7",
// };