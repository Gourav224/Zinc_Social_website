// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMmE-Web_nT3iaSoQBDTGVq65s_ov-DYA",
    authDomain: "zinc-social.firebaseapp.com",
    projectId: "zinc-social",
    storageBucket: "zinc-social.appspot.com",
    messagingSenderId: "968414172317",
    appId: "1:968414172317:web:476d87f440da82040a7074",
    measurementId: "G-55F30BPXBP",
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
