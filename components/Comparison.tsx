import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const Comparison: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    {
      label: "美容液成分 (Essence)",
      conventional: "平均 50-60%",
      ourProduct: "86%",
      note: "※当社調べ (保湿成分を含む)",
      isHighlight: true
    },
    {
      label: "仕上がり (Finish)",
      conventional: "粉っぽさが残る",
      ourProduct: "光を反射する「水膜」",
      note: "Hydro-Prism処方"
    },
    {
      label: "潤いの持続 (Retention)",
      conventional: "夕方に乾きを感じる",
      ourProduct: "12時間後も水分量キープ",
      note: "※角層まで"
    },
    {
      label: "肌への負担 (Burden)",
      conventional: "被膜感が強い",
      ourProduct: "呼吸するような軽さ",
      note: "ノンコメドジェニックテスト済"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white border-t border-brand-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-water-600 font-sans text-xs tracking-[0.2em] uppercase block mb-4">
            Quality Comparison
          </span>
          <h2 className="font-serif text-3xl md:text-3xl text-brand-800 mb-6">
            なぜ、LUMIÈRE PEAUなのか。<br />
            <span className="text-lg md:text-xl text-brand-500 mt-2 block font-sans font-normal">
              従来品との決定的な違い
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: "90%" }}
          animate={isInView ? { opacity: 1, width: "100%" } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-lg border border-brand-100 shadow-lg mx-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-50">
                <th className="p-6 text-xs text-brand-400 font-sans tracking-widest uppercase w-1/4">Criteria</th>
                <th className="p-6 text-sm text-brand-500 font-serif font-normal w-1/3 text-center border-l border-brand-100">
                  Conventional
                  <span className="block text-[10px] text-brand-400 mt-1">従来のリキッドファンデーション</span>
                </th>
                <th className="p-6 text-lg text-brand-900 font-serif font-bold w-1/3 text-center bg-water-50 border-l border-b-4 border-b-water-400 border-l-brand-100 relative">
                  LUMIÈRE PEAU
                  <span className="absolute top-0 right-0 bg-water-400 text-white text-[9px] px-2 py-1 uppercase tracking-widest">Orbis Quality</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, index) => (
                <tr key={index} className={`border-b border-brand-50 hover:bg-slate-50 transition-colors ${row.isHighlight ? 'bg-water-50/10' : ''}`}>
                  <td className="p-6 font-serif text-brand-800 font-medium">
                    {row.label}
                  </td>
                  <td className="p-6 text-brand-500 text-center border-l border-brand-50 font-sans text-sm relative">
                    {/* Mobile label approach could be added here for responsiveness */}
                    <div className="flex items-center justify-center gap-2 opacity-50">
                      <Minus className="w-4 h-4" />
                      <span>{row.conventional}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center border-l border-brand-50 bg-water-50/20 relative">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-brand-900 font-bold font-sans text-base flex items-center gap-2">
                        <Check className="w-5 h-5 text-water-600" />
                        {row.ourProduct}
                      </div>
                      {row.note && (
                        <span className="text-[10px] text-water-500 mt-1 block tracking-tight">{row.note}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-center text-[10px] text-brand-300 mt-8 font-sans">
          ※自社従来品比。効果には個人差があります。
        </p>
      </div>
    </section>
  );
};

export default Comparison;
