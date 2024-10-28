import { useState, useMemo } from "react";
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

  const isSubmitDisabled = useMemo(
    () => loading || !inputValue,
    [loading, inputValue]
  );

  return (
    <div className="flex flex-col justify-center items-center z-41">
      <Button
        text="Gemini"
        onClick={toggleForm}
        icon={<StarIcon color="yellow" size={25} />}
      />

      <GenericModal isOpen={isOpen} onClose={toggleForm}>
        <div className="flex flex-col bg-white rounded-lg w-full max-w-md md:max-w-2xl lg:max-w-2xl h-[500px]">
          <h2 className="text-3xl text-green-500 font-bold mb-4">
            Assistente Gemini
          </h2>

          <div className="flex-1 overflow-y-auto h-64 p-4 border border-gray-300 rounded-lg">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-2 ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`flex items-center ${
                    msg.type === "user" ? "text-blue-500" : "text-green-500"
                  } mr-2`}
                >
                  {msg.type === "user" ? (
                    <User size={20} color="blue" />
                  ) : (
                    <User size={20} color="green" />
                  )}
                </span>
                <div
                  className={`p-2 rounded-lg ${
                    msg.type === "user" ? "bg-blue-300" : "bg-green-300"
                  }`}
                >
                  {msg.type === "api" ? (
                    <WordTextEffect text={msg.text} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label
              htmlFor="inputMessage"
              className="block text-sm mb-2 font-bold"
            >
              Messaggio:
            </label>
            <textarea
              id="inputMessage"
              value={inputValue}
              onChange={handleInputChange}
              className="block w-full border border-gray-900 rounded-md px-3 py-2 h-24 resize-none"
              placeholder="Scrivi qui..."
              required
            />

            <label
              htmlFor="maxWords"
              className="block text-sm mb-2 font-bold mt-4"
            >
              Max parole:
            </label>
            <select
              id="maxWords"
              value={maxWords}
              onChange={(e) => setMaxWords(Number(e.target.value))}
              className="block w-full border border-gray-900 rounded-md px-3 py-2"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={200}>200</option>
            </select>

            <div className="flex justify-between mt-4">
              <Button
                text="Pulisci"
                color="var(--color-red)"
                hoverColor="var(--color-red-dark)"
                onClick={clearAll}
                icon={<Trash2Icon color={"black"} size={20} />}
              />
              <Button
                onClick={handleSubmit}
                text="Invia"
                color="var(--color-green)"
                hoverColor="var(--color-green-dark)"
                disabled={isSubmitDisabled}
                loading={loading}
                icon={<ChevronDown color={"black"} size={20} />}
              />
            </div>
          </div>
        </div>
      </GenericModal>
    </div>
  );
};

export default PromptForm;
