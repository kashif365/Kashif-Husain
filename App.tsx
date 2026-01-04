
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const App: React.FC = () => {

  const socials = [
                { name: "Github", icon: FaGithub, link: "https://github.com/kashif365" },
                { name: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/kashifhussain1444/" },
              ];

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Persistent Background Elements */}
      <div className="fixed inset-0 z-[-2] bg-[#030712]"></div>
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-indigo-600 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-purple-700 blur-[180px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Navbar />
      
      <main>
        {/* Home Section (Hero) */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass relative z-10 p-2">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="/img/Kashif-Hussain.jpg"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                      alt="Kashif Hussain" 
                    />
                  </div>
                </div>
                {/* Visual Flair */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-600/30 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full"></div>
                
                <div className="absolute top-6 right-10 z-20 glass px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-3xl backdrop-blur-2xl border-white/10 group-hover:translate-x-4 transition-transform duration-500">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-gray-400">1+</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
              </div>

              <div>
                <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block">The Story Behind The Code</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">I'm <span className="text-gradient">Kashif Hussain</span></h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                  A results-driven Frontend Developer with extensive experience in React.js and modern JavaScript ecosystems. I specialize in building high-performance web applications that don't just work—they provide an emotional experience.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="glass p-6 rounded-3xl border-white/5 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21l3-1 3 1-.75-4M9.75 17h4.5M9.75 17L8.441 6.342a2.25 2.25 0 012.24-2.542h2.638a2.25 2.25 0 012.24 2.542L14.25 17" /></svg>
                    </div>
                    <h4 className="font-bold text-white mb-2">Quality Code</h4>
                    <p className="text-sm text-gray-500">Scalable architecture with modern clean-code principles.</p>
                  </div>
                  <div className="glass p-6 rounded-3xl border-white/5 hover:bg-white/5 transition-colors">
                     <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                    </div>
                    <h4 className="font-bold text-white mb-2">Modern UI/UX</h4>
                    <p className="text-sm text-gray-500">Immersive and responsive designs using GSAP and Three.js.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold transition-all glow-button shadow-indigo-500/20 shadow-lg">View Portfolio</a>
                  <button className="glass text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all border-white/10">Download CV</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="py-16 border-t border-white/5 bg-[#020617] relative overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <p className="text-3xl font-black text-gradient mb-4">KH.</p>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Innovating the web with creative front-end solutions. Let's build something extraordinary together.
              </p>
            </div>
            
            <div className="flex flex-col md:items-end gap-6">
              <nav className="flex gap-8 text-sm font-bold text-gray-400">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors">Back to top</button>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#projects" className="hover:text-white transition-colors">Work</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </nav>

            
              <div className="flex gap-4">
                {socials.map(({ name, icon: Icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    aria-label={name}
                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center
                              hover:bg-indigo-600 hover:border-indigo-600
                              transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-xs text-gray-600 font-medium">© 2024 Kashif Hussain. All Rights Reserved.</p>
             <p className="text-xs text-gray-600 font-medium">Designed & Developed with ❤️ by KH.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
