import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 bg-brand-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-100/30 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-200/20 to-transparent blur-3xl rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-500 block mb-6 border-l-2 border-brand-400 pl-4">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 leading-tight mb-8">
              なぜ、<br />
              ファンデーションに<br />
              スキンケア発想が必要なのか。
            </h2>
            <div className="space-y-6 text-brand-600 font-sans leading-loose text-justify">∆
              <p>
                私たちは30年以上にわたり、肌本来の美しさを研究し続けてきました。
                その中で辿り着いたひとつの答え。
                それは、「隠す」ことではなく、「育む」ことです。
              </p>
              <p>
                日中の肌は、紫外線や乾燥、大気汚染など、過酷な環境に晒されています。
                だからこそ、メイクをしている時間こそが、
                最も濃密なスキンケアの時間であるべきだと考えました。
              </p>
              <p className="font-serif text-brand-800 text-lg border-b border-brand-200 pb-2 inline-block">
                美容液成分86%。これは、私たちの信念の証です。
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
            <div className="aspect-[3/4] overflow-hidden bg-brand-200 relative">
              <img
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop"
                alt="Laboratory and Clean Concept"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-[200px]">
              <p className="font-display text-4xl text-brand-900 mb-1">86<span className="text-xl">%</span></p>
              <p className="font-sans text-xs text-brand-500 uppercase tracking-wider">Serum Ingredients</p>
            </div>
          </motion.div>
        </div>

        {/* CTA under the story (Action) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#features" className="inline-block border-b border-brand-900 pb-1 text-brand-900 font-sans uppercase text-xs tracking-[0.2em] hover:text-brand-600 hover:border-brand-600 transition-colors">
            成分の詳細を見る
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
