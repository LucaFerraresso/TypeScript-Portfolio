import { HomeIcon, TerminalIcon, StarIcon } from "lucide-react";
import { GiGemini } from "react-icons/gi";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon color="var(--color-foreground)" size={24} />, // Colore foreground
  },
  {
    href: "/Projects",
    label: "Projects",
    icon: <TerminalIcon color="var(--color-blue-dark)" size={24} />, // Blu scuro
  },
  {
    href: "/Gemini",
    label: "Gemini",
    icon: <GiGemini color="var(--color-ocean)" size={24} />, // Giallo
  },
  {
    href: "/GeminiPro",
    label: "Gemini Pro",
    icon: <StarIcon color="var(--color-yellow)" size={24} />, // Giallo
  },
];

export default navItems;
