import React, { useState } from "react";
//l'icone e' un componente
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
  animation?: string; // Classe di animazione personalizzata
  icon?: React.ReactNode; // Aggiunta dell'icona come prop
}
//l'icone e' un componente
const Button: React.FC<ButtonProps> = ({
  text,
  color = "",
  hoverColor = "",
  onClick,
  loading = false,
  disabled = false,
  link,
  animation = "",
  icon, // Aggiunta dell'icona come prop
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    setIsLoading(true);
    if (onClick) {
      onClick(event);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const buttonStyles = {
    backgroundColor: disabled ? "var(--color-gray-dark)" : color,
    cursor: disabled ? "not-allowed" : "pointer",
    transition:
      "background-color var(--transition-duration) var(--transition-ease)",
  };

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            onClick={handleClick}
            disabled={disabled || isLoading}
            style={buttonStyles}
            className={`min-w-[140px]  border border-black rounded-lg flex items-center justify-between py-2 px-4  text-gray-900 font-bold 
              transition-transform duration-300 ease-in-out ${animation}
              focus:outline-none `}
            onMouseEnter={(e) => {
              if (!disabled) e.currentTarget.style.backgroundColor = hoverColor;
            }}
            onMouseLeave={(e) => {
              if (!disabled) e.currentTarget.style.backgroundColor = color;
            }}
            onMouseDown={(e) => {
              if (!disabled) e.currentTarget.style.transform = "scale(0.95)";
            }}
          >
            {isLoading || disabled ? (
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
                <span>loading</span>
              </>
            ) : (
              <>
                <span>{icon}</span>
                <span>{text}</span>
              </>
            )}
          </button>
        </a>
      ) : (
        <button
          onClick={handleClick}
          disabled={disabled || isLoading}
          style={buttonStyles}
          className={`min-w-[140px]  border border-black rounded-lg flex items-center justify-between py-2 px-4 text-gray-900 font-bold 
            transition-transform duration-300 ease-in-out ${animation}
            focus:outline-none focus:ring focus:ring-opacity-50`}
          onMouseEnter={(e) => {
            if (!disabled) e.currentTarget.style.backgroundColor = hoverColor;
          }}
          onMouseLeave={(e) => {
            if (!disabled) e.currentTarget.style.backgroundColor = color;
          }}
        >
          {isLoading || disabled ? (
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
              <span>loading</span>
            </>
          ) : (
            <>
              <span>{icon}</span>
              <span>{text}</span>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
