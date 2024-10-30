import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Recupera la chiave API dalle variabili d'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("API key is missing.");
      return res
        .status(500)
        .json({ error: "Internal Server Error: API key is missing." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const prompt =
      "List all the models available on Gemini API interface to implement on a web app using GoogleGenerativeAI in Next.js framework and TypeScript.";

    // Genera il contenuto con il prompt specificato
    const result = await model.generateContent(prompt);

    // Controlla se il risultato e le parti necessarie sono definite
    const models =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text?.split(
        "\n"
      ) || [];

    console.log(models);
    return res.status(200).json(models);
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
