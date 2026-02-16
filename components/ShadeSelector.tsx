import React, { useState } from 'react';
import { SHADES } from '../constants';
import { ProductShade } from '../types';
import { Check } from 'lucide-react';

const ShadeSelector: React.FC = () => {
  const [selectedShade, setSelectedShade] = useState<ProductShade>(SHADES[2]);

  return (
    <section id="shades" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* Product Visual */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent rounded-full opacity-50 blur-3xl"></div>
          {/* Simulated Product Image Change based on shade */}
          <div className="relative z-10 w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-white shadow-2xl rounded-t-[100px] rounded-b-[40px] flex items-center justify-center p-8 transition-colors duration-500 overflow-hidden border border-brand-100">
            <div className="absolute inset-x-0 bottom-0 h-2/3 transition-colors duration-700 opacity-20" style={{ backgroundColor: selectedShade.hex }}></div>
            <div className="text-center relative z-20">
              <h3 className="font-display text-4xl text-brand-900 tracking-wider mb-2">LUMIÈRE</h3>
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-brand-500 mb-12">Foundation</p>
              <div className="w-full h-[200px] bg-gradient-to-b from-transparent to-black/5 rounded-lg flex items-end justify-center pb-4">
                <span className="font-sans text-3xl font-bold text-brand-800/80">{selectedShade.id}</span>
              </div>
            </div>
            {/* Gloss effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Selector Interface */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-display text-4xl md:text-5xl text-brand-900 mb-4">Find Your Perfect Match</h2>
          <p className="font-serif text-brand-600 mb-10 text-lg">
            全8色。あなたの本来の肌色を活かす、<br />運命の1色をお選びください。
          </p>

          <div className="mb-10">
            <h3 className="font-sans uppercase text-xs tracking-widest text-brand-500 mb-4">Select Shade</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {SHADES.map((shade) => (
                <button
                  key={shade.id}
                  onClick={() => setSelectedShade(shade)}
                  className={`group relative w-10 h-10 rounded-full shadow-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 ${selectedShade.id === shade.id ? 'ring-2 ring-offset-2 ring-brand-900 scale-110' : ''}`}
                  style={{ backgroundColor: shade.hex }}
                  aria-label={`Select shade ${shade.name}`}
                >
                  {selectedShade.id === shade.id && (
                    <span className="absolute inset-0 flex items-center justify-center text-black/50">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-brand-900 text-white text-[10px] w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded z-20">
                    {shade.name}
                  </span>
                </button>
              ))}
            </div>
            <button className="mt-4 text-xs font-sans underline text-brand-500 hover:text-brand-800">
              全8色の詳細チャートを見る
            </button>
          </div>

          <div className="bg-white p-8 border border-brand-100 shadow-sm animate-in fade-in duration-500 key={selectedShade.id}">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-serif text-xl md:text-2xl text-brand-900 mb-2">{selectedShade.name}</h4>
                <p className="font-sans text-sm text-brand-500">{selectedShade.description}</p>
              </div>
              <div className="text-right">
                <span className="font-sans font-bold text-lg text-brand-900 block">¥10,450</span>
                <span className="text-[10px] text-brand-400">(税込)</span>
              </div>
            </div>
            <div className="h-[1px] bg-brand-100 w-full my-6"></div>
            <div className="flex flex-col gap-4">
              <button className="w-full bg-brand-800 text-white py-4 rounded-sm hover:bg-brand-700 transition-colors duration-300 font-sans tracking-widest text-sm">
                無料サンプルを試す
              </button>
              <p className="text-center text-xs text-brand-400 font-sans">
                <span className="inline-block border-b border-brand-200 pb-0.5">※お一人様1回限り・全色お届け</span>
              </p>
              <button className="px-6 py-4 border border-brand-200 text-brand-900 font-sans uppercase tracking-widest text-sm hover:border-brand-900 transition-colors">
                バーチャル試着
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadeSelector;