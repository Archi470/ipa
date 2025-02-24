import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore, doc, setDoc } from "firebase/firestore";


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



// ✅ Function to save extracted details to Firestore
export async function saveInvoiceData(invoice_no, emp_name) {
  try {
    const docRef = doc(db, "invoices", invoice_no); // Store by invoice_no
    await setDoc(docRef, { invoice_no, emp_name, timestamp: new Date() });

    console.log("Data saved to Firebase successfully.");
  } catch (error) {
    console.error("Error saving to Firebase:", error);
  }
}
