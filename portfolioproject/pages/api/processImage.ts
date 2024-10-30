import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed, use POST" });
    }

    const { prompt, image } = req.body;
    if (!prompt || !image) {
      return res.status(400).json({ error: "Prompt and image are required" });
    }

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      console.error("API Key is missing.");
      return res
        .status(500)
        .json({ error: "Internal Server Error: API Key is missing." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt, image);
    const output = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({ output });
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
