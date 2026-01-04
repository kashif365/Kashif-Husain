
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Background3D from './Background3D';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.5 }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20" ref={containerRef}>
      <Background3D />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">  
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
            Building Digital <span className="text-gradient">Experiences</span> that Matter.
          </h1>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            I'm Kashif Hussain, a creative Frontend Developer crafting high-performance, responsive, and visually stunning web applications with React.js and modern tech stacks.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center glow-button">
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#about" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
              About Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
