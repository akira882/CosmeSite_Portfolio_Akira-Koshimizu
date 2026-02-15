import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, BarChart3, Code2, ArrowRight } from 'lucide-react';

const ProjectInsight: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 mb-4 tracking-wider uppercase"
          >
            For Recruiters
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Project Production Insight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            本プロジェクトは、単なるWebデザインのデモではなく、<br className="hidden md:block" />
            ビジネス課題の解決とKPI達成を目的とした戦略的LPとして設計されています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1. Persona & Insight */}
          <InsightCard
            icon={<Target className="w-6 h-6 text-blue-500" />}
            title="Persona Strategy"
            delay={0.1}
          >
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <strong className="block text-slate-800 mb-1">Target Persona</strong>
                <p>28歳 丸の内OL。美意識が高く、オフィスの乾燥による「夕方の劣化」に深刻な悩みを持つ。</p>
              </div>
              <div>
                <strong className="block text-slate-800 mb-1">Core Insight</strong>
                <p>「隠す」ことへの罪悪感と、「肌に悪い」という懸念。これを払拭するため、機能訴求より先に「共感」と「信頼（スキンケア発想）」を配置。</p>
              </div>
            </div>
          </InsightCard>

          {/* 2. ADABAS Architecture */}
          <InsightCard
            icon={<Lightbulb className="w-6 h-6 text-amber-500" />}
            title="ADABAS Model"
            delay={0.2}
          >
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 w-4">A</span>
                <span>Attention: 没入感のあるFVで「世界観」を提示。</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 w-4">D</span>
                <span>Desire: Problemセクションで「オフィスの悩み」に深く共感。</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 w-4">B</span>
                <span>Belief: Brand Storyを早期に配置し、機能への納得感を醸成。</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 w-4">A</span>
                <span>Action: 心理変容後のCTAと、追従するSticky CTA。</span>
              </li>
            </ul>
          </InsightCard>

          {/* 3. KPI & Goals */}
          <InsightCard
            icon={<BarChart3 className="w-6 h-6 text-emerald-500" />}
            title="Target KPIs"
            delay={0.3}
          >
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <span>Est. CVR</span>
                <span className="font-bold text-emerald-600 text-lg">2.5%</span>
              </div>
              <p className="text-xs text-slate-500">※一般的LP（1%）に対し、Beliefコンテンツの強化により高水準を目指す。</p>

              <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <span>Micro CV</span>
                <span className="font-bold text-emerald-600 text-lg">15%</span>
              </div>
              <p className="text-xs text-slate-500">「成分へのこだわり」等の詳細閲覧率。</p>

              <div>
                <strong className="block text-slate-800 mb-1">LTV Strategy</strong>
                <p>短期的な刈り取りではなく、ブランド哲学への共感を優先し、継続率を高める設計。</p>
              </div>
            </div>
          </InsightCard>

          {/* 4. Tech Stack */}
          <InsightCard
            icon={<Code2 className="w-6 h-6 text-indigo-500" />}
            title="Tech & Performance"
            delay={0.4}
          >
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <strong className="block text-slate-800 mb-1">Modern Stack</strong>
                <p>React + Vite + Tailwind CSSによる、高パフォーマンスなコンポーネント指向開発。</p>
              </div>
              <div>
                <strong className="block text-slate-800 mb-1">UX Engineering</strong>
                <p>Framer Motionによるマイクロインタラクション。FVの画像のローディング制御によるCLS（Cumulative Layout Shift）防止。</p>
              </div>
              <div>
                <strong className="block text-slate-800 mb-1">Maintainability</strong>
                <p>コンポーネントの責務分離と、Atomic Designを意識したディレクトリ構造。</p>
              </div>
            </div>
          </InsightCard>
        </div>
      </div>
    </section>
  );
};

const InsightCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay: number }> = ({ icon, title, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
        {icon}
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default ProjectInsight;
