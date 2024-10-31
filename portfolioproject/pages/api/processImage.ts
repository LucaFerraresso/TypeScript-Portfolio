import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  output?: string;
  error?: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    console.warn("Method Not Allowed, use POST");
    return res.status(405).json({ error: "Method Not Allowed, use POST" });
  }

  const { prompt, image } = req.body;
  console.log({ prompt, image });
  if (typeof prompt !== "string" || typeof image !== "string") {
    console.warn("Invalid input: Prompt and image must be strings");
    return res.status(400).json({ error: "Prompt and image must be strings" });
  }

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
  if (!apiKey) {
    console.error("API Key is missing.");
    return res
      .status(500)
      .json({ error: "Internal Server Error: API Key is missing." });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(prompt);

    if (
      result.response &&
      Array.isArray(result.response.candidates) &&
      result.response.candidates.length > 0
    ) {
      const output = result.response.candidates[0].content.parts[0].text;
      return res.status(200).json({ output });
    } else {
      console.warn("No valid response from Gemini API");
      return res
        .status(500)
        .json({ error: "No valid response from Gemini API" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
