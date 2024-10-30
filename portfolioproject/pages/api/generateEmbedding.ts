import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Use POST" });

    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "embedding-001" });
    const embedding = await model.embedContent(text);
    console.log(embedding);

    return res.status(200).json({ embedding });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export default handler;
