import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  const docs = await getDocs(collection(db, "processedDocuments"));
  const data = docs.docs.map((doc) => doc.data());
  res.status(200).json(data);
}