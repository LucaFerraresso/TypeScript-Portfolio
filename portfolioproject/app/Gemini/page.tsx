"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, StarIcon, User } from "lucide-react";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import Button from "@/src/components/atoms/Button";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";

type MessageType = "user" | "api";

interface Message {
  text: string;
  type: MessageType;
}

const Gemini = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [maxWords, setMaxWords] = useState(10);

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue) return;
    setLoading(true);
    const userMessage = inputValue;

    setMessages((prev) => [...prev, { text: userMessage, type: "user" }]);
    setInputValue("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `${userMessage} (${maxWords} words)` }),
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
    setInputValue("");
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center text-center pb-32 pt-32 p-6 sm:pb-28 sm:pt-28 sm:p-6 md:pb-24 mb:pt-24 md:p-6 lg:pb-20 lg:pt-20 lg:p-6 xl:pb-16 xl:pt-16 xl:p-6 2xl:pb-12 2xl:pt-12 2xl:p-6 bg-gray-50"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Gemini Assistant
      </h1>
      <div className="flex flex-col bg-white shadow-md rounded-lg p-4 max-h-[400px] overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index}>
            <div
              ref={index === messages.length - 1 ? lastMessageRef : null}
              className={`flex mb-3 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`flex items-center ${
                  msg.type === "user" ? "text-blue-600" : "text-green-600"
                } mr-2`}
              >
                <User
                  size={24}
                  color={msg.type === "user" ? "blue" : "green"}
                />
              </span>
              <div
                className={`p-3 rounded-lg transition-all duration-200 ease-in-out ${
                  msg.type === "user"
                    ? "bg-blue-200 hover:bg-blue-300"
                    : "bg-green-200 hover:bg-green-300"
                } max-w-[70%]`}
              >
                {msg.type === "api" ? (
                  <WordTextEffect text={msg.text} />
                ) : (
                  msg.text
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-4">
        <label
          htmlFor="maxWords"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Max parole:
        </label>
        <select
          id="maxWords"
          value={maxWords}
          onChange={(e) => setMaxWords(Number(e.target.value))}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>

        <label
          htmlFor="inputMessage"
          className="block text-sm font-semibold text-gray-700 mb-1 mt-4"
        >
          Messaggio:
        </label>
        <textarea
          id="inputMessage"
          value={inputValue}
          onChange={handleInputChange}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          placeholder="Scrivi qui..."
          required
        />
      </div>

      <div className="flex justify-between mt-5">
        <Button
          text="Nuova Chat"
          color="var(--color-yellow)"
          hoverColor="var(--color-orange-dark)"
          onClick={clearAll}
          icon={<StarIcon color={"black"} size={20} />}
        />
        <Button
          onClick={handleSubmit}
          text={loading ? "loading..." : "Invia"}
          color="var(--color-green)"
          hoverColor="var(--color-green-dark)"
          icon={<ChevronDown color={"black"} size={20} />}
          loading={loading}
        />
      </div>
    </motion.div>
  );
};

export default Gemini;
