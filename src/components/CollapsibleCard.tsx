
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CollapsibleCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  description,
  children,
  className,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div 
      className={cn(
        "border border-border bg-card/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300",
        className
      )}
    >
      <button
        onClick={toggleOpen}
        className="w-full text-left p-5 flex justify-between items-center hover:bg-muted/20 transition-colors"
      >
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-5 border-t border-border/50">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
