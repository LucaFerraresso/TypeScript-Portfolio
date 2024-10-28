import {
  Home, // Home icon for the homepage
  GitBranch, // Use GitBranch icon for Projects
  // Icon for Tech Stack
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/Projects", label: "Projects", icon: <GitBranch /> }, // Updated here
];

export default navItems;
