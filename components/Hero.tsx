import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop" 
          alt="Model with radiant skin"
          className="w-full h-full object-cover object-top filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div 
        ref={elementRef}
        className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-4 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-white font-sans tracking-[0.3em] text-xs md:text-sm mb-6 uppercase border-b border-white/50 pb-2">
          New Collection 2024
        </p>
        <h1 className="text-white mb-6 tracking-wide leading-tight drop-shadow-lg">
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl mb-2">Lumière Éclat</span>
          <span className="block font-serif text-2xl md:text-4xl mt-4 font-light">
            光を味方にする、<br className="md:hidden" />第2の素肌。
          </span>
        </h1>
        <p className="text-white/90 font-serif text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          隠すのではなく、解き放つ。<br/>
          美容液成分86%配合で叶える、<br className="md:hidden" />一日中続く「発光肌」。
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <a 
            href="#shades" 
            className="px-10 py-4 bg-white text-brand-900 font-sans tracking-widest text-sm font-bold uppercase hover:bg-brand-50 transition-colors duration-300 min-w-[220px] shadow-lg"
          >
            自分だけの色を見つける
          </a>
          <button className="px-10 py-4 border border-white text-white font-sans tracking-widest text-sm font-bold uppercase hover:bg-white/10 transition-colors duration-300 min-w-[220px]">
            成分へのこだわり
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;