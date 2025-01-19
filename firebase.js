// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA40nn2ATbTIlxYMOaeabtLyWzC2-oOkys",
  authDomain: "ilgar-huseynli.firebaseapp.com",
  projectId: "ilgar-huseynli",
  storageBucket: "ilgar-huseynli.firebasestorage.app",
  messagingSenderId: "620368752624",
  appId: "1:620368752624:web:b577e312af11481e1b3735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };