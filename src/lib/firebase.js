import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8ScPmu6Zv17DFCha9r_H3sLolIQjjajk",
  authDomain: "ggh-ipa.firebaseapp.com",
  projectId: "ggh-ipa",
  storageBucket: "ggh-ipa.firebasestorage.app",
  messagingSenderId: "233304346865",
  appId: "1:233304346865:web:5fdfb3146f830b61299950",
  measurementId: "G-6LBJS4KL4P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };