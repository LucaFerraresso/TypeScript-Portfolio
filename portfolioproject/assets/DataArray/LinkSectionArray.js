import {
  CodeIcon,
  LibraryBigIcon,
  MailIcon,
  StarIcon,
  TerminalIcon,
  User,
  XCircle,
} from "lucide-react";

const links = [
  {
    icon: <TerminalIcon color="blue" size={24} />,
    href: "/Projects",
    label: "Pagina progetti",
  },
  {
    icon: <CodeIcon color="black" size={24} />,
    href: "/TechStack",
    label: "TechStack",
  },
  {
    icon: <StarIcon color="yellow" size={24} />,
    href: "/Gemini",
    label: "Gemini",
  },
  {
    icon: <User color="green" size={24} />,
    href: "/AboutMe",
    label: "About me",
  },
  {
    icon: <MailIcon color="purple" size={24} />,
    href: "/Contacts",
    label: "Contacts",
  },
  {
    icon: <LibraryBigIcon color="orange" size={24} />,
    href: "/Library",
    label: "Library",
  },
  {
    icon: <XCircle color="red" size={24} />,
    href: "/error",
    label: "Error page",
  },
];

export default links;
