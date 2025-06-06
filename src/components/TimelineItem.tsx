
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  isLeft?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
  icon?: React.ReactNode; // Added icon prop
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  organization,
  description,
  isLeft = false,
  isFirst = false,
  isLast = false,
  className,
  icon, // Default icon is handled in the component
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:ml-2 top-0 bottom-0">
        <div 
          className={cn(
            "w-px bg-gradient-to-b from-netflix via-purpleask to-yellowask h-full",
            isFirst ? "top-1/2" : "",
            isLast ? "bottom-1/2" : ""
          )}
        ></div>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 relative py-4 md:py-8">
        {/* Circle with icon */}
        <div className="absolute left-1/2 top-4 md:top-8 -translate-x-1/2 md:left-0 md:translate-x-0 md:ml-2 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-purpleask bg-background flex items-center justify-center">
            {icon || <span className="w-4 h-4 rounded-full bg-purpleask animate-pulse"></span>}
          </div>
        </div>
        
        {/* Date - Mobile: above content, Desktop: on the side */}
        <div className="text-center md:text-right md:pr-8 font-semibold text-sm text-netflix md:w-24 md:flex-shrink-0 mb-2 md:mb-0">
          <span className="bg-muted/20 px-3 py-1 rounded-full inline-block">{date}</span>
        </div>
        
        {/* Content - Full width on mobile, condensed on desktop */}
        <div className="bg-card/20 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg ml-0 md:ml-8 group">
          <h3 className="text-lg font-semibold group-hover:text-netflix transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{organization}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
