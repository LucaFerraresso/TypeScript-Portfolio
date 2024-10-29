import { HomeIcon, TerminalIcon, StarIcon } from "lucide-react";

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
    icon: <StarIcon color="var(--color-yellow)" size={24} />, // Giallo
  },
];

export default navItems;
