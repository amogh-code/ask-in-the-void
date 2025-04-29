
import React, { useState, useEffect } from 'react';

interface ThankYouAnimationProps {
  isVisible: boolean;
  onClose: () => void;
}

const ThankYouAnimation: React.FC<ThankYouAnimationProps> = ({ isVisible, onClose }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; color: string; }[]>([]);
  
  useEffect(() => {
    if (isVisible) {
      // Create particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 2,
        color: ['#E50914', '#8B5CF6', '#FFD700', '#FFC0CB', '#FFFFFF'][Math.floor(Math.random() * 5)]
      }));
      
      setParticles(newParticles);
      
      // Close after animation
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="relative">
        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              borderRadius: '50%',
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}
        
        {/* Message */}
        <div className="text-center animate-scale-in">
          <h2 className="text-3xl font-bold mb-2 text-gradient-red">Message Launched Into the Void 🚀</h2>
          <p className="text-muted-foreground">I'll get back to you soon!</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouAnimation;
