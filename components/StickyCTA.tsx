import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { PRODUCT_NAME } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 700px)
      setIsVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-brand-100 p-4 md:hidden z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-300">
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <p className="font-display text-brand-900 text-xs truncate">Lumière Éclat</p>
          <p className="font-sans text-xs text-brand-500">¥10,450</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-900 text-white px-6 py-3 font-sans uppercase text-xs tracking-widest font-bold hover:bg-brand-800 transition-colors shadow-lg">
          <ShoppingBag className="w-3 h-3" />
          カートに入れる
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;