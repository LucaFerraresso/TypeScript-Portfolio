import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNpm,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

const icons = [
  {
    component: <FaHtml5 color="green" />,
    title: "HTML5",
  },
  { component: <FaCss3Alt color="red" />, title: "CSS3" },
  {
    component: <FaJsSquare color="yellow" />,
    title: "JavaScript",
  },
  {
    component: <SiTypescript color="blue" />,
    title: "TypeScript",
  },
  {
    component: <SiNextdotjs color="black" />,
    title: "Next.js",
  },
  {
    component: <SiMongodb color="orange" />,
    title: "MongoDB",
  },
  {
    component: <SiFirebase color="red" />,
    title: "FireBase",
  },
  {
    component: <SiTailwindcss color="blue" />,
    title: "Tailwind CSS",
  },
  { component: <FaSass color="red" />, title: "Sass" },
  { component: <FaGithub color="black" />, title: "GitHub" },
  {
    component: <FaNode color="green" />,
    title: "Express.js",
  },
  { component: <SiNpm color="red" />, title: "npm" },
  {
    component: <SiVisualstudiocode color="blue" />,
    title: "VSCode",
  },
  {
    component: <SiPostman color="orange" />,
    title: "API/REST API",
  },
];

export default icons;
