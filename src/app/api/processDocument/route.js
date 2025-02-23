import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ success: false, message: "Text is required" });
  }

  try {
    // Process text here (e.g., store in Firestore)
    res.status(200).json({ success: true, response: `Processed: ${text}` });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
