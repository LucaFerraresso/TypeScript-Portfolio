import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Verifica se il metodo è POST
    if (req.method !== "POST") {
      console.log("Metodo non supportato:", req.method);
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
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    //modello
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    //generationConfig
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    //configurazione attiva
    model.generationConfig = generationConfig;
    // Richiedi la generazione del contenuto
    const result = await model.generateContent(prompt);
    if (!result) {
      throw new Error("Nessun risultato generato.");
    }
    const output = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Output:", output);
    if (!output) {
      throw new Error("Nessun output generato.");
    }
    return res.status(200).json({ output });
  } catch (error) {
    return res.status(500).json({ error: error || "Errore interno." });
  }
}
export default handler;
