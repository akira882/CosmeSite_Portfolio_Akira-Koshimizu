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
                "Feeling" Search<br />
                <span className="text-lg opacity-80 font-sans">肌の「感覚」で選ぶ、新しい検索体験</span>
              </h3>
              <p className="text-sm text-brand-100 leading-loose">
                従来の「カテゴリ（化粧水・乳液）」や「肌悩み（乾燥・ニキビ）」検索に加え、
                <span className="text-white border-b border-brand-400 mx-1">「今の肌が求める感覚」</span>で直感的に商品を探せるUIを提案します。
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center text-xs font-bold border border-brand-600 shrink-0">A</div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">とろぱしゃ（Toro-Pasha）</h4>
                    <p className="text-xs text-brand-200">濃密なうるおいを感じながら、みずみずしく浸透する感覚。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center text-xs font-bold border border-brand-600 shrink-0">B</div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">ふわもち（Fuwa-Mochi）</h4>
                    <p className="text-xs text-brand-200">柔らかい泡に包まれ、洗い上がりは吸いつくような弾力。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wireframe / Visual Representation */}
            <div className="flex-1 w-full bg-white rounded-lg p-6 text-slate-800 shadow-inner">
              <div className="border-b border-slate-100 pb-4 mb-4 flex justify-between items-center">
                <span className="font-bold text-sm text-slate-500">ORBIS</span>
                <span className="material-icons text-slate-400 text-sm">menu</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 text-center">今の気分は？</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-200 cursor-pointer hover:bg-blue-50 transition-colors">
                  <span className="block text-xl mb-1">💧</span>
                  <span className="text-[10px] font-bold text-slate-600">みずみずしい</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-200 cursor-pointer hover:bg-pink-50 transition-colors">
                  <span className="block text-xl mb-1">☁️</span>
                  <span className="text-[10px] font-bold text-slate-600">ふんわり</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-200 cursor-pointer hover:bg-green-50 transition-colors">
                  <span className="block text-xl mb-1">🌿</span>
                  <span className="text-[10px] font-bold text-slate-600">さっぱり</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-center border border-slate-200 cursor-pointer hover:bg-yellow-50 transition-colors">
                  <span className="block text-xl mb-1">🍯</span>
                  <span className="text-[10px] font-bold text-slate-600">しっとり</span>
                </div>
              </div>

              <div className="bg-brand-50 p-3 rounded border border-brand-100 flex gap-3 items-center">
                <div className="w-10 h-10 bg-slate-200 rounded-sm"></div>
                <div>
                  <p className="text-[10px] font-bold text-brand-800">オルビスユー エッセンスローション</p>
                  <p className="text-[8px] text-brand-400">「とろぱしゃ」な使い心地で人気No.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbisUXProposal;
