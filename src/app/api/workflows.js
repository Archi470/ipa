import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, steps } = req.body;
    await addDoc(collection(db, "workflows"), { name, steps });
    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const workflows = await getDocs(collection(db, "workflows"));
    res.status(200).json(workflows.docs.map((doc) => doc.data()));
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}