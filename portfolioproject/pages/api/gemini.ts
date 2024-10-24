import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Verifica se il metodo è POST
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ error: "Metodo non supportato. Usa POST." });
    }

    // Estrai il prompt dal corpo della richiesta
    const { prompt } = req.body;

    // Verifica che il prompt sia presente
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    console.log("Chiave API:", apiKey);
    if (!apiKey) {
      throw new Error("Chiave API mancante.");
    }

    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Richiedi la generazione del contenuto
    const result = await model.generateContent(prompt);
    console.log("Risultato API:", result);
    const output = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Output:", output);

    if (!output) {
      throw new Error("Nessun output generato.");
    }

    return res.status(200).json({ output });
  } catch (error) {
    console.error("Errore API:", error);
    return res.status(500).json({ error: error || "Errore interno." });
  }
}
