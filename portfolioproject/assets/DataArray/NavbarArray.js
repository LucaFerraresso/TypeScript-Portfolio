import {
  HomeIcon, // Home icon for the homepage
  TerminalIcon,
  // Use GitBranch icon for Projects
  // Icon for Tech Stack
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: <HomeIcon color="black" size={25} /> },
  {
    href: "/Projects",
    label: "Projects",
    icon: <TerminalIcon color="blue" size={25} />,
  }, // Updated here
];

export default navItems;
