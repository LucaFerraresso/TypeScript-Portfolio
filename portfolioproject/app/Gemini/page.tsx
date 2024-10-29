"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, HomeIcon, StarIcon, User } from "lucide-react";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import Button from "@/src/components/atoms/Button";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const [language, setLanguage] = useState("it"); // Default language
  const [tone, setTone] = useState("neutral"); // Default tone
  const [experience, setExperience] = useState("basic"); // Default experience

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
        body: JSON.stringify({
          prompt: `${userMessage} (${maxWords} words)`,
          language,
          tone,
          experience,
        }),
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set threshold for mobile
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Check initial width
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="fixed inset-0 flex flex-col p-6 items-center justify-center bg-yellow-200 z-50">
          <p className="text-lg text-center p-4">
            Visualizza in modalità landscape per un'esperienza migliore.
          </p>
          <div className="flex items-center text-center gap-2 mb-6">
            <HomeIcon color="black" size={24} />
            <Link
              href="/"
              className="text-blue-600 hover:underline  hover:font-bold"
            >
              Home
            </Link>
          </div>
        </div>
      ) : (
        <motion.div className="flex flex-col justify-center items-center text-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-4 min-h-screen bg-gray-50"
          >
            {/* Sidebar */}
            <div className="flex flex-col items-start p-4 bg-white shadow-md border-r border-gray-300 h-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Gemini Assistant
              </h1>
              <Button
                text="Nuova Chat"
                color="var(--color-yellow)"
                hoverColor="var(--color-orange-dark)"
                onClick={clearAll}
                icon={<StarIcon color={"black"} size={24} />}
              />
              <Button
                text="Lingua"
                color="var(--color-accent)"
                hoverColor="var(--color-accent-dark)"
                onClick={() => setLanguage(language === "it" ? "en" : "it")}
              />
              <Button
                text="Tono"
                color="var(--color-accent)"
                hoverColor="var(--color-accent-dark)"
                onClick={() =>
                  setTone(tone === "neutral" ? "friendly" : "neutral")
                }
              />
              <Button
                text="Esperienza"
                color="var(--color-accent)"
                hoverColor="var(--color-accent-dark)"
                onClick={() =>
                  setExperience(experience === "basic" ? "advanced" : "basic")
                }
              />
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
              <div className="flex justify-between mt-5 w-full">
                <Button
                  onClick={handleSubmit}
                  text={loading ? "Caricamento..." : "Invia"}
                  color="var(--color-green)"
                  hoverColor="var(--color-green-dark)"
                  icon={<ChevronDown color={"black"} size={24} />}
                  loading={loading}
                />
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex flex-col justify-center items-center p-4 col-span-3">
              <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 max-h-[300px] overflow-y-auto border border-gray-300 w-full">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Inizia la chat!
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div key={index}>
                      <div
                        ref={
                          index === messages.length - 1 ? lastMessageRef : null
                        }
                        className={`flex  mb-3 ${
                          msg.type === "user"
                            ? "justify-end text-start"
                            : "justify-start text-start"
                        }`}
                      >
                        <span
                          className={`flex items-center ${
                            msg.type === "user"
                              ? "text-blue-600"
                              : "text-green-600"
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
                  ))
                )}
              </div>
              <div className="flex flex-col w-full max-w-md mt-4">
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gemini;
