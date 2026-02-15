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
      <div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-brand-100 font-sans tracking-[0.4em] text-xs md:text-sm mb-8 uppercase border-b border-white/30 pb-3 inline-block">
            New Collection 2026
          </p>
        </motion.div>

        <h1 className="text-white mb-8 tracking-wide leading-tight drop-shadow-2xl">
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block font-display text-5xl md:text-7xl lg:text-9xl tracking-tight"
            >
              Lumière Éclat
            </motion.span>
          </div>
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="block font-serif text-2xl md:text-4xl mt-6 font-light text-brand-50"
          >
            光を味方にする、<br className="md:hidden" />第2の素肌。
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-brand-100/90 font-serif text-lg md:text-xl mb-12 max-w-2xl leading-relaxed tracking-wide"
        >
          隠すのではなく、解き放つ。<br />
          美容液成分86%配合で叶える、<br className="md:hidden" />一日中続く「発光肌」。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <a
            href="#shades"
            className="group relative px-10 py-4 bg-brand-50 text-brand-900 font-sans tracking-widest text-sm font-bold uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[220px]"
          >
            <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-300">自分だけの色を見つける</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
          </a>
          <button className="group px-10 py-4 border border-white/50 text-white font-sans tracking-widest text-sm font-bold uppercase hover:bg-white/10 transition-colors duration-300 min-w-[220px] backdrop-blur-sm">
            <span className="group-hover:text-brand-50 transition-colors">成分へのこだわり</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;