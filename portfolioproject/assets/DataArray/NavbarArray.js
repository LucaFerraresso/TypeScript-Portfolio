import {
  Home, // Home icon for the homepage
  GitBranch, // Use GitBranch icon for Projects
  Code, // Icon for Tech Stack
  XCircle, // Icon for Error Page
  Info, // Icon for LibraryPage
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/Projects", label: "Projects", icon: <GitBranch /> }, // Updated here
  { href: "/TechStack", label: "Tech Stack", icon: <Code /> },
  { href: "/ErrorPage", label: "Error Page", icon: <XCircle /> },
  { href: "/Library", label: "LibraryPage", icon: <Info /> },
];

export default navItems;
