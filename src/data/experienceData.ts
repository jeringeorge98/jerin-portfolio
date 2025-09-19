interface IExperienceData {
  id: number;
  title: string;
  date: string;
  organization: string;
  icon?: string;
  location?: string;
  desc?: string;
  link?: string;
  skills?: string[];
}

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: "Full Stack Engineer",
    date: "May 2025 - Present",
    organization: "Selkirk Sport",
    location: "Tallinn, Estonia",
    desc: "• Used tools like Miro board to ideate abstract concepts, data modelling and defining relationships between entities.\n\n• Speaking to stakeholders understanding the business value and then gathering the requirements, converting those into critical features etc.\n\n• Defining and developing API endpoints in TypeScript using ExpressJs framework for profile management, event-management. Developed for managing, authenticating users logging in to the app.\n\n• Integrated with Supabase for authentication, enabled RLS for authorization.\n\n• Writing test cases in JEST keeping the coverage not less than 90%, thus building truly scalable and shippable code.\n\n• Communicating with relevant stakeholders and then creating a basic roadmap of development process.\n\n• Tech stack includes: Flutter, Dart, TypeScript, Node.js, ExpressJs, Supabase, PalantirFoundry",
    link: "https://www.selkirksport.com/",
    skills: ["Typescript", "Flutter", "Supabase", "Node.js", "PALANTIR"],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    date: "November 2023 - April 2024",
    organization: "Eesti Ettevotted (Client)",
    location: "Tallinn, Estonia",
    skills: ["Typescript", "React.js", "Github Actions", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Software Engineer",
    date: "August 2020 - July 2023",
    link: "https://platformcommons.org/",
    desc: "• Contributed to a large-scale system digitizing 9M+ farmer records, demonstrating experience in building and maintaining backend applications that serve thousands of active users.\n\n• Designed and implemented backend services in Java Spring Boot, including REST APIs for user management and crop portfolio management, ensuring scalability and high availability.\n\n• Applied Test-Driven Development (TDD) practices, writing comprehensive unit and integration tests in JUnit/Mockito with 90%+ coverage to maintain code robustness and reliability.\n\n• Implemented authentication and authorization workflows using Spring Security, strengthening access control and data protection.\n\n• Integrated monitoring and logging solutions such as Sentry to improve observability, streamline debugging, and ensure system reliability.\n\n• Designed and maintained Apache Superset dashboards used by District Project Managers (DPMs) for data-driven decision-making and field supervision.",
    organization: "Platform Commons Org",
    location: "Bengaluru, India",
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Android",
      "Kotlin",
      "Android SDK",
      "Jetpack Compose",
    ],
  },
];
