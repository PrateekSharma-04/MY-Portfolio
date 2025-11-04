import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNpm,
  FaDatabase,
  FaTerminal,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMui,
  SiBootstrap,
  SiVite,
  SiPostman,
  SiSass,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript (ES6+)", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "RESTful APIs", icon: FaDatabase, color: "#4B5563" },
    ],
  },
  {
    title: "Tools & Misc",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "External APIs", icon: FaDatabase, color: "#00BFFF" },
      { name: "Terminal / CLI", icon: FaTerminal, color: "#6B7280" },
      { name: "NPM", icon: FaNpm, color: "#CB3837" },
    ],
  },
];
