import {
  User,
  MailIcon,
  TerminalIcon,
  CodeIcon, // Info icon for "About Me"
} from "lucide-react";

const footerItems = [
  {
    href: "/TechStack",
    label: "Tech Stack",
    icon: <CodeIcon color="var(--color-ocean)" size={24} />, // Blu oceano vibrante
  },
  {
    href: "/Contacts",
    label: "Contacts",
    icon: <MailIcon color="var(--color-berry)" size={24} />, // Colore bacca audace
  },
  {
    href: "/AboutMe",
    label: "About Me",
    icon: <User color="var(--color-emerald)" size={24} />, // Verde smeraldo fresco
  },
];

export default footerItems;
