import { useState, useEffect } from "react";
import Skeleton from "./Skeleton"; // Assicurati di importare il tuo componente Skeleton
import { motion } from "framer-motion";
import { fadeInVariants } from "@/animation/animation"; // Assicurati di avere i tuoi varianti di animazione

const PromptForm = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [maxWords, setMaxWords] = useState(50);
  const [isLoading, setIsLoading] = useState(true);

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
      setResponse(data.output);
    } catch (error) {
      console.error("Error:", error);
      setResponse("There was an error with the API.");
    } finally {
      setLoading(false);
    }
  };

  const handleReload = () => {
    setPrompt("");
    setResponse("");
    setMaxWords(50);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    alert("Testo copiato negli appunti!");
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center"
    >
      <div className="max-w-md mx-auto p-6 bg-gray-400 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-4">
          Assistente Gemini: chiedi quello che ti serve
        </h2>
        {isLoading ? (
          <Skeleton width="100%" height="300px" className="mb-4" />
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium">
                Prompt
              </label>
              <input
                id="prompt"
                name="prompt"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-1 block w-full border-white bg-transparent border rounded-md shadow-sm focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="maxWords" className="block text-sm font-medium">
                Numero massimo di parole
              </label>
              <input
                id="maxWords"
                name="maxWords"
                type="number"
                value={maxWords}
                onChange={(e) => setMaxWords(Number(e.target.value))}
                min={1}
                className="mt-1 block w-full border-white bg-transparent border rounded-md shadow-sm focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm text-gray-900"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white text-indigo-600 hover:bg-indigo-100"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
              >
                {loading ? (
                  <Skeleton width="80px" height="24px" className="rounded-md" />
                ) : (
                  "Risposta"
                )}
              </button>
              <button
                type="button"
                onClick={handleReload}
                className="inline-flex ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Ricarica
              </button>
            </div>
          </motion.form>
        )}

        {response && (
          <div className="mt-6 bg-white text-gray-900 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-medium">Risposta API:</h3>
            <p className="mt-2">{response}</p>
            <button
              onClick={handleCopy}
              className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-green-500 hover:bg-green-600 text-white"
            >
              Copia Risposta
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PromptForm;
