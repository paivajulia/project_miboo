import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPPk_Giih5S-nuuXUH5Tzp_q2Qv0Bsrz4",
    authDomain: "miboo-22ae3.firebaseapp.com",
    projectId: "miboo-22ae3",
    storageBucket: "miboo-22ae3.appspot.com",
    messagingSenderId: "89528995467",
    appId: "1:89528995467:web:77b6b3dcb3a563275d8e8e",
    measurementId: "G-BZBVVE3H2E"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
