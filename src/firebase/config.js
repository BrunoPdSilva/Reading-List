import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-_dzk1zI7DYAMqYBPInbHQbCZCHzjiCc",
  authDomain: "reading-list-c3fd5.firebaseapp.com",
  projectId: "reading-list-c3fd5",
  storageBucket: "reading-list-c3fd5.appspot.com",
  messagingSenderId: "689779241389",
  appId: "1:689779241389:web:29b368bd28956b8ab9b124",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
