import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import BrandStory from './components/BrandStory';
import Features from './components/Features';
import ShadeSelector from './components/ShadeSelector';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LoadingScreen from './components/LoadingScreen';
import Ritual from './components/Ritual';
import ProjectInsight from './components/ProjectInsight';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onFinished={() => setIsLoaded(true)} />

      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navigation />

        <main className="flex-grow">
          {/* A: Attention - First View */}
          <Hero />

          {/* D: Desire - Addressing the pain point (PAS Model) */}
          <Problem />

          {/* B: Belief - Brand Story & Scientific Proof (The Core) */}
          <BrandStory />

          {/* B: Belief - Scientific Details */}
          <Features />

          {/* Emotional Bridge / Brand Story Image */}
          {/* Emotional Bridge / Brand Story Image */}
          <div className="h-[400px] md:h-[600px] bg-fixed bg-center bg-cover relative bg-brand-900"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2574&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-brand-900/70 backdrop-blur-md p-10 md:p-16 border border-white/10 max-w-lg mx-4 text-center shadow-2xl relative overflow-hidden group">
                {/* Subtle shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <h3 className="text-white font-serif text-2xl md:text-3xl mb-8 tracking-wide drop-shadow-lg leading-relaxed">
                  その輝きは、<br />自信へと変わる。
                </h3>
                <button className="text-white/90 font-sans uppercase text-xs tracking-widest border-b border-white/50 pb-1 hover:text-white hover:border-white transition-all duration-300">
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

          {/* Project Insight & Strategy (For Recruiters) */}
          <ProjectInsight />
        </main>

        <Footer />
        <StickyCTA />
        {/* Spacer for StickyCTA on mobile */}
        <div className="h-20 md:hidden"></div>
      </div>
    </>
  );
};

export default App;