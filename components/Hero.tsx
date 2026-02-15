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
      {/* Content Positioned Centered with Magazine Style */}
      <div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-10 md:pt-0"
      >
        {/* Spotlight Effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-radial-gradient from-black/20 via-transparent to-transparent blur-2xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 relative"
        >
          <div className="h-[1px] w-12 bg-white/60 mx-auto mb-4"></div>
          <p className="text-white/90 font-sans tracking-[0.3em] text-[10px] md:text-xs uppercase drop-shadow-md">
            New Collection 2026
          </p>
        </motion.div>

        <h1 className="text-white mb-6 relative z-20">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none drop-shadow-2xl translate-y-2"
            >
              Lumière Éclat
            </motion.span>
          </div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="block font-serif text-base md:text-xl lg:text-2xl mt-4 font-light text-white/90 tracking-widest drop-shadow-lg"
          >
            光を味方にする、第2の素肌。
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-5 mt-8 relative z-30"
        >
          <a
            href="#shades"
            className="group relative px-10 py-3 overflow-hidden border border-white/40 rounded-full transition-all duration-500 hover:border-white/80 hover:bg-white/10"
          >
            <span className="relative z-10 font-sans text-xs tracking-[0.2em] text-white uppercase group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
              自分だけの色を見つける
            </span>
          </a>
        </motion.div>

        {/* Scroll Indicator (Minimalist) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;