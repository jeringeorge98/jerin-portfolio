const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-panel"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-starwars-title text-white mb-8 animate-lightsaber-glow">
          Join The <span className="text-gradient-sith">Alliance</span>
        </h2>
        <p className="text-lg font-starwars text-gray-300 max-w-2xl mx-auto mb-8">
          Ready to embark on an epic journey? Let&apos;s create something{" "}
          <span className="text-gradient-green">legendary</span> together.
        </p>
        <div className="animate-pulse-blue">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-starwars-title font-bold rounded-lg hover:animate-neon-glow transition-all duration-300">
            Transmit Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
