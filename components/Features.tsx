import React from 'react';
import { FEATURES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Features: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2, rootMargin: '0px' });

  return (
    <section id="science" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-5xl text-brand-900 mb-6">The Science of Light</h2>
          <div className="w-20 h-[1px] bg-brand-400 mx-auto"></div>
          <p className="mt-6 text-brand-600 font-serif text-lg max-w-2xl mx-auto">
            光の科学と植物の生命力。<br />
            86%のスキンケアベースが、あなたを輝かせる。
          </p>
        </div>

        <div
          ref={elementRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center p-6 border border-brand-100 hover:border-brand-300 transition-all duration-700 bg-brand-50/50 hover:bg-white hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 p-4 bg-white rounded-full text-brand-500 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-brand-900 mb-3">{feature.title}</h3>
              <p className="font-sans text-brand-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ingredient Highlight */}
        <div className="mt-24 flex flex-col md:flex-row items-center gap-12 bg-brand-900 text-brand-50 rounded-sm overflow-hidden shadow-2xl">
          <div className="w-full md:w-1/2 h-80 md:h-[500px]">
            <img
              src="/images/Concentrated-iris.jpg"
              alt="Concentrated Iris Extract"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16">
            <span className="text-brand-300 font-sans uppercase tracking-widest text-xs mb-4 block">冬の肌を守る、奇跡の滴</span>
            <h3 className="font-display text-3xl md:text-4xl mb-6 text-white">濃縮アイリス エキス</h3>
            <p className="font-serif text-lg leading-relaxed text-brand-200 mb-8">
              過酷な環境下でも美しく咲き誇るアイリス。その驚異的な生命力を凝縮したエキスが、冬の乾燥で低下しがちな肌のバリア機能を力強くサポートし、潤いの満ちた弾力肌へと導きます。
            </p>
            <button className="text-white border-b border-brand-400 pb-1 font-sans uppercase text-xs tracking-widest hover:text-brand-300 transition-colors">
              成分の詳細を見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;