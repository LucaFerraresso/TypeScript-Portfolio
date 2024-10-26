import {
  Home, // Home icon for the homepage
  GitBranch, // Use GitBranch icon for Projects
  Code, // Icon for Tech Stack
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/Projects", label: "Projects", icon: <GitBranch /> }, // Updated here
  { href: "/TechStack", label: "Tech Stack", icon: <Code /> },
];

export default navItems;
