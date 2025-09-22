import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import AboutSection from "./sections/AboutSection";
import StarsBackgrounds from "./components/StarsBackgrounds";
import ContactSection from "./sections/ContactSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillSection from "./sections/SkillsSection";
function App() {
  return (
    <>
      <StarsBackgrounds />
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Header />
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
          <section id="skills">
            <SkillSection />
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
