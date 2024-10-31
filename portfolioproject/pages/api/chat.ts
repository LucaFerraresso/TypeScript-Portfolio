import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

async function chat(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body || !req.body.message) {
    return res.status(400).json({ error: "Missing message" });
  }

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat();

  try {
    // Invia il messaggio dell'utente e ottieni la risposta
    const result = await chat.sendMessage(req.body.message);
    console.log(result);
    return res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await chat(req, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
