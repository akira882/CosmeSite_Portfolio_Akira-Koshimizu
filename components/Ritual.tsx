import React from 'react';
import { RITUAL_STEPS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Ritual: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-water-600 font-sans text-xs tracking-[0.2em] uppercase block mb-4">Beauty Ritual</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-800">
            美しさを引き出す、3つのステップ
          </h2>
        </div>

        <div
          ref={elementRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[20%] left-0 w-full h-[1px] bg-water-100 -z-10"></div>

          {RITUAL_STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`bg-white/80 backdrop-blur-sm p-8 transition-all duration-1000 border border-transparent hover:border-water-100 rounded-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col items-center text-center group">
                <span className="font-display text-8xl text-water-50 mb-4 group-hover:text-water-100 transition-colors font-light tracking-tighter">{step.step}</span>
                <h3 className="font-serif text-xl text-brand-800 mb-4 relative">
                  <span className="relative z-10">{step.title}</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-water-50 -z-10 group-hover:bg-water-100 transition-colors"></span>
                </h3>
                <p className="font-sans text-brand-500 leading-8 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ritual;