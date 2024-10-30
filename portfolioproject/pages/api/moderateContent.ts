import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Use POST" });

    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    const genAI = new GoogleGenerativeAI(apiKey);

    const result = await genAI
      .getGenerativeModel({ model: "gemini-1.5-pro" })
      .generateContent(prompt);

    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export default handler;
