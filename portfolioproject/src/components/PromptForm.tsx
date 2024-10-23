import { useState, useEffect } from "react";
import Skeleton from "./Skeleton"; // Assicurati di importare il tuo componente Skeleton
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation"; // Assicurati di avere i tuoi varianti di animazione
import Button from "./Button";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const PromptForm = () => {
  const [response, setResponse] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxWords, setMaxWords] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Stato per gestire l'apertura del form

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Caricamento per 3 secondi
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: `${prompt} (${maxWords} words)` }),
      });

      if (!res.ok) {
        throw new Error("Errore nella richiesta");
      }

      const data = await res.json();
      setResponse(data.output.split(" ")); // Spezza la risposta in parole
    } catch (error) {
      console.error("Error:", error);
      setResponse(["There was an error with the API."]);
    } finally {
      setLoading(false);
    }
  };

  const handleReload = () => {
    setIsExiting(true); // Inizia l'uscita

    setTimeout(() => {
      setPrompt("");
      setResponse([]);
      setMaxWords(0);
      setLoading(false); // Resetta il loading
      setIsExiting(false); // Inizia l'entrata
    }, 1000); // Regola questo valore in base alla tua animazione

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Mantieni il loading per un certo periodo
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response.join(" "));
    alert("Testo copiato negli appunti!");
  };

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen && e.target === e.currentTarget) {
      toggleForm();
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center z-50">
      <div className="absolute left-4 z-10">
        <Button
          text="Assistente Gemini"
          color="bg-blue-500"
          hoverColor="hover:bg-blue-600"
          onClick={toggleForm}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 p-80 flex flex-col justify-center items-center"
          onClick={handleOutsideClick}
        >
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-md mx-auto p-6 border border-gray-900 rounded-lg shadow-lg text-gray-900 bg-gray-300 mt-2 flex flex-col justify-center items-center"
          >
            {isLoading ? (
              <Skeleton width="100%" height="300px" className="mb-4" />
            ) : (
              <motion.div
                className="space-y-4 "
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-2xl text-green-500 font-bold text-center mb-4">
                  Assistente Gemini: chiedi quello che ti serve
                </h2>
                <div className="border border-gray-900 rounded-lg flex flex-col p-4 bg-gray-200">
                  <label
                    htmlFor="prompt"
                    className="block text-sm mb-4 ml-2 mt-2 font-bold"
                  >
                    Inserisci Prompt:
                  </label>
                  <input
                    id="prompt"
                    name="prompt"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="mt-1 block w-full border border-gray-900 rounded-md sm:text-sm text-gray-900 px-3 py-5"
                    required
                  />
                </div>
                <div className="border border-gray-900 rounded-lg flex flex-col p-4 bg-gray-200">
                  <label
                    htmlFor="maxWords"
                    className="block text-sm mb-4 ml-2 mt-2 font-bold"
                  >
                    Inserisci numero massimo di parole nella risposta:
                  </label>
                  <input
                    id="maxWords"
                    name="maxWords"
                    type="number"
                    value={maxWords}
                    onChange={(e) => setMaxWords(Number(e.target.value))}
                    min={1}
                    className="mt-1 block w-full border border-gray-900 rounded-md sm:text-sm text-gray-900 p-3"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    text="Risposta"
                    color="bg-blue-300"
                    hoverColor="hover:bg-blue-400"
                    disabled={loading}
                    loading={loading}
                    onClick={handleSubmit}
                  />
                  <Button
                    onClick={handleReload}
                    text="Ricarica"
                    color="bg-red-500"
                    hoverColor="hover:bg-red-600"
                    disabled={loading}
                    loading={loading}
                  />
                </div>
              </motion.div>
            )}

            {response.length > 0 && (
              <div className="mt-6 border border-gray-900 text-gray-900 p-4 rounded-md bg-gray-200">
                <h3 className="text-lg font-medium">Risposta API:</h3>
                <div className="mt-2 flex flex-wrap">
                  {response.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={fadeInVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="mr-1"
                    >
                      {word === " " ? <br /> : word}
                    </motion.span>
                  ))}
                </div>
                <Button
                  onClick={handleCopy}
                  text="Copia"
                  color="bg-blue-500"
                  hoverColor="hover:bg-blue-600"
                  disabled={loading}
                  loading={loading}
                />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PromptForm;
