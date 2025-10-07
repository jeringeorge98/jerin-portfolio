import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithubactions,
  SiNodedotjs,
  SiReact,
  SiAmazonwebservices,
  SiMysql,
  SiSpringboot,
  SiDocker,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size: string; color: string }>;
  color: string;
  size: string;
}

export const skillsData = [
  {
    id: 1,
    category: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        progress: 70,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        progress: 60,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        progress: 70,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#06B6D4",
        progress: 80,
      },
      {
        name: "CSS3",
        icon: SiCss3,
        color: "#1572B6",
        progress: 80,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        progress: 95,
      },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
        progress: 60,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#FCFCFCFC",
        progress: 60,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        progress: 50,
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#C74634",
        progress: 60,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#4479A1",
        progress: 50,
      },
    ],
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: SiAmazonwebservices,
        color: "#FF9000",
        progress: 40,
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        progress: 80,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
        progress: 50,
      },
      {
        name: "Azure",
        icon: VscAzure,
        color: "#0089D6",
        progress: 40,
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        progress: 40,
      },
    ],
  },
  {
    id: 4,
    category: "Data and Analytics",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#00FF00",
        progress: 60,
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#DC143C",
        progress: 70,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "#FFD700",
        progress: 50,
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "#DC143C",
        progress: 70,
      },
    ],
  },
];
