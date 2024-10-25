import React, { useState } from "react";

interface ButtonProps {
  text: string;
  color?: string; // Colore di sfondo
  hoverColor?: string; // Colore di sfondo al passaggio del mouse
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void>; // Funzione di callback al clic
  loading?: boolean; // Stato di caricamento
  disabled?: boolean; // Stato disabilitato
  link?: string; // Link opzionale
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "bg-blue-500",
  hoverColor = "bg-blue-600",
  onClick,
  loading = false,
  disabled = false,
  link, // Aggiungi il link come props
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    setIsLoading(true);
    if (onClick) {
      onClick(event); // Passa l'evento al callback
    }

    // Simula un caricamento di 2 secondi
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const buttonClasses = ` rouded-lg flex items-center justify-center py-2 px-4 text-gray-900 font-bold rounded transition-all duration-300 ease-in-out 
    ${color} 
   
    transform ${isLoading ? "opacity-75" : " "} 
    ${disabled ? "cursor-not-allowed bg-gray-400" : ""}`;

  // Se è presente un link, renderizza un tag <a>
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          onClick={handleClick}
          disabled={disabled || isLoading}
          className={buttonClasses}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 1 1 12 0A8 8 0 0 1 4 12z"
                />
              </svg>
              <span>Loading...</span>
            </>
          ) : (
            text
          )}
        </button>
      </a>
    );
  }

  // Se non c'è un link, renderizza un normale bottone
  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 1 1 12 0A8 8 0 0 1 4 12z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
