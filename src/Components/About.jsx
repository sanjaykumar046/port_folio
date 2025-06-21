import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer with a Vision
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a self-driven full-stack developer with hands-on experience building secure, 
              user-friendly web applications using technologies like Flask, MySQL, HTML/CSS, JavaScript, and modern APIs. 
              My projects focus on solving real-world problems—from secure user authentication systems to AI-powered code generators.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              While I'm currently a fresher, I've actively developed and deployed multiple full-stack projects that demonstrate my ability to integrate frontend design, backend logic, database interaction, and external API communication. I prioritize writing clean, maintainable code and enjoy learning emerging technologies to stay ahead.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-blue-600 font-medium">Fresher</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                <p className="text-blue-600 font-medium">5+ Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                <p className="text-blue-600 font-medium">Full Stack</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Learning</h4>
                <p className="text-blue-600 font-medium">Always Growing</p>
              </div>
            </div>
            
            <a 
              href="/Sanjay kumar Resume.pdf" 
              download="Sanjay Kumar Resume.pdf"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '9999px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer'
              }}
            >
              📄 Download Resume
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/sanjay.jpg"
                alt="Sanjay Kumar Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Fresh</p>
                <p className="text-sm">Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;