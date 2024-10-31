import {
  CodeIcon,
  LibraryBigIcon,
  MailIcon,
  StarIcon,
  TerminalIcon,
  User,
  XCircle,
} from "lucide-react";
import { GiGemini } from "react-icons/gi";

const links = [
  {
    icon: <TerminalIcon color="var(--color-blue-dark)" size={24} />,
    href: "/Projects",
    label: "Pagina progetti",
  },
  {
    icon: <CodeIcon color="var(--color-ocean)" size={24} />,
    href: "/TechStack",
    label: "Tech Stack",
  },
  {
    icon: <GiGemini color="var(--color-ocean)" size={24} />,
    href: "/GeminiPro",
    label: "Gemini",
  },
  {
    icon: <User color="var(--color-emerald)" size={24} />,
    href: "/AboutMe",
    label: "About me",
  },
  {
    icon: <MailIcon color="var(--color-berry)" size={24} />,
    href: "/Contacts",
    label: "Contacts",
  },
  {
    icon: <LibraryBigIcon color="var(--color-orange)" size={24} />,
    href: "/Library",
    label: "Library",
  },
  {
    icon: <XCircle color="var(--color-red)" size={24} />,
    href: "/error",
    label: "Error page",
  },
];

export default links;
