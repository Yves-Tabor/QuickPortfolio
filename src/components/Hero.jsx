import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Yves Tabor</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Junior Frontend Developer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about creating beautiful, responsive web experiences with modern technologies. 
          I love turning ideas into elegant digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('Contact')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('About')}
            className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
