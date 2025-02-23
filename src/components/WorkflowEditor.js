import { useState } from "react";
import axios from "axios";

export default function WorkflowEditor() {
  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/workflows", { name, steps });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={steps} onChange={(e) => setSteps(e.target.value)} />
      <button onClick={handleSubmit}>Save Workflow</button>
    </div>
  );
}