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
    console.log("Prompt ricevuto:", prompt);
    // Verifica che il prompt sia presente
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    console.log("Chiave API:", apiKey);
    if (!apiKey) {
      console.error("Chiave API mancante.");
      throw new Error("Chiave API mancante.");
    }

    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    console.log("Inizializzato GoogleGenerativeAI");
    //modello
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log("Modello:", model);
    //request option
    const requestOptions = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
    console.log("Opzioni di richiesta:", requestOptions);
    //generationConfig
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
    console.log("Configurazione generazione:", generationConfig);
    //safetySettings
    const safetySettings = [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_NONE",
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_NONE",
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_NONE",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_NONE",
      },
    ];
    console.log("Impostazioni sicurezza:", safetySettings);
    model.generationConfig = generationConfig;

    //tools
    const tools = [
      {
        functionDeclarations: [
          {
            name: "get_current_weather",
            description: "Get the current weather",
            parameters: {
              type: "object",
              properties: {
                location: {
                  type: "string",
                  description: "The city and state, e.g. San Francisco, CA",
                },
                unit: { type: "string", enum: ["celsius", "fahrenheit"] },
              },
              required: ["location"],
            },
          },
        ],
      },
    ];
    console.log("Tools:", tools);
    //toolConfig
    const toolConfig = {
      functionCallingConfig: {
        mode: "ANY",
        allowedFunctionNames: ["get_current_weather"],
      },
    };
    //system instruction
    const systemInstruction = {
      role: "system",
      parts: [
        {
          text: "You are a helpful assistant. You will be given a task. You will respond with the appropriate response.",
        },
      ],
    };
    console.log("Istruzione di sistema:", systemInstruction);
    //user instruction
    const userInstruction = {
      role: "user",
      parts: [{ text: prompt }],
    };
    console.log("Istruzione utente:", userInstruction);
    //messages
    const messages = [systemInstruction, userInstruction];
    console.log("Messaggi:", messages);
    //Cached content
    const cachedContent = {
      role: "model",
      parts: [{ text: "Cached content" }],
    };
    console.log("Contenuto in cache:", cachedContent);

    //output
    // Richiedi la generazione del contenuto
    const result = await model.generateContent(prompt);
    console.log("Risultato API:", result);
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
    console.error("Errore API:", error);
    return res.status(500).json({ error: error || "Errore interno." });
  }
}
export default handler;
