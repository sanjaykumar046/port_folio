import React from 'react';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 70 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 70 },
    { name: "React.js", level: 70 },
    { name: "Python", level: 75 },
    { name: "My Sql", level: 85 },
    { name: "VB.Net", level: 80 },
    { name: "AWS Cloud", level: 50 }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What I Do</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Frontend Development</h4>
                <p className="text-gray-600">Creating responsive, interactive user interfaces with modern frameworks and best practices.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Backend Development</h4>
                <p className="text-gray-600">Building robust APIs, databases, and server-side applications with scalable architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;