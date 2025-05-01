import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-16 px-6 lg:px-20">
      <h1 className="text-center text-5xl font-bold mb-16 text-white">Projects</h1>
      
      <div className="flex flex-col items-center space-y-16">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center lg:items-start max-w-5xl w-full bg-neutral-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full lg:w-1/3 rounded-lg object-cover shadow-lg"
            />

            {/* Project Details */}
            <div className="lg:w-2/3 lg:ml-8 lg:mr-8 text-left">
              <h2 className="text-3xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 mt-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-white px-3 py-1 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg transition hover:bg-blue-600"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 text-white px-5 py-2 rounded-lg transition hover:bg-gray-600"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
