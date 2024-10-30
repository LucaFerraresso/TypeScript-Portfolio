"use client";
import Button from "@/src/components/atoms/Button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ResponseData {
  [key: string]: unknown; // Use unknown for better type safety
}

const GeminiTestPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responses, setResponses] = useState<ResponseData>({});
  const [inputValues, setInputValues] = useState({
    prompt: "",
    image: "",
    text: "",
    functions: "",
    trainingData: "",
    schema: "",
    moderateContent: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const makeApiRequest = async (url: string, data: unknown, key: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Errore nella risposta della rete.");
      const result: ResponseData = await res.json();
      setResponses((prev) => ({ ...prev, [key]: result }));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setResponses({});
    setInputValues({
      prompt: "",
      image: "",
      text: "",
      functions: "",
      trainingData: "",
      schema: "",
      moderateContent: "",
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Button
        onClick={() => resetAll()}
        text={loading ? "loading..." : "Reset"}
        color="var(--color-green)"
        hoverColor="var(--color-green-dark)"
        icon={<ChevronDown color={"black"} size={24} />}
        loading={loading}
        disabled={loading}
      />

      <div className="flex flex-wrap justify-center gap-6">
        {/* Process Image */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Process Image</h2>
          <p className="mb-4 text-gray-600">
            This method allows you to process an image with a given prompt.
          </p>
          <input
            name="prompt"
            value={inputValues.prompt}
            onChange={handleChange}
            placeholder="Prompt"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            name="image"
            value={inputValues.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/processImage",
                { prompt: inputValues.prompt, image: inputValues.image },
                "processImage"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.processImage && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Response:</h3>
                <p>{(responses.processImage as { output: string }).output}</p>
              </div>
            )}
          </>
        </section>

        {/* List Models */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">List Models</h2>
          <p className="mb-4 text-gray-600">
            Use this method to retrieve a list of available models.
          </p>
          <Button
            onClick={() => makeApiRequest("/api/listModels", {}, "listModels")}
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.listModels && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Available Models:</h3>
                <ul className="list-disc ml-4">
                  {(responses.listModels as string[]).map((model, index) => (
                    <li key={index}>{model}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        </section>

        {/* Call Function */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Call Function</h2>
          <p className="mb-4 text-gray-600">
            This method allows you to execute a function based on the provided
            prompt.
          </p>
          <input
            name="prompt"
            value={inputValues.prompt}
            onChange={handleChange}
            placeholder="Prompt"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="functions"
            value={inputValues.functions}
            onChange={handleChange}
            placeholder="Functions (JSON format)"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/callFunction",
                {
                  prompt: inputValues.prompt,
                  functions: inputValues.functions,
                },
                "callFunction"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.callFunction && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Response:</h3>
                <p>{JSON.stringify(responses.callFunction)}</p>
              </div>
            )}
          </>
        </section>

        {/* Fine Tune Model */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Fine Tune Model</h2>
          <p className="mb-4 text-gray-600">
            Use this method to fine-tune a model based on your provided training
            data.
          </p>
          <textarea
            name="trainingData"
            value={inputValues.trainingData}
            onChange={handleChange}
            placeholder="Training Data"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/fineTuneMode",
                { trainingData: inputValues.trainingData },
                "fineTuneModel"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.fineTuneModel && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Response:</h3>
                <p>
                  {(responses.fineTuneModel as { message: string }).message}
                </p>
              </div>
            )}
          </>
        </section>

        {/* Generate Embedding */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Generate Embedding</h2>
          <p className="mb-4 text-gray-600">
            This method generates an embedding for a given text input.
          </p>
          <input
            name="text"
            value={inputValues.text}
            onChange={handleChange}
            placeholder="Text to Embed"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/generateEmbedding",
                { text: inputValues.text },
                "generateEmbedding"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.generateEmbedding && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Embedding:</h3>
                <p>
                  {JSON.stringify(
                    (responses.generateEmbedding as { embedding: unknown })
                      .embedding
                  )}
                </p>
              </div>
            )}
          </>
        </section>

        {/* Generate Structured Data */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">
            Generate Structured Data
          </h2>
          <p className="mb-4 text-gray-600">
            This method generates structured data based on a provided schema.
          </p>
          <input
            name="prompt"
            value={inputValues.prompt}
            onChange={handleChange}
            placeholder="Prompt"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="schema"
            value={inputValues.schema}
            onChange={handleChange}
            placeholder="Schema"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/generateStructuredData",
                { prompt: inputValues.prompt, schema: inputValues.schema },
                "generateStructuredData"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.generateStructuredData && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Structured Data:</h3>
                <p>{JSON.stringify(responses.generateStructuredData)}</p>
              </div>
            )}
          </>
        </section>

        {/* Moderate Content */}
        <section className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Moderate Content</h2>
          <p className="mb-4 text-gray-600">
            This method moderates content based on a provided prompt.
          </p>
          <textarea
            name="moderateContent"
            value={inputValues.moderateContent}
            onChange={handleChange}
            placeholder="Prompt to Moderate"
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            onClick={() =>
              makeApiRequest(
                "/api/moderateContent",
                { prompt: inputValues.moderateContent },
                "moderateContent"
              )
            }
            text={loading ? "loading..." : "Invia"}
            color="var(--color-green)"
            hoverColor="var(--color-green-dark)"
            icon={<ChevronDown color={"black"} size={24} />}
            loading={loading}
            disabled={loading}
          />
          <>
            {responses.moderateContent && (
              <div className="mt-4 p-4 bg-gray-50 border rounded shadow h-32 overflow-auto">
                <h3 className="font-semibold">Moderation Result:</h3>
                <p>
                  {JSON.stringify(
                    (responses.moderateContent as { result: unknown }).result
                  )}
                </p>
              </div>
            )}
          </>
        </section>

        {/* Error Display */}
        <div className="mb-6 p-4 bg-white rounded shadow w-full max-w-xs">
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default GeminiTestPage;
