import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Responsive Design', 'UI/UX'];
  
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-white font-semibold text-center">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
