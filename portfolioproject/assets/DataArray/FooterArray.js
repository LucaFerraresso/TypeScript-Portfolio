import {
  User,
  MailIcon,
  CodeIcon, // Info icon for "About Me"
} from "lucide-react";

const footerItems = [
  {
    href: "/TechStack",
    label: "Tech",
    icon: <CodeIcon color={"var(--color-ocean)"} size={34} />, // Blu oceano vibrante
  },
  {
    href: "/Contacts",
    label: "Contatti",
    icon: <MailIcon color={"var(--color-berry)"} size={34} />, // Colore bacca audace
  },
  {
    href: "/AboutMe",
    label: "Info",
    icon: <User color={"var(--color-emerald)"} size={34} />, // Verde smeraldo fresco
  },
];

export default footerItems;
