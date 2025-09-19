import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import AboutSection from "./sections/AboutSection";
import StarsBackgrounds from "./components/starsBackgrounds";
import Contact from "./sections/Contact";
import ProjectSection from "./sections/ProjectSection";
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
          <section id="contact">
            <Contact />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
