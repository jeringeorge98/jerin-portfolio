import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/experienceData";
import { useState } from "react";

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState(experienceData.slice(0, 3));

  return (
    <>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <>
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              className="vertical-timeline-element--work text-left"
            ></VerticalTimelineElement>
          </>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default ExperienceTimeline;
