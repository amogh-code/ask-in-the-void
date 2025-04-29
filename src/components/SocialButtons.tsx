
import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialButtonsProps {
  className?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-netflix hover:bg-netflix hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-purpleask hover:bg-purpleask hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-babypink hover:bg-babypink hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-yellowask hover:bg-yellowask hover:text-black transition-all duration-300 group"
        asChild
      >
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
    </div>
  );
};

export default SocialButtons;
