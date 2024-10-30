"use client";
import { useState } from "react";
import Button from "../atoms/Button";

const GeminiImageForm = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modelList, setModelList] = useState<string[]>([]);

  // Function to handle image processing
  const handleSubmitImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/processImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, image }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setResponse(data.output);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle model listing
  const handleSubmitModels = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/listModels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }), // Adjust as needed, maybe send a specific prompt for model listing
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setModelList(data.split(",")); // Set the model list from the response
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Generative AI Form</h1>

      {/* Model List Form */}
      <form onSubmit={handleSubmitModels} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label>
            Prompt for Models:
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>
      </form>

      {/* Image Processing Form */}
      <form onSubmit={handleSubmitImage}>
        <div style={{ marginBottom: "16px" }}>
          <label>
            Prompt:
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label>
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>
        <Button
          text={loading ? "Loading..." : "get models"}
          loading={loading}
          color="blue"
          hoverColor="gray"
          onClick={handleSubmitModels}
          disabled={loading}
        />
        <Button
          text={loading ? "Loading..." : "get image"}
          loading={loading}
          color="blue"
          hoverColor="gray"
          onClick={handleSubmitImage}
          disabled={loading}
        />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && (
        <div style={{ marginTop: "20px" }}>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
      {modelList.length > 0 && (
        <div className="overflow-auto h-[200px]">
          <h2>Available Models:</h2>
          <ul>
            {modelList.map((model, index) => (
              <li key={index}>{model}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeminiImageForm;
