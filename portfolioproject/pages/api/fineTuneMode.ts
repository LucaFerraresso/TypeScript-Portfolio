import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Use POST" });

    const { trainingData } = req.body;
    if (!trainingData)
      return res.status(400).json({ error: "Training data is required" });

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }
    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const trainingDataArray = Array.isArray(trainingData)
      ? trainingData
      : [trainingData];
    const trainingDataString = trainingDataArray.join("\n");
    const prompt = `Fine-tune the model with the following data:\n${trainingDataString}`;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
    if (text.includes("Error")) {
      return res.status(500).json({ error: text });
    }
    if (text.includes("Invalid")) {
      return res.status(500).json({ error: text });
    }

    return res.status(200).json({ message: "Model fine-tuned successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export default handler;
