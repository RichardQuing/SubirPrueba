// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2LNb3WOqReWUotzDemOpDCTfYY6TTz1A",
    authDomain: "rq-prueba.firebaseapp.com",
    projectId: "rq-prueba",
    storageBucket: "rq-prueba.appspot.com",
    messagingSenderId: "663925713463",
    appId: "1:663925713463:web:6c0c4c3032e672ed366db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {db,auth};