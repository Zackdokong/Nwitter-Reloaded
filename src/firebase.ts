import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv_JqZfv5Jwd3xlPYJpeNhuO243EqTMoQ",
  authDomain: "nwitter-reloaded-9a803.firebaseapp.com",
  projectId: "nwitter-reloaded-9a803",
  storageBucket: "nwitter-reloaded-9a803.appspot.com",
  messagingSenderId: "702184897948",
  appId: "1:702184897948:web:09bde8b31d052587e39c59",
  measurementId: "G-FL68C1NS4D"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);