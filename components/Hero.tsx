import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gradient-to-b from-white via-[#F5F8FA] to-[#E8F0F5]">
      {/* Background Decorative Elements (Subtle water/light feel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-50/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-8 pt-20 pb-10">

        {/* Text Content - Mobile: Top, Desktop: Left */}
        <div className="flex-1 text-center md:text-left md:pr-10 z-20 order-1 md:order-1 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-full text-slate-600 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-sm">
              New Arrival
            </span>
          </motion.div>

          <h1 className="text-slate-800 mb-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display font-medium text-2xl md:text-5xl lg:text-6xl tracking-wide leading-relaxed drop-shadow-sm text-brand-900"
            >
              <span className="block text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4 text-brand-500 font-light">
                なんとなく不調が続く肌へ。
              </span>
              <span className="bg-white/40 backdrop-blur-sm rounded-lg px-2 decoration-clone box-decoration-slice leading-snug py-1">
                <span className="inline-block whitespace-nowrap">もっとうるおって、</span><br />
                <span className="inline-block whitespace-nowrap">ずーっと<span className="text-brand-400 font-semibold">ゆらがない肌</span>へ。</span>
              </span>
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-slate-700 text-sm md:text-base leading-8 tracking-wider mb-8 max-w-lg mx-auto md:mx-0 p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm"
          >
            肌の基礎体力に着目。<br />
            ３ステップで、ハリツヤ続く肌に。<br />
            <span className="text-xs text-slate-500 block mt-2">*1 肌のバリア機能を保つこと</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="bg-[#8E9B96] text-white px-8 py-3 rounded-full hover:bg-[#7A8883] transition-colors duration-300 font-sans tracking-widest text-sm shadow-md">
              成分を見る
            </button>
            <button className="border border-[#8E9B96] text-[#8E9B96] px-8 py-3 rounded-full hover:bg-[#8E9B96] hover:text-white transition-all duration-300 font-sans tracking-widest text-sm">
              詳しくはこちら
            </button>
          </motion.div>
        </div>

        {/* Product Image - Mobile: Bottom, Desktop: Right */}
        <motion.div
          className="flex-1 relative z-10 w-full max-w-[400px] md:max-w-[500px] order-2 md:order-2 mt-8 md:mt-0"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 50 }}
            className="relative"
          >
            {/* Main Product Image */}
            <img
              src="/images/fictional-foundation.png"
              alt="Fictional Foundation Product"
              className="w-full h-auto drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Floating Badge (Similar to reference 'Review No.1' etc) */}
            <div className="absolute top-10 -right-4 md:-right-10 w-28 h-28 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex flex-col items-center justify-center border border-water-100 p-2 animate-float-slow">
              <span className="text-[11px] text-brand-500 font-bold tracking-tight">美容液成分</span>
              <span className="text-3xl font-display text-water-600 font-bold leading-none mt-1">86<span className="text-sm">%</span></span>
              <span className="text-[10px] text-slate-400 mt-1 center text-center tracking-widest">高保湿</span>
            </div>
          </motion.div>
        </motion.div>

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