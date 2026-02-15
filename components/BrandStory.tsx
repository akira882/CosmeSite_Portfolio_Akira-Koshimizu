import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Element (Subtle Water Flow) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-water-50 to-transparent opacity-60 blur-3xl rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-water-600 block mb-8 pl-1">
              Scientific Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-800 leading-tight mb-8">
              メイクするほど、素肌が潤う。<br />
              その「矛盾」を、科学する。
            </h2>
            <div className="space-y-8 text-brand-600 font-sans leading-loose text-justify">
              <p>
                目指したのは、ファンデーションでありながら、<br />
                高機能なスキンケアでもあるという新しい存在。
              </p>
              <p>
                100回以上の試作を経て辿り着いた<br />
                <span className="font-bold text-brand-800 border-b-2 border-water-200">「モイスチャーマグネット処方」</span>が、<br />
                空気中の水分さえも味方につけ、<br />
                一日中、満ち足りた肌へ導きます。
              </p>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl shadow-water-100/50">
              <img
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop"
                alt="Serum Texture"
                className="w-full h-full object-cover"
              />
              {/* No dark overlay, just pure texture */}
            </div>

            {/* Scientific Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur p-8 shadow-xl border border-water-100 max-w-[240px] rounded-sm">
              <p className="font-sans text-xs text-brand-500 uppercase tracking-wider mb-2">Essence Ratio</p>
              <div className="flex items-baseline">
                <span className="font-display text-6xl text-water-600 tracking-tighter">86</span>
                <span className="text-2xl text-water-500 ml-1">%</span>
              </div>
              <p className="text-[10px] text-brand-400 mt-2 leading-tight">
                ※精製水を含む美容液成分の配合比率
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA (Minimal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <a href="#features" className="group inline-flex items-center gap-2 text-brand-800 font-sans uppercase text-xs tracking-[0.2em] transition-colors hover:text-water-600">
            <span>View Full Ingredients</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
