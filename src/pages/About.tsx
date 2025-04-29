import React, { useEffect, useRef } from 'react';
import { getElementOffsetTop, scrollToElement } from '@/lib/domUtils';
import TimelineItem from '@/components/TimelineItem';
import CollapsibleCard from '@/components/CollapsibleCard';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import ScrollingText from '@/components/ScrollingText';

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle URL hash for direct navigation to sections
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    }
    
    // ... any other effects
  }, []);
  
  const handleResumeDownload = () => {
    // In a real app, link to an actual resume file
    alert('Resume download functionality would be implemented here!');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-red">
        The Walking Resume <span className="text-muted-foreground">(With a Pulse)</span>
      </h1>
      
      <ScrollingText text="Designer • Developer • Entrepreneur • Human Disaster™ • Designer • Developer • Entrepreneur • Human Disaster™" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <div id="timeline" ref={timelineRef} className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 left-[15px] w-1 bg-gradient-to-b from-netflix via-purpleask to-yellowask"></div>
            
            <TimelineItem 
              date="2023 - Present" 
              title="Senior Developer" 
              organization="Amazing Tech Co." 
              description="Leading development of scalable applications using React, TypeScript, and Node.js. Mentored junior developers and improved team performance by 40%."
            />
            
            <TimelineItem 
              date="2020 - 2023" 
              title="Full Stack Developer" 
              organization="Innovative Solutions Inc." 
              description="Developed and maintained e-commerce platforms, implemented CI/CD pipelines, and reduced load times by 60%."
            />
            
            <TimelineItem 
              date="2019 - 2020" 
              title="Web Developer Intern" 
              organization="StartUp Growth" 
              description="Assisted in frontend development using React, conducted user testing, and created documentation for internal tools."
            />
            
            <TimelineItem 
              date="2015 - 2019" 
              title="Computer Science Degree" 
              organization="Tech University" 
              description="Graduated with honors. Specialized in Web Technologies and Artificial Intelligence."
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <CollapsibleCard 
            title="Skills" 
            description="What I can do"
            defaultOpen={true}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Technical</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>SQL & NoSQL</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Soft Skills</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Project Management</li>
                  <li>Team Leadership</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>User Experience Design</li>
                </ul>
              </div>
            </div>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Fun Facts" 
            description="The human side of me"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>I've visited 15 countries and counting</li>
              <li>I can solve a Rubik's cube in under 2 minutes</li>
              <li>I collect vintage programming books</li>
              <li>I make artisanal coffee as a hobby</li>
              <li>I once debugged code in my sleep (true story)</li>
            </ul>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Goals" 
            description="Where I'm headed"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Contribute to open source AI projects</li>
              <li>Launch a tech education platform</li>
              <li>Speak at international developer conferences</li>
              <li>Write a book on modern web development</li>
              <li>Mentor 100+ junior developers</li>
            </ul>
          </CollapsibleCard>
          
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <p className="text-muted-foreground mb-4">Download my complete resume with full details of projects, skills, and experiences.</p>
            <Button onClick={handleResumeDownload} className="w-full">
              <FileDown className="mr-2 h-4 w-4" /> Download PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
