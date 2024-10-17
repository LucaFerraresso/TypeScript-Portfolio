import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const icons = [
  { component: <FaHtml5 color="green" />, title: "HTML5" },
  { component: <FaCss3Alt color="red" />, title: "CSS3" },
  { component: <FaJsSquare color="yellow" />, title: "JavaScript" },
  { component: <SiTypescript color="blue" />, title: "TypeScript" },
  { component: <SiNextdotjs color="black" />, title: "Next.js" },
  { component: <SiMongodb color="orange" />, title: "MongoDB" },
  { component: <SiFirebase color="red" />, title: "FireBase" },
  { component: <SiTailwindcss color="blue" />, title: "Tailwind CSS" },
  { component: <FaSass color="red" />, title: "Sass" },
];

export default icons;
