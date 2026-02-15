import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-900">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop"
          alt="Natural beauty with radiant skin"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent"></div>
      </motion.div>

      {/* Content */}
      {/* Content Positioned Centered with Orbis Style (Clean & Scientific) */}
      <div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-10 md:pt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur border border-brand-200 rounded-full text-brand-500 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase">
            Scientific Skincare
          </span>
        </motion.div>

        <h1 className="text-brand-800 mb-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-medium text-3xl md:text-5xl lg:text-6xl tracking-wide leading-relaxed drop-shadow-sm"
          >
            カバーする。<br className="md:hidden" />でも、隠さない。<br />
            <span className="mt-4 block text-4xl md:text-6xl lg:text-7xl font-light">素肌を超える、素肌感。</span>
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-brand-600 text-sm md:text-base leading-8 tracking-wider mb-10 max-w-lg mx-auto"
        >
          日中、最大のスキンケア時間を。<br />
          美容液成分86%配合。<br className="md:hidden" />つけている方が、肌の調子がいい。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-5 mt-4 relative z-30"
        >
          <a
            href="#shades"
            className="group relative px-10 py-4 bg-white/90 backdrop-blur-sm border border-brand-200 text-brand-700 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-brand-50 hover:shadow-lg hover:border-brand-300"
          >
            <span className="relative z-10">自分だけの色を見つける</span>
          </a>
        </motion.div>

        {/* Scroll Indicator (Subtle Gray) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-300 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;