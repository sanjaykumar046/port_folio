import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh'
      }}
    >
      <div 
        className="max-w-6xl mx-auto px-6 text-center"
        style={{ 
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div className="mb-8" style={{ marginBottom: '32px', textAlign: 'center' }}>
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wider uppercase">
            Welcome to my portfolio
          </p>
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}
          >
            <span className="text-gray-900">Sanjay </span>
            <span className="text-blue-600">Kumar</span>
          </h1>
          <div 
            className="h-1 w-24 bg-blue-600 mx-auto mb-8"
            style={{ 
              height: '4px', 
              width: '96px', 
              backgroundColor: '#2563eb', 
              margin: '0 auto 32px auto' 
            }}
          ></div>
        </div>
        
        <p 
          className="text-2xl md:text-3xl text-gray-600 mb-6 font-light"
          style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '24px', textAlign: 'center' }}
        >
          Full Stack Developer & Python Developer
        </p>
        <p 
          className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '48px', 
            maxWidth: '768px', 
            margin: '0 auto 48px auto',
            textAlign: 'center'
          }}
        >
          Crafting exceptional digital experiences through clean code, innovative design, and user-centered thinking. 
          Specializing in modern web technologies and scalable solutions.
        </p>
        
        <div 
          className="flex justify-center space-x-8 mb-12"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '32px', 
            marginBottom: '48px' 
          }}
        >
          <a 
            href="https://github.com/sanjaykumar046" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://linkedin.com/in/sanjaykumar002" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="mailto:sanjaykumar7tnp@gmail.com" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={32} />
          </a>
        </div>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '16px', 
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            style={{
              border: '2px solid #2563eb',
              color: '#2563eb',
              backgroundColor: 'transparent',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              cursor: 'pointer'
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;