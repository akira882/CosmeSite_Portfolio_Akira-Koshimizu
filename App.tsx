import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import ShadeSelector from './components/ShadeSelector';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LoadingScreen from './components/LoadingScreen';
import Ritual from './components/Ritual';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onFinished={() => setIsLoaded(true)} />
      
      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navigation />
        
        <main className="flex-grow">
          {/* A: Attention */}
          <Hero />
          
          {/* D: Desire - Addressing the pain point */}
          <section id="philosophy" className="py-24 md:py-32 bg-brand-50 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-500 block mb-6">The Philosophy</span>
              <h2 className="font-serif text-2xl md:text-4xl text-brand-900 leading-relaxed mb-10">
                夕方5時。<br className="md:hidden" />鏡を見るのが怖くなくなる。<br/>
                それは、メイクとスキンケアの<br className="md:hidden" />境界線を消したから。
              </h2>
              <p className="font-sans text-brand-600 leading-8 max-w-2xl mx-auto text-base md:text-lg">
                「ファンデーションを塗ると、肌が呼吸できない気がする」<br/>
                そんな貴女の声から、リュミエール エクラは生まれました。<br/><br/>
                つけている間中、美容液成分が角層深くまで浸透。<br/>
                落とした瞬間、もちもちとした手触りに驚くはず。<br/>
                これは、もはや「色づくスキンケア」です。
              </p>
            </div>
          </section>

          {/* B: Belief - Scientific Proof */}
          <Features />
          
          {/* Emotional Bridge / Brand Story */}
          <div className="h-[400px] md:h-[600px] bg-fixed bg-center bg-cover relative" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2574&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-brand-900/30 flex items-center justify-center">
               <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 border border-white/20 max-w-lg mx-4 text-center shadow-2xl">
                  <h3 className="text-white font-serif text-2xl md:text-3xl mb-6 tracking-wide">
                    その輝きは、<br/>自信へと変わる。
                  </h3>
                  <button className="text-white font-sans uppercase text-xs tracking-widest border-b border-white pb-1 hover:text-brand-100 transition-colors hover:border-brand-100">
                    サステナビリティへの取り組み
                  </button>
               </div>
            </div>
          </div>

          {/* A: Action - Selection */}
          <ShadeSelector />
          
          {/* S: Satisfaction - Usage Ritual */}
          <Ritual />

          {/* B: Belief/Satisfaction - Social Proof */}
          <Reviews />
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default App;