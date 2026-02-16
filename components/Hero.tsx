import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Particle = ({ delay, size, x, y }: { delay: number; size: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, x, y }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0.5],
      y: y - 100, // Float up
      x: x + (Math.random() * 20 - 10) // Slight drift
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute rounded-full bg-gradient-to-tr from-white to-water-200 pointer-events-none mix-blend-screen overflow-hidden"
    style={{
      width: size,
      height: size,
      boxShadow: "0 0 10px rgba(186, 230, 253, 0.4)"
    }}
  >
    <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white rounded-full blur-[1px]"></div>
  </motion.div>
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate particles
  const [particles, setParticles] = useState<Array<{ id: number, size: number, x: number, y: number, delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 5, // 5px to 25px
      x: (Math.random() - 0.5) * 400, // Spread nicely
      y: (Math.random() - 0.5) * 400,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#F5F8FA]">
      {/* Background Decorative Elements (Subtle water/light feel) - Aurora effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-pink-50/60 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[130px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        {/* God Ray light effect */}
        <div className="absolute -top-[20%] right-[20%] w-[2px] h-[150%] bg-gradient-to-b from-white/0 via-white/20 to-white/0 rotate-[25deg] blur-md"></div>
        <div className="absolute -top-[20%] right-[30%] w-[100px] h-[150%] bg-gradient-to-b from-white/0 via-white/5 to-white/0 rotate-[25deg] blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center px-4 md:px-8">

        {/* Center Stage: Hydro-Prism Sphere & Product */}
        <div className="relative flex items-center justify-center w-full max-w-6xl">

          {/* The Sphere (Water Halo) */}
          <motion.div
            style={{ y, opacity }}
            className="relative z-10 flex items-center justify-center"
          >
            {/* Sphere Container */}
            <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center">

              {/* The actual fluid sphere visual */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full rounded-full border border-white/40 bg-gradient-to-br from-white/10 to-water-100/10 backdrop-blur-[2px] shadow-[0_0_60px_rgba(186,230,253,0.2),inset_0_0_40px_rgba(255,255,255,0.5)]"
              ></motion.div>

              {/* Inner shine */}
              <div className="absolute inset-4 rounded-full border border-white/20 opacity-50"></div>

              {/* Dynamic Particles */}
              {particles.map(p => (
                <Particle key={p.id} {...p} />
              ))}

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 40 }}
                className="relative z-20 w-[160px] md:w-[260px]"
              >
                <img
                  src="/images/fictional-foundation.png"
                  alt="Fictional Foundation Product"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating Badge (World Class Quality) - Positioned relative to sphere */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-0 -right-4 md:top-20 md:right-10 w-36 h-36 bg-white rounded-full shadow-xl shadow-water-100/20 flex flex-col items-center justify-center border border-water-200 animate-float-slow z-30 pb-1"
              >
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[0.85rem] text-brand-900 font-bold tracking-widest leading-none">美容液成分</span>
                  <div className="flex items-baseline justify-center text-brand-900 leading-none -mt-1">
                    <span className="font-display text-[4rem] font-medium tracking-tighter">86</span>
                    <span className="font-display text-2xl font-light ml-0.5 -translate-y-1">%</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Vertical Typography (Right Side) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-row-reverse gap-8 h-[70vh] items-start pt-20"
          >
            {/* Main Copy (Vertical) */}
            <h1 className="font-serif text-brand-900 text-6xl tracking-widest leading-loose" style={{ writingMode: 'vertical-rl' }}>
              <span className="inline-block whitespace-nowrap mb-8">浸透ショット</span>
              <span className="inline-block whitespace-nowrap text-brand-400">エイジングデザイン</span>
            </h1>

            {/* Sub Copy (Vertical) */}
            <p className="font-sans text-brand-500 text-sm tracking-widest leading-loose pt-4" style={{ writingMode: 'vertical-rl' }}>
              なんとなく不調が続く肌へ。<br />
              もっとうるおって、<br />
              ずーっとゆらがない肌へ。
            </p>
          </motion.div>

          {/* Mobile Typography (Horizontal - fallback for small screens) */}
          <div className="absolute bottom-20 left-0 w-full text-center md:hidden px-4">
            <h1 className="font-serif text-brand-900 text-3xl mb-4">
              浸透ショット<br />
              <span className="text-brand-400">エイジングデザイン</span>
            </h1>
            <p className="text-sm text-brand-600 mb-6">ずーっとゆらがない肌へ。</p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#8E9B96] text-white px-6 py-2 rounded-full text-xs tracking-widest">成分を見る</button>
              <button className="border border-[#8E9B96] text-[#8E9B96] px-6 py-2 rounded-full text-xs tracking-widest">詳しくはこちら</button>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-300 to-transparent"></div>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-slate-400 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;