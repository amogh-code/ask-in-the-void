
import React, { useState, useEffect } from 'react';

const PhilosophicalQuotes: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const quotes = [
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Happiness is not an ideal of reason, but of imagination.", author: "Immanuel Kant" },
    { text: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The question is not what you look at, but what you see.", author: "Henry David Thoreau" },
    { text: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="w-full overflow-hidden py-4 bg-gradient-to-r from-royalblack via-muted to-royalblack border-t border-border/20">
      <div 
        className="whitespace-nowrap animate-text-scroll"
        style={{ 
          animationDuration: '40s',
        }}
      >
        {quotes.map((quote, index) => (
          <span key={index} className="inline-block mx-8 text-lg font-medium">
            "{quote.text}" — <span className="text-netflix">{quote.author}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PhilosophicalQuotes;
