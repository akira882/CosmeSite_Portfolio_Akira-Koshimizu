import React from 'react';
import { FEATURES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Features: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2, rootMargin: '0px' });


  return (
    <section id="science" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-water-600 font-sans text-xs tracking-[0.2em] uppercase block mb-4">Scientific Features</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-800 mb-6">美しさを支える、4つの機能</h2>
          <div className="w-12 h-[2px] bg-water-200 mx-auto my-8"></div>
          <p className="text-brand-600 font-sans text-base leading-loose max-w-2xl mx-auto">
            光の科学と植物の生命力。<br />
            86%のスキンケアベースが、あなたを輝かせる。
          </p>
        </div>

        <div
          ref={elementRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const enTitles = ["01 MOISTURE", "02 TEXTURE", "03 LIGHT", "04 BARRIER"];
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center text-center p-10 border border-water-100/50 rounded-sm transition-all duration-700 bg-white hover:shadow-2xl hover:shadow-water-100/20 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-8 flex flex-col items-center w-full">
                  <div className="flex items-baseline gap-3 mb-3 border-b border-water-100 pb-2 px-4">
                    <span className="font-display text-4xl text-water-600 font-medium leading-none">0{index + 1}</span>
                    <span className="font-serif text-lg text-brand-800 tracking-[0.2em] font-medium">{enTitles[index].split(' ')[1]}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg text-brand-800 mb-4">{feature.title}</h3>
                <p className="font-sans text-brand-600 text-sm leading-8 text-justify">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ingredient Highlight */}
        <div className="mt-32 flex flex-col md:flex-row items-center gap-0 bg-water-50 rounded-sm overflow-hidden">
          <div className="w-full md:w-1/2 h-80 md:h-[500px] relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=2574&auto=format&fit=crop"
              alt="Botanical Science"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-water-600 font-sans uppercase tracking-widest text-xs mb-6 block">Botanical Science</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-8 text-brand-800">濃密ボタニカル保湿成分</h3>
            <p className="font-sans text-base leading-8 text-brand-600 mb-10 text-justify">
              過酷な環境下でも美しく咲き誇る植物の生命力と、最新の皮膚科学を融合。
              肌のバリア機能をサポートし、乾燥した空気の中でも、
              まるで泉のように潤い続ける肌へ。
            </p>
            <div>
              <button className="text-brand-800 border-b border-brand-300 pb-1 font-sans uppercase text-xs tracking-widest hover:text-water-600 hover:border-water-600 transition-colors">
                View Full Ingredients
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;