import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Balloon shooting game",
      description: "I created a 2D Balloon Shooting Game using C in Turbo C, utilizing the graphics.h library for visual elements. The game includes shooting mechanics, collision detection, and score tracking. It helped me strengthen my C programming and graphics skills.",
      image: "/shoot.jpg",
      technologies: ["Ansi-C", "MS-EXCEL"],
      github: "#",
      live: "#"
    },
    {
      title: "AI code Generator",
      description: "I developed a full-stack AI Code Generator using Python, Flask, and the Gemini API. The app takes natural language input and generates code in real time, with a responsive UI built using Tailwind CSS. API keys were securely managed using dotenv for safe integration.",
      image: "https://thepythoncode.com/media/articles/top-ai-code-generators/codeconvert.png",
      technologies: ["HTML", "Python", "Gemini AI", "Flask"],
      github: "#",
      live: "#"
    },
    {
      title: "Secure User Authentication & Dashboard",
      description: "I built a secure user authentication system with a real-time data dashboard using Flask, MySQL, and JavaScript. The system includes database-based login/signup, API communication, and dynamic data visualization. This project enhanced my backend logic, frontend integration, and UI/UX design skills.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["HTML", "js", "CSS", "Python","Flask","My SQL","API","Xampp"],
      github: "#",
      live: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <Github size={20} className="mr-2" />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;