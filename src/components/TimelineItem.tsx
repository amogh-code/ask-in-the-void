
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
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
        <div 
          className={cn(
            "w-px bg-gradient-to-b from-netflix via-purpleask to-yellowask h-full",
            isFirst ? "top-1/2" : "",
            isLast ? "bottom-1/2" : ""
          )}
        ></div>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative py-8">
        {/* Circle */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purpleask bg-background animate-pulse"></div>
        
        {/* Date - Always visible on mobile, conditionally positioned on desktop */}
        <div 
          className={cn(
            "text-center md:text-right md:pr-8 font-semibold text-sm text-netflix md:col-span-1",
            isLeft ? "md:col-start-2" : "md:col-start-1",
            "md:row-start-1 flex flex-col justify-center"
          )}
        >
          <span className="bg-muted/20 px-3 py-1 rounded-full inline-block">{date}</span>
        </div>
        
        {/* Content - Always on the right side on mobile, conditionally positioned on desktop */}
        <div 
          className={cn(
            "md:col-span-1 bg-card/20 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300",
            isLeft ? "md:col-start-1" : "md:col-start-2",
            "md:row-start-1"
          )}
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{organization}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
