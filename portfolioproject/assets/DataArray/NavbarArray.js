import { HomeIcon, TerminalIcon } from "lucide-react";
import { GiGemini } from "react-icons/gi";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon color={"var(--color-foreground)"} size={34} />, // Colore foreground
  },
  {
    href: "/Projects",
    label: "Progetti",
    icon: <TerminalIcon color={"var(--color-blue-dark)"} size={34} />, // Blu scuro
  },
  {
    href: "/GeminiPro",
    label: "Gemini",
    icon: <GiGemini color={"var(--color-purple)"} size={34} />, // Giallo
  },
];

export default navItems;
