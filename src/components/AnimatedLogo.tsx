
import React, { useState, useEffect } from 'react';

const AnimatedLogo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className="text-netflix font-netflix text-5xl md:text-7xl font-bold relative cursor-pointer"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      <span className={`inline-block transition-transform duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>A</span>
      <span className={`inline-block transition-transform duration-500 ${isAnimating ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.1s' }}>S</span>
      <span className={`inline-block transition-transform duration-500 ${isAnimating ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.2s' }}>K</span>
    </div>
  );
};

export default AnimatedLogo;
