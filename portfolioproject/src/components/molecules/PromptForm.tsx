import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import Button from "../atoms/Button";
import GenericModal from "./GenericModal";
import WordTextEffect from "../library/WordTextEffect";
import {
  ChevronDown,
  ChevronUp,
  MessageCircleMoreIcon,
  Trash2,
} from "lucide-react";

type MessageType = "user" | "api";

interface Message {
  text: string;
  type: MessageType;
}

const PromptForm = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxWords, setMaxWords] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [conversationInput, setConversationInput] = useState("");
  const [isPromptMode, setIsPromptMode] = useState(true);

  const toggleForm = () => setIsOpen((prev) => !prev);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = async () => {
    setLoading(true);
    const userMessage = isPromptMode ? prompt : conversationInput;

    // Aggiornare lo stato dei messaggi
    setMessages((prev) => [...prev, { text: userMessage, type: "user" }]);

    try {
      // Creare un buffer dalla stringa del messaggio
      const userMessageBuffer = Buffer.from(
        `${userMessage} (${maxWords} words)`,
        "utf-8"
      );

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessageBuffer.toString("utf-8") }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");

      const { output = "Nessuna risposta ricevuta." } = await res.json();
      setMessages((prev) => [...prev, { text: output, type: "api" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "C'è stato un errore con l'API.", type: "api" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setMessages([]);
    setPrompt("");
    setMaxWords(10);
    setConversationInput("");
  };

  return (
    <div className="flex flex-col justify-center items-center z-41">
      <Button
        text="Gemini AI"
        onClick={toggleForm}
        color="var(--color-green)"
        hoverColor="var(--color-green-dark)"
        icon={<MessageCircleMoreIcon color={"black"} size={25} />}
      />

      <GenericModal isOpen={isOpen} onClose={toggleForm}>
        <h2 className="text-3xl text-green-500 font-bold text-center mb-6">
          Assistente Gemini
        </h2>
        <div className="flex justify-around items-center text-center p-2 border border-gray-300 rounded-lg mb-4">
          <Button
            text="Pulisci"
            color="var(--color-red)"
            hoverColor="var(--color-red-dark)"
            onClick={clearAll}
            icon={<Trash2 color={"black"} size={15} />}
          />
          <Button
            onClick={() => {
              handleSubmit();
              setIsPromptMode(!isPromptMode);
            }}
            text={isPromptMode ? "Risposta" : "Invia"}
            color={
              isPromptMode ? "var(--color-green)" : "var(--color-blue-light)"
            }
            hoverColor={
              isPromptMode
                ? "var(--color-green-dark)"
                : "var(--color-blue-dark)"
            }
            disabled={loading || (isPromptMode ? !prompt : !conversationInput)}
            loading={loading}
            icon={
              isPromptMode ? (
                <ChevronDown color={"red"} size={15} />
              ) : (
                <ChevronUp color={"red"} size={15} />
              )
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <motion.div
            className="flex flex-col space-y-4"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border border-gray-900 rounded-lg p-4 bg-gray-100">
              <label htmlFor="prompt" className="block text-sm mb-2 font-bold">
                Inserisci Prompt:
              </label>
              <input
                id="prompt"
                type="text"
                value={prompt}
                onChange={handleInputChange(setPrompt)}
                className="mt-1 block w-full border border-gray-900 rounded-md px-3 py-2"
                required
                disabled={!isPromptMode}
              />
            </div>
            <div className="border border-gray-900 rounded-lg p-4 bg-gray-100">
              <label
                htmlFor="maxWords"
                className="block text-sm mb-2 font-bold"
              >
                Numero massimo di parole:
              </label>
              <input
                id="maxWords"
                type="number"
                value={maxWords}
                onChange={(e) =>
                  setMaxWords(Math.max(Number(e.target.value), 1))
                }
                min={1}
                className="mt-1 block w-full border border-gray-900 rounded-md px-3 py-2"
                required
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border border-gray-900 rounded-lg p-4 bg-gray-100 flex flex-col h-[400px]">
              <h3 className="text-lg font-medium">Conversazione:</h3>
              <div className="flex flex-col-reverse h-full w-full overflow-auto bg-gray-50 p-2 rounded-md">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mt-2 p-2 rounded-md ${
                      msg.type === "user" ? "bg-blue-300" : "bg-green-300"
                    }`}
                  >
                    <strong>{msg.type === "user" ? "Tu: " : "Gemini: "}</strong>
                    {loading && index === messages.length - 1 ? (
                      <div>{prompt}</div>
                    ) : msg.type === "api" ? (
                      <WordTextEffect text={msg.text} />
                    ) : (
                      msg.text
                    )}
                  </div>
                ))}
              </div>
              <label
                htmlFor="conversationInput"
                className="block text-sm mt-4 font-bold"
              >
                Continua la conversazione:
              </label>
              <input
                id="conversationInput"
                type="text"
                value={conversationInput}
                onChange={handleInputChange(setConversationInput)}
                className="mt-1 block w-full border border-gray-900 rounded-md px-3 py-2"
                placeholder="Scrivi qui..."
                disabled={isPromptMode}
              />
            </div>
          </motion.div>
        </div>
      </GenericModal>
    </div>
  );
};

export default PromptForm;
