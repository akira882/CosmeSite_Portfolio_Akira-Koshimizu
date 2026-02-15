import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Problem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-brand-100 flex items-center justify-center">
      {/* Desire / Problem (The user's pain) */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-600 block mb-6">Reality in The Office</span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-900 leading-relaxed max-w-3xl mx-auto">
            <span className="text-brand-500 text-lg md:text-xl block mb-6 italic font-sans">
              "ランチ終わりの化粧直し、<br className="md:hidden" />鏡を見るのが憂鬱..."
            </span>
            オフィスの過酷な乾燥。<br />
            夕方になると現れる「くすみ」や「ファンデのひび割れ」。
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-px h-16 bg-brand-400 mx-auto my-12"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-brand-700 leading-9 max-w-2xl mx-auto text-justify md:text-center"
        >
          朝、完璧に仕上げたはずの肌も、空調の効いたオフィスでは水分を奪われ続けるばかり。<br />
          保湿ミストをしても、上からファンデを重ねても、かえって厚塗り感が増してしまう。<br /><br />

          そんな、美意識の高いあなたが抱えるジレンマを解決するのは、<br />
          「隠す」技術ではなく、<br />
          <strong className="font-serif text-brand-900 text-xl md:text-2xl border-b border-brand-500 pb-1 inline-block mt-4">「日中ずっとスキンケアし続ける」</strong><br />
          という新しい発想です。
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
