import React from 'react';
import { APP_NAME } from '../constants';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display text-2xl tracking-widest uppercase text-white mb-6">
              {APP_NAME}
            </h2>
            <p className="font-serif text-brand-300 mb-6 text-sm leading-relaxed">
              科学と自然の融合。<br/>
              あなたの本来の美しさを引き出す、<br/>
              ラグジュアリー・コスメティクス。
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-sans uppercase text-xs tracking-widest text-brand-400 mb-6">Customer Care</h3>
            <ul className="space-y-4 font-sans text-sm text-brand-200">
              <li className="hover:text-white cursor-pointer transition-colors">お問い合わせ</li>
              <li className="hover:text-white cursor-pointer transition-colors">配送・返品について</li>
              <li className="hover:text-white cursor-pointer transition-colors">よくある質問</li>
              <li className="hover:text-white cursor-pointer transition-colors">注文履歴</li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans uppercase text-xs tracking-widest text-brand-400 mb-6">Legal</h3>
            <ul className="space-y-4 font-sans text-sm text-brand-200">
              <li className="hover:text-white cursor-pointer transition-colors">プライバシーポリシー</li>
              <li className="hover:text-white cursor-pointer transition-colors">特定商取引法に基づく表記</li>
              <li className="hover:text-white cursor-pointer transition-colors">利用規約</li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans uppercase text-xs tracking-widest text-brand-400 mb-6">Newsletter</h3>
            <p className="font-serif text-sm text-brand-300 mb-4">
              新作情報や限定イベントのご案内をお届けします。
            </p>
            <form className="flex border-b border-brand-500 pb-2">
              <input 
                type="email" 
                placeholder="メールアドレスを入力" 
                className="bg-transparent w-full outline-none text-white placeholder-brand-500 font-sans text-sm"
              />
              <button className="text-brand-400 uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">
                登録
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-brand-500">
          <p>&copy; 2024 {APP_NAME} Cosmetics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Japan (JPY)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;