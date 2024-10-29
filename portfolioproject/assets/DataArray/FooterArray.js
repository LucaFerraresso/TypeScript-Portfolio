import {
  User,
  MailIcon,
  TerminalIcon, // Info icon for "About Me"
} from "lucide-react";

const footerItems = [
  {
    href: "/TechStack",
    label: "Tech Stack",
    icon: <TerminalIcon color="blue" size={25} />,
  },
  {
    href: "/Contacts",
    label: "Contacts",
    icon: <MailIcon color="purple" size={25} />,
  },
  {
    href: "/AboutMe",
    label: "About Me",
    icon: <User color="green" size={25} />,
  },
];

export default footerItems;
