// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import conf from "./config";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: conf.apiKey,
    authDomain: conf.authDomain,
    projectId: conf.projectId,
    storageBucket: conf.storageBucket,
    messagingSenderId: conf.messagingSenderId,
    appId: conf.appId,
    measurementId: conf.measurementId,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
