import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Use POST" });

    const { prompt, functions } = req.body;
    if (!prompt || !functions)
      return res
        .status(400)
        .json({ error: "Prompt and functions are required" });

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
    //configurazione attiva
    model.generationConfig = generationConfig;
    const result = await model.generateContent(prompt || functions);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export default handler;
