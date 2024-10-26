import {
  Mail, // Mail icon for "Contatti" (contacts)
  Info, // Info icon for "About Me"
  ConeIcon, // Icon for LibraryPage
} from "lucide-react";

const footerItems = [
  { href: "/Contacts", label: "Contacts", icon: <Mail /> },
  { href: "/AboutMe", label: "About Me", icon: <Info /> },
  { href: "/Library", label: "LibraryPage", icon: <ConeIcon /> },
];

export default footerItems;
