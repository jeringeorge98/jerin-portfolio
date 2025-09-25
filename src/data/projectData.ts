import { IoLogoGithub } from "react-icons/io";
import {
  SiAmazons3,
  SiAmazonwebservices,
  SiGoogledrive,
  SiOpensearch,
  SiTypescript,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
import rag_chatbot from "../assets/images/rag_chatbot.png";
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
    image: "",
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
