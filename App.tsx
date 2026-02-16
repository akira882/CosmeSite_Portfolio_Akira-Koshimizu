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
import StrategicBreakdown from './components/StrategicBreakdown';

const App: React.FC = () => {
  // ... existing code ...
  return (
    // ... existing JSX ...
    <main className="flex-grow">
      {/* ... existing sections ... */}

      {/* Design Process / Rationale */}
      <DesignProcess />

      {/* Strategic Breakdown (New - For Recruiters) */}
      <StrategicBreakdown />

      {/* UX Improvement Proposal */}
      <OrbisUXProposal />

      {/* ... */}
    </main>
    // ...
  );
};

        <Footer />
        <StickyCTA />
{/* Spacer for StickyCTA on mobile */ }
<div className="h-20 md:hidden"></div>
      </div >
    </>
  );
};

export default App;