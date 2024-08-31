
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBO0U9iuT6jwKLl1cshIv1ps14Eoo_Ukrw",
    authDomain: "safebyte-9f915.firebaseapp.com",
    projectId: "safebyte-9f915",
    storageBucket: "safebyte-9f915.appspot.com",
    messagingSenderId: "1002186306160",
    appId: "1:1002186306160:web:6219ff4fc48cb891ed7ab5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);