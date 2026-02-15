import React from 'react';
import { motion } from 'framer-motion';

const OrbisUXProposal: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-brand-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-300 block mb-4">
            UX Improvement Proposal
          </span>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            オルビスの「ここち」を、<br />
            Web体験でどう拡張するか。
          </h2>
          <p className="text-brand-100 leading-relaxed max-w-2xl mx-auto">
            貴社のブランドメッセージ「ここちを美しく。」を解釈し、<br />
            既存のEC体験における「探すストレス」を「選ぶここちよさ」に変えるためのご提案です。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-brand-500/30 rounded text-brand-200 text-xs tracking-wider mb-2">
                PROPOSAL CONCEPT
              </div>
              <h3 className="text-2xl font-display font-medium">
                Data-Driven Personalization<br />
                <span className="text-lg opacity-80 font-sans">「LINE × データ」で叶える、1to1の信頼構築</span>
              </h3>
              <p className="text-sm text-brand-100 leading-loose">
                3,300万人以上のLINE友だち基盤を活用し、蓄積された肌データや行動履歴に基づいて、
                <span className="text-white border-b border-brand-400 mx-1">「その人の今の悩みと価値観」</span>に
                最適化されたLPやコンテンツを動的に生成するUXを提案します。
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center text-xs font-bold border border-brand-600 shrink-0">A</div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">不安への寄り添い（Empathy）</h4>
                    <p className="text-xs text-brand-200">「肌の変化」を感じ始めたユーザーには、共感と安心感を与えるコンテンツを優先表示。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center text-xs font-bold border border-brand-600 shrink-0">B</div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">UGCの戦略的活用（Trust）</h4>
                    <p className="text-xs text-brand-200">自分に近い属性（年齢・肌質）のリアルな口コミ（UGC）を自動抽出し、信頼性を強化。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wireframe / Visual Representation */}
            <div className="flex-1 w-full bg-white rounded-lg p-6 text-slate-800 shadow-inner">
              <div className="border-b border-slate-100 pb-4 mb-4 flex justify-between items-center bg-[#06C755] -m-6 mb-4 p-4 rounded-t-lg">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="bg-white text-[#06C755] rounded-full w-5 h-5 flex items-center justify-center text-[10px]">L</span>
                  LINE公式アカウント
                </span>
                <span className="material-icons text-white text-sm">×</span>
              </div>

              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                <div className="bg-slate-100 p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg text-[11px] text-slate-600 leading-relaxed relative">
                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#06C755] rounded-full"></span>
                  Akiraさん、最近「夕方の乾燥」が気になりませんか？<br />
                  同じ悩みを持つ30代の方には、このケアが選ばれています。
                </div>
              </div>

              <div className="ml-11 mb-2">
                <div className="bg-white border boundary-slate-200 rounded-lg p-2 shadow-sm">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-8 h-8 bg-slate-100 rounded"></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-700">オルビスユー エッセンスローション</p>
                      <div className="flex text-[8px] text-yellow-500">★★★★★ <span className="text-slate-400 ml-1">(4.8)</span></div>
                    </div>
                  </div>
                  <p className="text-[9px] text-slate-500 bg-slate-50 p-2 rounded">
                    「とろっとしているのに、ぐんぐん入っていく感覚に感動しました！」(32歳/乾燥肌)
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button className="bg-[#06C755] text-white text-[10px] py-2 px-6 rounded-full font-bold shadow-sm">
                  詳しく見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbisUXProposal;
