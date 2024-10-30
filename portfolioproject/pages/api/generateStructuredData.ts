import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Use POST" });

    const { prompt, schema } = req.body;
    if (!prompt || !schema)
      return res.status(400).json({ error: "Prompt and schema are required" });

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const structuredData = `
    ${prompt}
    ${schema}
    `;
    const result = await model.generateContent(structuredData);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export default handler;
