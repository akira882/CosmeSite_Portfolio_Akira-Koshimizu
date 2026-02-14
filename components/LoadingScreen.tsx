import React, { useEffect, useState } from 'react';
import { APP_NAME } from '../constants';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Simulate asset loading time
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 2000);

    const cleanup = setTimeout(() => {
      setShouldRender(false);
      onFinished();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onFinished]);

  if (!shouldRender) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-brand-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      style={{ opacity }}
    >
      <div className="text-center animate-pulse">
        <h1 className="font-display text-4xl md:text-5xl text-brand-900 tracking-widest uppercase mb-4">
          {APP_NAME}
        </h1>
        <div className="w-full max-w-[100px] h-[1px] bg-brand-300 mx-auto">
          <div className="w-full h-full bg-brand-800 animate-[width_2s_ease-out]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;