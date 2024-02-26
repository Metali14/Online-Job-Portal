// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgzS27_XY1u_rrFj-iBKXa2IKYX9OTACQ",
  authDomain: "online-job-portal-f1089.firebaseapp.com",
  projectId: "online-job-portal-f1089",
  storageBucket: "online-job-portal-f1089.appspot.com",
  messagingSenderId: "438593281430",
  appId: "1:438593281430:web:8ce020f20b4ace48e811b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};