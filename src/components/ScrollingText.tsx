
import React from 'react';

interface ScrollingTextProps {
  text: string;
  speed?: number;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden py-3 bg-gradient-to-r from-royalblack via-muted to-royalblack">
      <div 
        className="whitespace-nowrap animate-text-scroll"
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        <span className="inline-block mx-4 text-xl font-medium">{text}</span>
        <span className="inline-block mx-4 text-xl font-medium">{text}</span>
      </div>
    </div>
  );
};

export default ScrollingText;
