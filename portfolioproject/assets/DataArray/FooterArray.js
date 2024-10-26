import {
  Mail, // Mail icon for "Contatti" (contacts)
  Info, // Info icon for "About Me"
  XCircle, // Icon for Error Page
  ConeIcon, // Icon for LibraryPage
} from "lucide-react";

const footerItems = [
  { href: "/Contacts", label: "Contacts", icon: <Mail /> },
  { href: "/AboutMe", label: "About Me", icon: <Info /> },
  { href: "/ErrorPage", label: "Error Page", icon: <XCircle /> },
  { href: "/Library", label: "LibraryPage", icon: <ConeIcon /> },
];

export default footerItems;
