import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/experienceData";
import { useState, type JSX } from "react";
import {
  SiAxios,
  SiC,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMqtt,
} from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { AiOutlineJava } from "react-icons/ai";

const iconMap: { [key: string]: JSX.Element | string } = {
  Axios: <SiAxios />,
  C: <SiC />,
  CSharp: <TbBrandCSharp />,
  CSS: <SiCss3 />,
  Express: <SiExpress />,
  Git: <SiGit />,
  HTML: <SiHtml5 />,
  Java: <AiOutlineJava />,
  Javascript: <SiJavascript />,
  Mongodb: <SiMongodb />,
  Nodedotjs: <SiNodedotjs />,
  Postman: <SiPostman />,
  Python: <SiPython />,
  React: <SiReact />,
  SQL: <TbSql />,
  Tailwindcss: <SiTailwindcss />,
  Typescript: <SiTypescript />,
  Npm: <SiNpm />,
  MQTT: <SiMqtt />,
  "Generative AI Tools": "generative AI tools,",
  "Prompt Engineering": "prompt engineering,",
  "AI Prompting": "AI prompting,",
  "Critical Thinking": "critical thinking,",
  "Problem-Solving": "problem-solving,",
  "Analytical Skills": "analytical skills,",
  "Quality Assurance": "quality assurance,",
  "Quality Auditing": "quality auditing, etc.",
};

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState(experienceData.slice(0, 3));

  return (
    <>
      <VerticalTimeline layout={"2-columns"}>
        {/* Loop through the credentialsData array and display each credential as a VerticalTimelineElement */}
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            visible={true}
            key={index}
            className="vertical-timeline-element--work text-left"
            contentStyle={{
              background:
                "linear-gradient(180deg, rgba(75,30,133,0.8), rgba(75,30,133,0.01))",
              color: "rgb(203, 213, 225)",
            }}
            contentArrowStyle={{
              borderRight: `0.75rem solid rgba(75,30,133,0.65)`,
            }}
            date={experience.date}
            icon={
              experience.icon && (
                <img
                  src={experience.icon}
                  alt={"credential icon"}
                  className="w-full h-full object-cover rounded-full"
                />
              )
            }
            iconStyle={{
              background: "#fff",
            }}
          >
            <div className="vertical-timeline-element-title text-base md:text-lg text-slate-100 font-bold">
              {experience.title}
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 text-sm md:text-base italic">
              <div className="vertical-timeline-element-subtitle">
                {experience.organization}
              </div>
              {experience.location && (
                <div className="flex flex-row items-center gap-1">
                  <div>
                    <FaLocationDot />
                  </div>
                  <div>{experience.location}</div>
                </div>
              )}
            </div>
            <div className="vertical-timeline-element-title text-sm py-3">
              {experience.desc}
            </div>
            <div className="grid md:grid-cols-2">
              {experience.skills && experience.skills.length > 0 && (
                <div className="flex items-center">
                  <span className="text-sm md:font-medium">Skills:</span>
                  {/* For icon skills: */}
                  <div className="flex flex-row gap-x-1 sm:gap-x-2 ml-2">
                    {experience.skills
                      .filter((skill) => typeof iconMap[skill] !== "string")
                      .map((skill, i) => (
                        <span key={i} className="text-xl">
                          {iconMap[skill]}
                        </span>
                      ))}
                  </div>
                  {/* For text skills: */}
                  <div className="overflow-auto md:overflow-visible">
                    <div
                      className="flex flex-row whitespace-nowrap gap-x-1 sm:gap-x-1.5 overflow-hidden
                        overflow-x-scroll scrollbarX w-[20%] sm:w-[43%] md:w-[55%] lg:w-[80%] xl:w-[41%]"
                    >
                      {experience.skills
                        .filter((skill) => typeof iconMap[skill] === "string")
                        .map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm sm:text-base mb-1 sm:mb-0.5 font-light"
                          >
                            {iconMap[skill]}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="flex left-0 justify-end mt-3 sm:-mt-7 md:-mt-3">
                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    className="text-xs sm:text-sm md:text-base"
                  >
                    {/* <ShiningButton text="See Certification" /> */}
                  </a>
                )}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
        {/* Add a button to toggle the credential */}
        <VerticalTimelineElement
          visible={true}
          iconStyle={{
            background: "linear-gradient(180deg, rgb(75,30,133), rgb(0, 0, 0))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // icon={
          //   <button
          //     onClick={toggleCredential}
          //     className="flex"
          //     ref={loadMoreRef} // Reference to the "Load more" button
          //   >
          //     {isExpanded ? (
          //       <div className="flex items-center gap-x-28 lg:gap-x-[8.25rem]">
          //         <IoMdClose className="-mb-2.5 md:mb-3" />
          //         <div className="font-semibold text-[#8a9198]">Close</div>
          //       </div>
          //     ) : (
          //       <div className="flex items-center w-max gap-x-36 lg:gap-x-[10.5rem]">
          //         <FaPlus className="-mb-2.5 md:mb-3" />
          //         <div className="font-semibold text-[#8a9198]">Load more</div>
          //       </div>
          //     )}
          //   </button>
          // }
        />
      </VerticalTimeline>
    </>
  );
};

export default ExperienceTimeline;
