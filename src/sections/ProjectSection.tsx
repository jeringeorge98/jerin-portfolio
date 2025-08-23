const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-neon"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-starwars-title text-white mb-8 animate-lightsaber-glow">
          My <span className="text-gradient-green">Mission Archives</span>
        </h2>
        <p className="text-lg font-starwars text-gray-300 max-w-2xl mx-auto">
          Showcasing my latest{" "}
          <span className="text-gradient-blue">galactic expeditions</span> and
          creative solutions across the digital universe.
        </p>
      </div>
    </section>
  );
};
export default ProjectSection;
