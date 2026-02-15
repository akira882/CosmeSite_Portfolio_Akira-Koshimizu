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
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-600 block mb-6">Your Inner Voice</span>
          <h2 className="font-serif text-2xl md:text-4xl text-brand-900 leading-relaxed max-w-2xl mx-auto">
            <span className="text-brand-500 text-lg md:text-xl block mb-4 italic">"夕方になると、鏡を見るのが怖い。"</span>
            肌の乾燥、くすみ、ハリ不足。<br />
            それは、ファンデーションのせいだと思っていませんか？
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
          className="font-sans text-base md:text-lg text-brand-700 leading-8 max-w-2xl mx-auto"
        >
          多くの女性が感じている「肌呼吸が妨げられるような閉塞感」。<br />
          私たちはその原因を徹底的に分析しました。<br />
          そしてたどり着いたのが、<br />
          <strong className="font-serif text-brand-900 text-xl border-b border-brand-500 pb-1">「スキンケア発想のファンデーション」</strong><br />
          という答えです。
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
