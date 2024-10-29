import { HomeIcon, TerminalIcon, StarIcon } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: <HomeIcon color="black" size={25} /> },
  {
    href: "/Projects",
    label: "Projects",
    icon: <TerminalIcon color="blue" size={25} />,
  },
  {
    href: "/Gemini",
    label: "Gemini",
    icon: <StarIcon color="yellow" size={25} />,
  },
];

export default navItems;
