"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, HomeIcon, StarIcon, User } from "lucide-react";
import WordTextEffect from "@/src/components/library/WordTextEffect";
import Button from "@/src/components/atoms/Button";
import { fadeInVariants } from "@/animation/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionSeparator from "@/src/components/atoms/SectionSeparator";

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
  const [reset, setResetting] = useState(false);

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue) return;
    setLoading(true);
    const userMessage = inputValue.trim();

    setMessages((prev) => [...prev, { text: userMessage, type: "user" }]);
    setInputValue("");

    try {
      // Converti la stringa in un Buffer
      const prompt = `${userMessage}. Rispondi in ${language} con un tono ${tone}. Target: ${experience}. Limita la risposta a ${maxWords} parole. Assicurati di essere chiaro e conciso.`;

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
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
    setResetting(true);
    setTimeout(() => {
      setMessages([]);
      setInputValue("");
      setMaxWords(30);
      setLanguage("it");
      setTone("neutral");
      setExperience("basic");
      setResetting(false);
    }, 2000);
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
        <motion.div className="flex flex-col text-center">
          <div>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-4 min-h-screen bg-gray-50"
            >
              {/* Sidebar */}
              <div className="flex flex-col gap-4 items-start p-4 bg-white shadow-md border-r border-gray-300 h-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  Gemini Assistant
                </h1>
                <select
                  id="Lingue"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                >
                  <option value={"it"}>Italiano</option>
                  <option value={"en"}>Englese</option>
                  <option value={"es"}>Spagnolo</option>
                  <option value={"fr"}>Francese</option>
                  <option value={"re"}>Russo</option>
                  <option value={"bn"}>Bengalese</option>
                  <option value={"bg"}>Bulgaro</option>
                  <option value={"zh"}>Cinese</option>
                  <option value={"hr"}>Croato</option>
                  <option value={"cs"}>Ceco</option>
                  <option value={"da"}>Danese</option>
                  <option value={"nl"}>Olandese</option>
                  <option value={"et"}>Estone</option>
                  <option value={"fi"}>Finlandese</option>
                  <option value={"de"}>tedesco</option>
                  <option value={"el"}>Greco</option>
                  <option value={"iw"}>Ebraico</option>
                  <option value={"hi"}>Hindi</option>
                  <option value={"ja"}>Giapponese</option>
                  <option value={"id"}>Indonesiano</option>
                  <option value={"ko"}>Coreano</option>
                  <option value={"lv"}>Lettone</option>
                  <option value={"lt"}>Lituano</option>
                  <option value={"no"}>Norvegese</option>
                  <option value={"pl"}>Polacco</option>
                  <option value={"pt"}>Portoghese</option>
                  <option value={"ro"}>Rumeno</option>
                  <option value={"ru"}>Russo</option>
                  <option value={"sr"}>Serbo</option>
                  <option value={"sk"}>Slovacco</option>
                  <option value={"sl"}>Sloveno</option>
                  <option value={"sw"}>Swahili</option>
                  <option value={"sv"}>Svedese</option>
                  <option value={"th"}>Thailandese</option>
                  <option value={"tr"}>Turco</option>
                  <option value={"uk"}>Ucraino</option>
                  <option value={"vi"}>Vietnamita</option>
                </select>

                <select
                  id="tone"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                >
                  <option value={"friendly"}>Friendly</option>
                  <option value={"arrogant"}>Arrogant</option>
                  <option value={"shy"}>Shy</option>
                  <option value={"confident"}>Confident</option>
                  <option value={"professor"}>Professor</option>
                  <option value={"Accademy Professor"}>
                    Accademy Professor
                  </option>
                </select>
                <select
                  id="Experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                >
                  <option value={"Junior"}>Junior</option>
                  <option value={"Senior"}>Senior</option>
                  <option value={"Full stack developer"}>
                    Full stack developer
                  </option>
                  <option value={"Project manager"}>Project Manager</option>
                  <option value={"AWS Architect"}>AWS Architect</option>
                  <option value={"Cloud Architect"}>Cloud Architect</option>
                </select>
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
                  <option value={10}>30</option>
                  <option value={20}>50</option>
                  <option value={40}>100</option>
                  <option value={50}>150</option>
                  <option value={100}>200</option>
                  <option value={200}>250</option>
                </select>
                <Button
                  text="Nuova Chat"
                  color="var(--color-yellow)"
                  hoverColor="var(--color-orange-dark)"
                  onClick={clearAll}
                  icon={<StarIcon color={"black"} size={24} />}
                  loading={loading}
                  disabled={reset}
                />
              </div>

              {/* Chat Area */}
              <div className="flex flex-col pt-4 p-4 col-span-3">
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
                            index === messages.length - 1
                              ? lastMessageRef
                              : null
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
                <div className="flex items-center mt-5 w-full">
                  <textarea
                    id="inputMessage"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    placeholder="Scrivi qui..."
                    required
                  />
                  <div className="ml-2">
                    <Button
                      onClick={handleSubmit}
                      text={loading ? "loading..." : "Invia"}
                      color="var(--color-green)"
                      hoverColor="var(--color-green-dark)"
                      icon={<ChevronDown color={"black"} size={24} />}
                      loading={loading}
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
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

export default Gemini;
