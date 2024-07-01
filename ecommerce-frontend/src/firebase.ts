
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-ecommerce-2024-86917.firebaseapp.com",
  projectId: "mern-ecommerce-2024-86917",
  storageBucket: "mern-ecommerce-2024-86917.appspot.com",
  messagingSenderId: "773251723875",
  appId: "1:773251723875:web:468741604ab59515fb7e56"
};
//can add all other parameters to env like key

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);