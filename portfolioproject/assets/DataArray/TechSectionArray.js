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
    component: <DiHtml5 color="green" size={25} />,
    title: "HTML5",
  },
  { component: <LiaCss3Alt color="red" size={25} />, title: "CSS3" },
  {
    component: <LiaJsSquare color="yellow" size={25} />,
    title: "JavaScript",
  },
  {
    component: <BiLogoTypescript color="blue" size={25} />,
    title: "TypeScript",
  },
  {
    component: <SiNextdotjs color="black" size={25} />,
    title: "Next.js",
  },
  {
    component: <BiLogoMongodb color="orange" size={25} />,
    title: "MongoDB",
  },
  {
    component: <BiLogoFirebase color="red" size={25} />,
    title: "FireBase",
  },
  {
    component: <BiLogoTailwindCss color="blue" size={25} />,
    title: "Tailwind CSS",
  },
  { component: <DiSass color="red" size={25} />, title: "Sass" },
  { component: <Github color="black" size={25} />, title: "GitHub" },
  {
    component: <FaNodeJs color="green" size={25} />,
    title: "Node.js",
  },
  { component: <LiaNpm color="red" size={25} />, title: "npm" },
  {
    component: <SiVisualstudiocode color="blue" size={25} />,
    title: "VSCode",
  },
  {
    component: <SiPostman color="orange" size={25} />,
    title: "API/REST API",
  },
];

export default icons;
