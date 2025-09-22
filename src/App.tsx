import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import AboutSection from "./sections/AboutSection";
import StarsBackgrounds from "./components/StarsBackgrounds";
import ContactSection from "./sections/ContactSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillSection from "./sections/SkillsSection";
import LoadingScreen from "./loadingscreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Set that the loading screen is visible before the main content is displayed
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 8500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <StarsBackgrounds />
      {isLoading ? (
        <LoadingScreen />
      ) : (
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
      )}
    </>
  );
}

export default App;
