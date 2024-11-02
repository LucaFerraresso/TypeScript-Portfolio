"use client";
import { useState, useRef, useEffect } from "react";
import Button from "@/src/components/atoms/Button"; // Assicurati che il componente Button esista
import { HomeIcon, User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation";
import Link from "next/link";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";

interface Message {
  text: string;
  type: "user" | "api";
}

const GeminiTestPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const makeApiRequest = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { text: userMessage, type: "user" }]);
    setInputValue("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      if (!res.ok) throw new Error("Errore nella risposta della rete.");
      const result = await res.json();
      setMessages((prev) => [
        ...prev,
        { text: result.response || "Nessuna risposta ricevuta.", type: "api" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: "C'è stato un errore con l'API.", type: "api" },
      ]);
    } finally {
      setLoading(false);
    }
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
            Visualizza in modalità landscape per un esperienza migliore.
          </p>
          <div className="flex items-center text-center gap-2 mb-6">
            <HomeIcon color="black" size={24} />
            <Link
              href="/"
              className="text-black hover:underline  hover:font-bold hover:text-blue-600"
            >
              Home
            </Link>
          </div>
        </div>
      ) : (
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className=" bg-gray-50 relative"
        >
          <div>
            <div className="flex flex-col items-center p-4">
              <h1 className="text-3xl font-bold mb-4">Gemini Chat</h1>
              <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 max-h-[500px] w-full overflow-y-auto border border-gray-300 mb-4 h-[400px]">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-500 ">
                    <User size={24} color={"green"} textAnchor="bot" />
                    Inizia la chat!
                    <User size={24} color={"blue"} />
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      ref={
                        index === messages.length - 1 ? lastMessageRef : null
                      }
                      className={`flex mb-2 ${
                        msg.type === "user" ? "justify-end" : "justify-start"
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
                        className={`p-2 rounded-lg ${
                          msg.type === "user" ? "bg-blue-200" : "bg-green-200"
                        } max-w-[70%]`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))
                )}
                {loading && (
                  <div className="flex justify-start mb-2">
                    <span className="flex items-center text-green-600 mr-2">
                      <User size={24} color="green" />
                    </span>
                    <div className="p-2 rounded-lg bg-green-200 max-w-[70%]">
                      Loading...
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center w-full">
                <textarea
                  value={inputValue}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  placeholder="Scrivi qui..."
                  required
                />
                <Button
                  onClick={makeApiRequest}
                  text={loading ? "Loading..." : "Invia"}
                  color="var(--color-green)"
                  hoverColor="var(--color-green-dark)"
                  loading={loading}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
          <SectionSeparator />
          <div className="flex flex-col justify-center items-center p-2">
            <h2 className="text-3xl font-bold mt-6 mb-6">Link Utili</h2>
            <div className="flex items-center text-center gap-2 mb-6 p-6">
              <HomeIcon color="black" size={24} />
              <Link
                href="/"
                className="text-black hover:underline  hover:font-bold hover:text-blue-600"
              >
                Home
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GeminiTestPage;
