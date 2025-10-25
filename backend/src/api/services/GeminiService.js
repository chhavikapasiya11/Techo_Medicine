const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeQuery(query) {
  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-pro" });
    const result = await model.generateContent(query);
    return result.response.text();
  } catch (error) {
    console.error("Gemini error:", error);
    return "Sorry, I encountered an issue while processing your request.";
  }
}

module.exports = { analyzeQuery };
