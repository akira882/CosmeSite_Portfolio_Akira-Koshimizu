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
          src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop"
          alt="Model with radiant skin"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
      </motion.div>

      {/* Content */}
      {/* Content Positioned at Bottom */}
      <div
        className="relative z-10 h-full flex flex-col justify-end items-center text-center px-4 pb-20 md:pb-24 lg:pb-32"
      >
        {/* Text Container with Glassmorphism/Gradient backing for readability */}
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/90 font-sans tracking-[0.4em] text-xs md:text-sm mb-4 uppercase inline-block drop-shadow-md">
              New Collection 2026
            </p>
          </motion.div>

          <h1 className="text-white mb-4 tracking-wide leading-tight drop-shadow-2xl">
            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block font-display text-4xl md:text-6xl lg:text-7xl tracking-tight"
              >
                Lumière Éclat
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="block font-serif text-lg md:text-2xl mt-2 font-light text-white/90"
            >
              光を味方にする、第2の素肌。
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a
              href="#shades"
              className="group relative px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 font-sans tracking-widest text-xs font-bold uppercase overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 min-w-[200px] rounded-sm"
            >
              <span className="relative z-10">自分だけの色を見つける</span>
            </a>
            <button className="group px-8 py-3 bg-brand-900/80 backdrop-blur-md border border-brand-800 text-white font-sans tracking-widest text-xs font-bold uppercase hover:bg-brand-800 transition-colors duration-300 min-w-[200px] rounded-sm">
              <span className="transition-colors">成分へのこだわり</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;