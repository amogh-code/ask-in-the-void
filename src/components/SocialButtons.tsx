
import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin, Github, Phone, Mail, MessageSquare } from 'lucide-react';
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
        <a href="https://www.youtube.com/channel/UCtoXVCLToZyREW3V2HICgTw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-purpleask hover:bg-purpleask hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://www.instagram.com/amogh.kris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
        <a href="https://www.linkedin.com/in/amogh-sai-krishnan-1506a8212" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon" 
        className="bg-transparent border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://wa.link/hhleux" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageSquare className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-white transition-all duration-300 group"
        asChild
      >
        <a href="https://github.com/amogh-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5 group-hover:animate-bounce" />
        </a>
      </Button>
    </div>
  );
};

export default SocialButtons;
