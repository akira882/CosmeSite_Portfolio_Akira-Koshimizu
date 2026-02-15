import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy', label: 'こだわり' },
    { name: 'Science', href: '#science', label: '成分について' },
    { name: 'Shades', href: '#shades', label: '色選び' },
    { name: 'Reviews', href: '#reviews', label: 'レビュー' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-brand-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="text-center md:text-left flex-1 md:flex-none">
          <h1 className={`font-display font-bold tracking-widest uppercase transition-colors ${isScrolled ? 'text-brand-900 text-xl' : 'text-brand-900 md:text-white text-2xl'}`}>
            {APP_NAME}
          </h1>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex space-x-12 ${isScrolled ? 'text-brand-800' : 'text-white'}`}>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Cart/CTA */}
        <div className={`flex items-center space-x-6 ${isScrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'}`}>
          <button className="hidden md:block font-serif italic text-lg hover:underline text-sm">
            ログイン
          </button>
          <button className="relative">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] p-6 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            className="absolute top-6 left-6 text-brand-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-xl text-brand-900 tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;