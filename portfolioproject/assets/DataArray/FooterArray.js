import {
  Home, // Home icon for the homepage
  Mail, // Mail icon for "Contatti" (contacts)
  Info, // Info icon for "About Me"
} from "lucide-react";

const footerItems = [
  {
    href: "/",
    label: "© 2024 MyPortfolio. All rights reserved",
    icon: <Home />,
  },
  { href: "/Contacts", label: "Contacts", icon: <Mail /> },
  { href: "/AboutMe", label: "About Me", icon: <Info /> },
];

export default footerItems;
