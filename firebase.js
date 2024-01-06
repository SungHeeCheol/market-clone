import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB57YEPRW5mWh531SLdoAN1r9SKhciVBUM",
  authDomain: "carrot-market-c220d.firebaseapp.com",
  databaseURL:
    "https://carrot-market-c220d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-c220d",
  storageBucket: "carrot-market-c220d.appspot.com",
  messagingSenderId: "1057460725644",
  appId: "1:1057460725644:web:acd081befb8e4f5fa9d8a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
