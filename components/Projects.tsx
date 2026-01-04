
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 max-w-xl">Exploring the intersection of design, code, and user experience.</p>
          </div>
          <a href="#" className="text-indigo-400 font-semibold flex items-center hover:text-indigo-300 transition-colors">
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="./img/projects.jpg" 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                
                <a href={project.link} className="inline-flex items-center text-sm font-bold tracking-tight text-white/90 hover:text-white group-hover:underline underline-offset-4 decoration-indigo-500">
                  Case Study
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
