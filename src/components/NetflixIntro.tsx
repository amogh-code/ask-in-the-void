
import React, { useState, useEffect } from 'react';

interface NetflixIntroProps {
  onIntroComplete: () => void;
}

const NetflixIntro: React.FC<NetflixIntroProps> = ({ onIntroComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => {
        onIntroComplete();
      }, 500); // Extra time for fade out animation
    }, 3500); // Duration of the intro animation
    
    return () => clearTimeout(timer);
  }, [onIntroComplete]);
  
  return (
    <div className={`netflix-intro-container ${!showIntro ? 'animate-fade-out' : ''}`}>
      <div className="relative flex flex-col items-center justify-center">
        <div className="text-netflix font-netflix text-9xl md:text-[12rem] font-bold animate-netflix-intro netflix-shadow">
          ASK
        </div>
        <div className="absolute bottom-0 transform translate-y-full mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="w-16 h-1 bg-netflix rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NetflixIntro;
