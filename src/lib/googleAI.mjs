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
