import { useState } from "react";
import projects from "@/assets/DataArray/ProjectSectionArray";

const PromptForm = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const projectDetails = projects.find(
      (project) => project.title === selectedProject
    );

    const newPrompt = `Genera una descrizione dettagliata e comporensibile di 50 parole per il progetto ${
      projectDetails?.title
    }, 
    visitando il link: ${projectDetails?.vercelLink} e repository GitHub: ${
      projectDetails?.githubLink
    } puoi farti un'idea della complessita', inotre, enfatizza le Tecnologie utilizzate: ${projectDetails?.technologies.join(
      ", "
    )},spiegando il loro funzionamento e scopo. c'e gia' anche una piccola descrizione : 
    Descrizione: ${
      projectDetails?.description
    },voglio che me ne generi una piu' tecnica e specifica.`;

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: newPrompt }),
      });

      if (!res.ok) {
        throw new Error("Errore nella richiesta");
      }

      const data = await res.json();
      setResponse(data.output);
      console.log(newPrompt);
      console.log(data.output);
    } catch (error) {
      console.error("Error:", error);
      setResponse("There was an error with the API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-semibold text-center mb-4">
        Genera Descrizione Progetto
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="project"
            className="block text-sm font-medium text-gray-700"
          >
            Seleziona un Progetto
          </label>
          <select
            id="project"
            name="project"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="" disabled>
              Seleziona un progetto
            </option>
            {projects.map((project) => (
              <option key={project.title} value={project.title}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="prompt"
            className="block text-sm font-medium text-gray-700"
          >
            Prompt (opzionale)
          </label>
          <input
            id="prompt"
            name="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>

      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Risposta API:</h3>
          <p className="mt-2 text-gray-600">{response}</p>
        </div>
      )}
    </div>
  );
};

export default PromptForm;
