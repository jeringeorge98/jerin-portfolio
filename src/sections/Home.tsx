import Avatar from "../components/Avatar";
// import Hero from "../components/Hero";
export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center">
      <div className="flex  w-full justify-end place-items-end">
        <Avatar />
      </div>

      {/* Hero Section */}
      {/* <Hero /> */}

      {/* About Section */}
      {/* <section
        id="about"
        className="flex items-center justify-center bg-gradient-panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-starwars-title text-white mb-8 animate-lightsaber-glow">
            About <span className="text-gradient-blue">The Jedi</span>
          </h2>
          <p className="text-lg font-starwars text-gray-300 max-w-2xl mx-auto">
            A passionate developer who harnesses the{" "}
            <span className="text-gradient-green">
              Force of modern web technologies
            </span>
            . I love creating innovative solutions and bringing ideas to life
            through <span className="text-gradient-blue">elegant code</span>.
          </p>
        </div>
      </section> */}

      {/* Contact Section */}
    </section>
  );
}
