import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function generateText(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error("Invalid API response");
    }

    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "⚠️ Error generating response. Please try again later.";
  }
}

export async function extractDetailsFromPrompt(prompt) {
  const aiPrompt = `
    Extract and return only the employee name and invoice number in **valid JSON format** from the following text.
    If no valid data is found, return {"invoice_no": null, "emp_name": null}.
    Text: "${prompt}"
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(aiPrompt);

    // Ensure we extract response correctly
    const responseText = await result.response.text();
    console.log("AI Response:", responseText); // Debugging output

    // Try parsing JSON, fallback if invalid
    let extractedData;
    try {
      extractedData = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("Invalid JSON format from AI:", responseText);
      return { invoice_no: null, emp_name: null }; // Prevent app crash
    }

    if (!extractedData.invoice_no || !extractedData.emp_name) {
      console.warn("No valid details found in the text.");
      return extractedData; // Don't save empty data
    }

    // Save extracted details to Firestore
    await saveToFirestore(extractedData.invoice_no, extractedData.emp_name);
    return extractedData;

  } catch (error) {
    console.error("Error extracting details:", error);
    return { invoice_no: null, emp_name: null }; // Graceful error handling
  }
}
