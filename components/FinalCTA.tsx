import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 text-white text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-water-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] bg-brand-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
          迷っているあなたへ。<br />
          まずは、自分の肌で答え合わせを。
        </h2>
        <p className="font-sans text-brand-100 text-sm md:text-base mb-12 leading-loose">
          86%の美容液成分が叶える「水膜」ような仕上がり。<br />
          その感動を、リスクのない無料サンプルで体験してください。
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="group relative bg-white text-brand-900 px-12 py-5 min-w-[300px] rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3 font-sans font-bold tracking-widest text-sm">
              無料サンプルを申し込む
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-water-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          <p className="text-xs text-brand-300 font-sans mt-2">
            ※お一人様1回限り・全色お届け
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
