import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Problem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-brand-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-water-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-water-500 block mb-8">Skin Concern</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-800 leading-relaxed mb-6">
            夕方、鏡に映る自分に<br />
            がっかりしたことはありませんか？
          </h2>
          <p className="text-brand-500 text-lg font-sans mb-12">
            ちゃんとケアしているはずなのに、<br />
            乾く、くすむ、崩れる。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-px h-16 bg-brand-200 mx-auto my-12"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-brand-600 leading-9 max-w-2xl mx-auto text-justify md:text-center"
        >
          それは、肌が「呼吸」できていないからかもしれません。<br /><br />
          ファンデーションで蓋をする時間は、1日約10時間以上。<br />
          その長い時間を、肌への負担ではなく、<br />
          <span className="text-water-600 font-bold border-b border-water-200 pb-1">「スキンケアの時間」</span>に変えられたら。
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
