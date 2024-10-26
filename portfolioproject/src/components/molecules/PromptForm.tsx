import { useState } from "react";

import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import Button from "../atoms/Button";
import GenericModal from "./GenericModal";
import WordTextEffect from "../library/WordTextEffect";
import { ChevronDown, ChevronUp, Gift, Trash2 } from "lucide-react";

const PromptForm = () => {
  const [messages, setMessages] = useState<
    { text: string; type: "user" | "api" }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxWords, setMaxWords] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [conversationInput, setConversationInput] = useState("");

  const toggleForm = () => setIsOpen((prev) => !prev);

  const handleSubmit = async (type: "prompt" | "conversation") => {
    setLoading(true);
    const userMessage = type === "prompt" ? prompt : conversationInput;

    setMessages((prev) => [...prev, { text: userMessage, type: "user" }]);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `${userMessage} (${maxWords} words)` }),
      });

      if (!res.ok) throw new Error("Errore nella richiesta");

      const data = await res.json();
      const apiResponse = data.output || "Nessuna risposta ricevuta.";
      setMessages((prev) => [...prev, { text: apiResponse, type: "api" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "C'è stato un errore con l'API.", type: "api" },
      ]);
    } finally {
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      type === "prompt" ? setPrompt("") : setConversationInput(""); // Reset accordingly
    }
  };

  const ClearAll = () => {
    setMessages([]);
    setPrompt("");
    setMaxWords(10);
    setConversationInput("");
    setLoading(false);
    setIsOpen(false);
    toggleForm();
  };

  return (
    <div className="relative flex flex-col justify-center items-center z-39">
      <div className="sm:sticky sm:r-2 sm:t-2 sm:ml-[1120px]  z-39 sm:border-3">
        <Button
          text="Assistente Gemini"
          onClick={toggleForm}
          color="var(--color-green)" // Colore verde
          hoverColor="var(--color-green-dark)" // Verde più scuro
          disabled={false}
          loading={false}
          icon={<Gift color={"black"} size={45} />}
        />
      </div>

      <GenericModal isOpen={isOpen} onClose={toggleForm}>
        <h2 className="text-2xl text-green-500 font-bold text-center mb-4">
          Assistente Gemini
        </h2>
        <div className="flex flex-row justify-around items-center text-center p-2 border border-black">
          <Button
            text="Pulisci"
            color="var(--color-red)" // Rosso
            hoverColor="var(--color-red-dark)" // Rosso scuro
            loading={false}
            disabled={false}
            onClick={ClearAll}
            icon={<Trash2 color={"black"} size={15} />}
          />
          <Button
            onClick={() => handleSubmit("prompt")}
            text="Risposta"
            color="var(--color-green)" // Verde
            hoverColor="var(--color-green-dark)" // Verde più scuro
            disabled={loading || !prompt}
            loading={loading}
            icon={<ChevronDown color={"red"} size={15} />}
          />
          <Button
            onClick={() => handleSubmit("conversation")}
            text="Invia"
            color="var(--color-blue-light)" // Blu chiaro
            hoverColor="var(--color-blue-dark)" // Blu scuro
            disabled={loading || !conversationInput}
            loading={loading}
            icon={<ChevronUp color={"red"} size={15} />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-black p-2">
          <motion.div
            className="space-y-4 flex flex-col h-full w-full"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border border-gray-900 rounded-lg flex flex-col p-4 bg-gray-200 h-full w-full">
              <label
                htmlFor="prompt"
                className="block text-sm mb-4 ml-2 mt-2 font-bold"
              >
                Inserisci Prompt:
              </label>
              <input
                id="prompt"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-1 block w-full border border-gray-900 rounded-md sm:text-sm text-gray-900 px-3 py-5"
                required
              />
            </div>
            <div className="border border-gray-900 rounded-lg flex flex-col p-4 bg-gray-200 h-full w-full">
              <label
                htmlFor="maxWords"
                className="block text-sm mb-4 ml-2 mt-2 font-bold"
              >
                Numero massimo di parole:
              </label>
              <input
                id="maxWords"
                type="number"
                value={maxWords}
                onChange={(e) => setMaxWords(Number(e.target.value))}
                min={1}
                className="mt-1 block w-full border border-gray-900 rounded-md sm:text-sm text-gray-900 p-3"
                required
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-4 h-full w-full"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border border-gray-900 rounded-lg p-4 bg-gray-200 flex flex-col w-full h-[400px]">
              <h3 className="text-lg font-medium">Conversazione:</h3>
              <div className="flex flex-col-reverse h-full w-full overflow-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mt-2 flex items-center ${
                      msg.type === "user" ? "bg-blue-300" : "bg-green-300"
                    }`}
                  >
                    <span
                      className={`icon ${
                        msg.type === "user" ? "icon-user" : "icon-bot"
                      }`}
                    ></span>
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
                onChange={(e) => setConversationInput(e.target.value)}
                className="mt-1 block w-full border border-gray-900 rounded-md sm:text-sm text-gray-900 px-3 py-5"
                placeholder="Scrivi qui..."
              />
            </div>
          </motion.div>
        </div>
      </GenericModal>
    </div>
  );
};

export default PromptForm;
