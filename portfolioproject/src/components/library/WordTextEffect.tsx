import { TextEffect } from "./core/TextEffect";

// Creo un'interfaccia per passare il testo al componente
interface WordTextEffectProps {
  text: string; // Rendi questa prop obbligatoria
}

const WordTextEffect: React.FC<WordTextEffectProps> = ({ text }) => {
  return (
    <TextEffect per="word" as="h3" preset="blur">
      {text}
    </TextEffect>
  );
};

export default WordTextEffect;
