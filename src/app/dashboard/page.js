"use client";

import { useState } from "react";
import { generateText } from "@/lib/googleAI"; // ✅ Correct import path

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return; // Prevent empty prompts
    setLoading(true);
    setResponse("");

    try {
      const result = await generateText(prompt);
      setResponse(result);
    } catch (error) {
      setResponse("Error generating response.");
      console.error("Gemini API Error:", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Welcome to the Dashboard</h1>

      <textarea
        rows="4"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />

      <button onClick={handleGenerate} disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Generating..." : "Generate Response"}
      </button>

      {response && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
