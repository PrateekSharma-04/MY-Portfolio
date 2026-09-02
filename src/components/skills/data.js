import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaBrain,
  FaRobot,
  FaCubes,
  FaCloud,
  FaLock,
} from "react-icons/fa";

import {
  SiExpress,
  SiMui,
  SiBootstrap,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiTailwindcss,
  SiStreamlit,
  SiSass,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    color: "#38BDF8",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript (ES6+)", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
    ],
  },

  {
    title: "Backend Development",
    color: "#A78BFA",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "REST APIs", icon: FaDatabase, color: "#94A3B8" },
      { name: "JWT Authentication", icon: FaLock, color: "#F59E0B" },
    ],
  },

  {
    title: "AI & Machine Learning",
    color: "#60A5FA",
    skills: [
      { name: "Machine Learning", icon: FaBrain, color: "#38BDF8" },
      { name: "Deep Learning", icon: FaCubes, color: "#818CF8" },
      { name: "NLP", icon: FaBrain, color: "#60A5FA" },
      { name: "TF-IDF", icon: FaCode, color: "#A78BFA" },
      { name: "Generative AI", icon: FaRobot, color: "#8B5CF6" },
      { name: "LLM Integration", icon: FaRobot, color: "#6366F1" },
    ],
  },

  {
    title: "Languages & Databases",
    color: "#4ADE80",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "SQL", icon: FaDatabase, color: "#F59E0B" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];

export const engineeringTools = [
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },

  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },

  {
    name: "Render",
    icon: FaCloud,
    color: "#46E3B7",
  },

  {
    name: "Streamlit",
    icon: SiStreamlit,
    color: "#FF4B4B",
  },
];

export const coreConcepts = [
  {
    name: "Data Structures & Algorithms",
    icon: FaCode,
    color: "#F59E0B",
  },

  {
    name: "Object Oriented Programming",
    icon: FaCubes,
    color: "#F59E0B",
  },

  {
    name: "DBMS",
    icon: FaDatabase,
    color: "#F59E0B",
  },

  {
    name: "Computer Networks",
    icon: FaNetworkWired,
    color: "#F59E0B",
  },
];
