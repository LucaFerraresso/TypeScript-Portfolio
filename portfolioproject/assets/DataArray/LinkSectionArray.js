import {
  CodeIcon,
  LibraryBigIcon,
  MailIcon,
  TerminalIcon,
  User,
  XCircle,
} from "lucide-react";
import { GiGemini } from "react-icons/gi";

const links = [
  {
    icon: <TerminalIcon color="var(--color-blue-dark)" size={34} />,
    href: "/Projects",
    label: "Progetti",
  },
  {
    icon: <CodeIcon color={"var(--color-ocean)"} size={34} />,
    href: "/TechStack",
    label: "Tech",
  },
  {
    icon: <GiGemini color={"var(--color-purple)"} size={34} />,
    href: "/GeminiPro",
    label: "Gemini",
  },
  {
    icon: <User color={"var(--color-emerald)"} size={34} />,
    href: "/AboutMe",
    label: "Info",
  },
  {
    icon: <MailIcon color={"var(--color-berry)"} size={34} />,
    href: "/Contacts",
    label: "Contatti",
  },
  {
    icon: <LibraryBigIcon color={"var(--color-orange)"} size={34} />,
    href: "/Library",
    label: "Libreria",
  },
  {
    icon: <XCircle color={"var(--color-red)"} size={34} />,
    href: "/error",
    label: "Errore",
  },
];

export default links;
