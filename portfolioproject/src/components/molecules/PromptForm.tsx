import { useState, useRef, useEffect } from "react"; // Aggiunto useRef e useEffect
import Button from "../atoms/Button";
import GenericModal from "./GenericModal";
import WordTextEffect from "../library/WordTextEffect";
import { ChevronDown, StarIcon, Trash2Icon, User } from "lucide-react";

type MessageType = "user" | "api";

interface Message {
  text: string;
  type: MessageType;
}

const PromptForm = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [maxWords, setMaxWords] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  // Riferimento per l'ultimo messaggio
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => setIsOpen((prev) => !prev);

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

  // Effetto per scrollare all'ultimo messaggio
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col z-41 ">
      <Button
        text="Gemini"
        onClick={toggleForm}
        icon={<StarIcon color="yellow" size={25} />}
        link="/Gemini"
      />

      <GenericModal
        isOpen={isOpen}
        onClose={toggleForm}
        title="Gemini assistant"
      >
        {/* Modificato per overflow-y e larghezza fissa */}
        <div>
          <div>
            {messages.map((msg, index) => (
              <div
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : null}
                className="flex flex-col max-h-[200px] overflow-auto"
              >
                <div
                  className={`flex items-start mb-3 ${
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
                    }`}
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
                text="Pulisci"
                color="var(--color-red)"
                hoverColor="var(--color-red-dark)"
                onClick={clearAll}
                icon={<Trash2Icon color={"black"} size={20} />}
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
          </div>
        </div>
      </GenericModal>
    </div>
  );
};

export default PromptForm;
