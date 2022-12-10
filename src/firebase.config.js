import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDz2HoHjoa1lWhMBjZMTd3bVhGi9VNWYJU",
  authDomain: "reastrauntapp.firebaseapp.com",
  databaseURL: "https://reastrauntapp-default-rtdb.firebaseio.com",
  projectId: "reastrauntapp",
  storageBucket: "reastrauntapp.appspot.com",
  messagingSenderId: "170371105470",
  appId: "1:170371105470:web:0ce1853ab842e5d301d4ef",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
