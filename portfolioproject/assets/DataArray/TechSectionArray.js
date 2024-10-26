import { Github } from "lucide-react";
import {
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiHtml5, DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { LiaCss3Alt, LiaJsSquare, LiaNpm } from "react-icons/lia";
import { SiNextdotjs, SiVisualstudiocode, SiPostman } from "react-icons/si";

const icons = [
  {
    component: <DiHtml5 color="green" />,
    title: "HTML5",
  },
  { component: <LiaCss3Alt color="red" />, title: "CSS3" },
  {
    component: <LiaJsSquare color="yellow" />,
    title: "JavaScript",
  },
  {
    component: <BiLogoTypescript color="blue" />,
    title: "TypeScript",
  },
  {
    component: <SiNextdotjs color="black" />,
    title: "Next.js",
  },
  {
    component: <BiLogoMongodb color="orange" />,
    title: "MongoDB",
  },
  {
    component: <BiLogoFirebase color="red" />,
    title: "FireBase",
  },
  {
    component: <BiLogoTailwindCss color="blue" />,
    title: "Tailwind CSS",
  },
  { component: <DiSass color="red" />, title: "Sass" },
  { component: <Github color="black" />, title: "GitHub" },
  {
    component: <FaNodeJs color="green" />,
    title: "Node.js",
  },
  { component: <LiaNpm color="red" />, title: "npm" },
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
