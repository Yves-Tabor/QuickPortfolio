import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <p className="text-gray-300 leading-relaxed text-lg">
            As a junior frontend developer, I'm passionate about creating intuitive and visually appealing user interfaces. 
            I specialize in modern JavaScript frameworks and have a keen eye for design and user experience. 
            My journey in web development started with curiosity and has evolved into a dedicated pursuit of crafting 
            exceptional digital experiences that make a difference.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mt-4">
            I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or honing my skills through personal projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
