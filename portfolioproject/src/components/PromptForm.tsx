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

    // Crea il prompt utilizzando il progetto selezionato
    const projectDetails = projects.find(
      (project) => project.title === selectedProject
    );
    const newPrompt = `Genera una descrizione di 50 parole per il progetto ${projectDetails?.title}, 
    disponibile al link: ${projectDetails?.vercelLink} e repository GitHub: ${projectDetails?.githubLink}.`;

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
    } catch (error) {
      console.error("Error:", error);
      setResponse("There was an error with the API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
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
              Select a project
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
          <h3 className="text-lg font-medium text-gray-900">API Response:</h3>
          <p className="mt-2 text-gray-600">{response}</p>
        </div>
      )}
    </div>
  );
};

export default PromptForm;
