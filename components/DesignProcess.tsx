import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DesignProcess: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "1. Persona & Insight",
      subtitle: "誰の、どんな痛みを解決するのか",
      content: "ターゲットは「冬の乾燥に悩む28歳女性」。仕事もプライベートも充実しているが、夕方の肌の乾燥や化粧崩れにストレス（不快感）を感じている。\n「隠す」ためのファンデーションではなく、「日中もケアしてくれている」という安心感＝「ここちよさ」が最大の価値になると仮説を設定。"
    },
    {
      title: "2. Concept: Scientific Comfort",
      subtitle: "「ここちよさ」を科学で証明する",
      content: "オルビスの「スマートエイジング」と「科学的アプローチ」を融合。\nただ優しいだけでなく、エビデンス（数値）に基づいた機能性こそが、現代の女性にとっての本当の「ここちよさ（信頼）」に繋がると定義。\nデザインコンセプトを「Scientific Comfort」とし、清潔感（白・水色）と機能美（タイポグラフィ）で表現。"
    },
    {
      title: "3. UX/UI Decision",
      subtitle: "視線誘導と納得感の設計",
      content: "「なんとなく良さそう」で終わらせない情報設計。\n\n・Hero: 感情に訴えるコピーと、直感的な商品ビジュアル\n・Problem: ユーザーの悩み（乾燥）への共感\n・Solution: 解決策（モイスチャーマグネット処方）と根拠（86%）を近接させ、納得感を醸成\n\n「感情→共感→論理→納得」のフローで、コンバージョンへの動線を設計。"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-slate-400 block mb-4">
            Design Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
            なぜ、このデザインなのか。<br />
            <span className="text-xl md:text-2xl text-slate-500 mt-4 block font-sans font-normal">
              制作の背景と、思考のプロセス
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <h3 className="font-display text-xl text-brand-800 mb-2">{step.title}</h3>
              <p className="font-bold text-xs text-brand-500 mb-6 pb-4 border-b border-slate-100">
                {step.subtitle}
              </p>
              <p className="text-sm text-slate-600 leading-loose whitespace-pre-wrap">
                {step.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
