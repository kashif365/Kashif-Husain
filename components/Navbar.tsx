
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current?.querySelectorAll('.nav-item');
    const orb1 = orb1Ref.current;
    const orb2 = orb2Ref.current;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      
      tl.to(menu, {
        y: '0%',
        duration: 0.8,
        ease: 'expo.inOut'
      })
      .fromTo([orb1, orb2], 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.4, duration: 1.5, stagger: 0.2, ease: 'elastic.out(1, 0.8)' },
        '-=0.4'
      )
      .fromTo(links, 
        { y: 100, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.7, stagger: 0.1, ease: 'power4.out' },
        '-=1'
      );

      // Subtle orb floating
      gsap.to(orb1, { y: 30, x: 20, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(orb2, { y: -40, x: -30, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    } else {
      document.body.style.overflow = '';
      gsap.to(menu, {
        y: '-100%',
        duration: 0.7,
        ease: 'expo.inOut'
      });
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home', index: '01' },
    { name: 'About', id: 'about', index: '02' },
    { name: 'Skills', id: 'skills', index: '03' },
    { name: 'Projects', id: 'projects', index: '04' },
    { name: 'Contact', id: 'contact', index: '05' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled && !isMenuOpen 
            ? 'py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[1001]">
          {/* Brand Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-2xl font-black text-white tracking-tighter group flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm transform group-hover:rotate-12 transition-transform">K</span>
            <span className={`${isMenuOpen ? 'text-white' : 'text-white'}`}>Hussain.</span>
          </button>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 glass px-2 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeSection === link.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-white text-black hover:bg-indigo-50 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            Start Project
          </button>

          {/* Premium Mobile Toggler */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-14 h-14 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-500 relative z-[1100] ${
              isMenuOpen 
                ? 'bg-white text-black rotate-90' 
                : 'glass border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)] text-white'
            }`}
          >
            <span className={`block h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 bg-black translate-y-1 rotate-45' : 'w-5 bg-white'}`}></span>
            <span className={`block h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-3 bg-indigo-400'}`}></span>
            <span className={`block h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 bg-black -translate-y-1 -rotate-45' : 'w-5 bg-white'}`}></span>
            
            {/* Pulsing ring when closed */}
            {!isMenuOpen && <span className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping opacity-20"></span>}
          </button>
        </div>
      </nav>

      {/* Full-Screen Premium Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 w-full h-screen bg-[#030712] z-[999] flex flex-col transform -translate-y-full will-change-transform overflow-hidden"
      >
        {/* Artistic Backdrop Elements */}
        <div ref={orb1Ref} className="absolute top-[10%] right-[10%] w-[80vw] h-[80vw] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div ref={orb2Ref} className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] bg-purple-600/20 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-10 h-full flex flex-col justify-center relative z-10 pt-20">
          <div ref={linksRef} className="flex flex-col space-y-4">
            <p className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 opacity-80">Navigation Menu</p>
            
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="nav-item group flex items-baseline gap-6 text-left"
              >
                <span className="text-xs font-mono text-indigo-500/50 font-bold">{link.index}</span>
                <span className={`text-6xl md:text-8xl font-black tracking-tighter transition-all duration-500 ${
                  activeSection === link.id ? 'text-white translate-x-4' : 'text-gray-700 hover:text-white group-hover:translate-x-4'
                }`}>
                  {link.name}
                </span>
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="mt-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-white/5 pt-10">
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Let's Collaborate</p>
              <a href="mailto:hello@kashifhussain.dev" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                hello@kashifhussain.dev
              </a>
            </div>
            
            <div className="flex gap-8">
              {['LinkedIn', 'Github', 'Instagram'].map(s => (
                <button key={s} className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Branding Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
          <h2 className="text-[30vw] font-black leading-none">KASHIF</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
