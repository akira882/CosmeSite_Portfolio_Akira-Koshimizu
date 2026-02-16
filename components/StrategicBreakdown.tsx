import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, MousePointerClick, MessageCircle, BarChart3, BrainCircuit, Target } from 'lucide-react';

const StrategicBreakdown: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aisasSteps = [
    { label: "Attention", desc: "Hero: Hydro-Prism Visual", icon: <Target className="w-5 h-5" /> },
    { label: "Interest", desc: "Problem: 30s Skin Concerns", icon: <BrainCircuit className="w-5 h-5" /> },
    { label: "Search", desc: "Scientific Features (Safety) & Comparison", icon: <Search className="w-5 h-5" />, highlight: true },
    { label: "Action", desc: "CTA: Free Sample Offer", icon: <MousePointerClick className="w-5 h-5" /> },
    { label: "Share", desc: "Reviews: Social Proof", icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0F172A] text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/50 text-indigo-400 text-[10px] tracking-[0.2em] uppercase mb-4 font-mono">
            For Recruiters & Strategists
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Strategic Architecture
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            本サイトは、単なるデザインではなく、<br className="md:hidden" />心理学とマーケティングフレームワークに基づいて構成されています。<br />
            「なぜ売れるのか」のロジックを可視化しました。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* AISAS Hack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-indigo-400 w-6 h-6" />
              <h3 className="text-xl text-white font-medium">AISAS Model Optimization</h3>
            </div>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              「理性派」ターゲットの最大の特徴は、徹底的な<strong>Search（検索・比較）</strong>です。<br />
              本サイトでは、通常なら外部サイトで行われる成分確認や競合比較（Search）を、詳細な「Scientific Features」セクションで先回りして完結させ、離脱を防いでいます。
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2 px-2">
                <span>User Flow</span>
                <span>Site Section</span>
              </div>
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-700"></div>

                {aisasSteps.map((step, i) => (
                  <div key={i} className={`relative flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${step.highlight ? 'bg-indigo-500/10 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-slate-800/50 border-slate-700'}`}>
                    <div className={`p-2 rounded-full shrink-0 z-10 ${step.highlight ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-bold tracking-wider uppercase ${step.highlight ? 'text-indigo-300' : 'text-slate-400'}`}>{step.label}</div>
                      <div className={`text-sm ${step.highlight ? 'text-white' : 'text-slate-300'}`}>{step.desc}</div>
                    </div>
                    {step.highlight && (
                      <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full absolute right-3 top-3">Key Strategy</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PASONA Logic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="text-emerald-400 w-6 h-6" />
              <h3 className="text-xl text-white font-medium">PASONA Law Implementation</h3>
            </div>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              セールスライティングの鉄則「PASONA」をUI構造に落とし込み、<br />
              ユーザーの心理状態に合わせて情報を提示しています。
            </p>

            <div className="grid gap-4">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 font-mono text-lg font-bold">P</div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Problem (問題提起)</h4>
                    <p className="text-xs text-slate-400">Section: <strong>Problem Areas</strong></p>
                    <p className="text-xs text-slate-500 mt-2">"なんとなく不調..." というターゲットの潜在的な悩みを言語化し、共感を呼ぶ。</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 font-mono text-lg font-bold">S</div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Solution (解決策)</h4>
                    <p className="text-xs text-slate-400">Section: <strong>Brand Story & Features</strong></p>
                    <p className="text-xs text-slate-500 mt-2">"86% Essence" と "Scientific Proof" で、論理的な解決策を提示。</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 font-mono text-lg font-bold">O</div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Offer (提案)</h4>
                    <p className="text-xs text-slate-400">Section: <strong>Shade Selector / CTA</strong></p>
                    <p className="text-xs text-slate-500 mt-2">"無料サンプル" というリスクのないオファーで、行動のハードルを極限まで下げる。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-900/10 border border-emerald-500/20 rounded-lg">
              <h5 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Behavioral Economics (行動経済学)</h5>
              <ul className="list-disc list-inside text-xs text-emerald-200/70 space-y-1">
                <li><strong>Loss Aversion</strong>: 「失敗したくない」心理に対し、「無料」「返金保証」を強調。</li>
                <li><strong>Anchoring</strong>: 定価(¥10,450)を見せた後に無料オファーを出し、お得感を演出。</li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicBreakdown;
