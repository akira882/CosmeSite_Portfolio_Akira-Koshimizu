import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DesignProcess: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "1. Strategy: Brand Trust & Values",
      subtitle: "「機能」だけでなく「価値観」で選ばれる",
      content: "オルビスの戦略転換（リブランディング以降）を踏まえ、単なる機能訴求ではなく、「肌の変化への不安」や「自分らしさを大切にする価値観」に寄り添う設計に。\nLPを「商品を売る場」から「信頼関係（エンゲージメント）を築く場」と再定義し、ブランドの誠実さを最優先に構成。"
    },
    {
      title: "2. Design: Honest Communication",
      subtitle: "「誠実さ」を体現するエビデンス",
      content: "過度な演出を避け、事実（科学的根拠）に基づいた情報をクリーンに伝えることで、オルビスの理念である「誠実であること」を体現。\n「Scientific Approach」セクションでは、数値データ（86%）と機能説明を近接させ、ユーザーが納得感を持って製品を信頼できるUI/UXを実現。"
    },
    {
      title: "3. UX: Omni-Channel & Personalization",
      subtitle: "点ではなく、線で繋がる体験",
      content: "店舗（オフライン）とWeb（オンライン）を行き来する現代の顧客行動（OMO）を意識。\n一方的な発信ではなく、顧客の「声（UGC）」や「肌状態」に合わせたコミュニケーションを想定し、LINE連携やパーソナライズ診断への拡張性を持たせた情報設計を採用。"
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
