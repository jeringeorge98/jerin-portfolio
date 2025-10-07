import { IoLogoGithub } from "react-icons/io";
import {
  SiAmazons3,
  SiAmazonwebservices,
  SiGoogledrive,
  SiOpensearch,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiPython,
  SiDocker,
  SiJupyter,
  SiPandas,
} from "react-icons/si";
import rag_chatbot from "../assets/images/rag_chatbot.png";
import portfolio from "../assets/images/portfolio.png";
import stockpredictor from "../assets/images/Ml-finance-project.png";
export const projectData = [
  {
    id: 1,
    title: "RAG chatbot in Amazon Bedrock",
    desc: "RAG chatbot for several use cases solving real problems",
    genre: "AI/ML",
    image: rag_chatbot,
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/jeringeorge98/RAG-CHATBOT",
      },
      {
        icon: SiGoogledrive,
        text: "Docs",
        url: "https://drive.google.com/file/d/1Nm5JMvoH9CSqL7z9ewsExFF0sdbxUmBq/view?usp=sharing",
      },
    ],
    tech_used: [
      { icon: SiAmazonwebservices, name: "Amazon Bedrock" },
      { icon: SiAmazons3, name: "Amazon S3" },
      { icon: SiOpensearch, name: "OpenSearch Serverless" },
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    desc: "A personal portfolio website to showcase my projects and skills. Desigend inspired by Star Wars theme.",
    genre: "Web Development",
    image: portfolio,
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/jeringeorge98/my-portfolio-new",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: 3,
    title: "Stock Price Predictor",
    desc: "A project using the yfinance data to predict stock prices using machine learning algorithms.Written in python using jupyter notebook.",
    genre: "AI/ML",
    image: stockpredictor,
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/jeringeorge98/ml-notebooks/stock_predictor",
      },
    ],
    tech_used: [
      { icon: SiPython, name: "Python" },
      { icon: SiJupyter, name: "Jupyter Notebook" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiPandas, name: "Pandas" },
    ],
  },
];

export const genres = [
  // Add "ALL" to the beginning of the array
  "All",
  ...Array.from(new Set(projectData.flatMap((project) => project.genre))),
];

// Function to filter projects based on genre
export const filterProjects = (genre: string) => {
  if (genre === "All") {
    return projectData;
  }
  return projectData.filter((project) =>
    Array.isArray(project.genre)
      ? project.genre.includes(genre)
      : project.genre === genre
  );
};
