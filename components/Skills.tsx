
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-card');
    if (!cards) return;

    // Floating animation
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -10,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.1
      });

      const handleMouseMove = (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000
        });

        const glow = card.querySelector('.glow-layer') as HTMLElement;
        if (glow) {
          gsap.to(glow, {
            opacity: 1,
            x: x - rect.width / 2,
            y: y - rect.height / 2,
            duration: 0.2
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        });
        const glow = card.querySelector('.glow-layer') as HTMLElement;
        if (glow) gsap.to(glow, { opacity: 0, duration: 0.5 });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">A Technical Ecosystem</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">The <span className="text-gradient">Toolkit</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed font-medium">
            Beyond standard skill bars. This is a modular view of my core competencies, from frontend innovation to backend reliability.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {SKILLS.map((skill, idx) => (
            <div 
              key={skill.name} 
              className="skill-card relative h-56 glass rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300 border-white/5 hover:border-indigo-500/30 group shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Glow */}
              <div className="glow-layer absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-[80px] opacity-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/80 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                      {skill.category}
                    </span>
                    <div className="text-white/20 font-black text-4xl opacity-50 select-none group-hover:text-indigo-500/20 transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                 </div>
                <h3 className="text-3xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {skill.name}
                </h3>
              </div>

              <div className="relative z-10 flex items-end justify-between mt-auto">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mastery</span>
                    <span className="text-sm font-black text-indigo-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div 
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                      style={{ width: `${skill.level}%` }}
                     ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
