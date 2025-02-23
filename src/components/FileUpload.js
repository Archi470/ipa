"use client"
// src/components/FileUpload.js
import { useState } from "react";
import axios from "axios";

export default function FileUpload() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked"); // Debugging log
    try {
      console.log("Sending request to /api/processDocument"); // Debugging log
      const res = await axios.post("/api/processDocument", { text });
      console.log("API Response:", res.data); // Debugging log
      setResponse(res.data.response);
      setError("");
    } catch (err) {
      console.error("API Error:", err); // Debugging log
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to process"
      />
      <button onClick={handleSubmit}>Process</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && <p>Response: {response}</p>}
    </div>
  );
}