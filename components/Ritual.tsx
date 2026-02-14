import React from 'react';
import { RITUAL_STEPS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Ritual: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-display text-3xl md:text-5xl text-brand-900 mb-6">The Ritual</h2>
           <p className="text-brand-600 font-serif text-lg">
             最高の仕上がりのための、3つのステップ
           </p>
        </div>

        <div 
          ref={elementRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-brand-100 -z-10"></div>

          {RITUAL_STEPS.map((step, index) => (
            <div 
              key={step.step}
              className={`bg-white p-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col items-center text-center group">
                <span className="font-display text-6xl text-brand-200 mb-6 group-hover:text-brand-300 transition-colors">{step.step}</span>
                <h3 className="font-serif text-2xl text-brand-900 mb-4">{step.title}</h3>
                <p className="font-sans text-brand-600 leading-relaxed max-w-xs text-sm">
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