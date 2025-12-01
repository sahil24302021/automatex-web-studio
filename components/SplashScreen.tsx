import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Minimum display time (1.5s) before starting fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // 2. Wait for fade out animation to finish (0.7s) before unmounting
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2200); // 1500ms + 700ms buffer

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center px-4 animate-fade-in-up">
        <div className="mb-6 transform transition-transform duration-1000 hover:scale-105">
           {/* This now renders the uploaded image via the updated Logo component */}
           <Logo className="w-32 h-32 md:w-40 md:h-40" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight text-center">
          AutomateX Web Studio
        </h1>
        <p className="mt-2 text-slate-500 font-medium tracking-wide text-sm uppercase">
          Innovate. Automate. Grow.
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;