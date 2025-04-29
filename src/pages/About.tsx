
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
      
      <ScrollingText text="Entrepreneur • Designer • Creative • Human Disaster™ • Entrepreneur • Designer • Creative • Human Disaster™" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <div id="timeline" ref={timelineRef} className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 left-[15px] w-1 bg-gradient-to-b from-netflix via-purpleask to-yellowask"></div>
            
            <TimelineItem 
              date="Sept 2023 - Present" 
              title="Gudbud.in" 
              organization="Founder" 
              description="Founded a student-focused online store specializing in quirky, relatable apparel for engineers. Launched and managed all aspects of the business from design to delivery."
            />
            
            <TimelineItem 
              date="Nov 2023 - Present" 
              title="Annam Authentic" 
              organization="Chief Executive Officer" 
              description="Leading Malleshwaram and Sadashivnagar's largest vegetarian catering service specializing in authentic Brahmin cuisine. Managing all aspects including marketing, delivery, cooking, and business operations."
            />
            
            <TimelineItem 
              date="2021 - Oct 2024" 
              title="Freelance Copywriter" 
              organization="Self-employed" 
              description="Created compelling content for various clients, crafting narratives that engage and convert audiences."
            />
            
            <TimelineItem 
              date="2022 - 2024" 
              title="Social Media Designer" 
              organization="Freelance" 
              description="Designed numerous posters and posts for various social media accounts, developing a keen eye for visual storytelling."
            />
            
            <TimelineItem 
              date="June 2023 - Present" 
              title="Student" 
              organization="SRI SRI RAVISHANKAR VIDYAMANDIR" 
              description="Pursuing Pre-University education with a focus on Psychology."
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
                <h4 className="font-bold text-lg mb-2">Entrepreneurial</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Business Development</li>
                  <li>Brand Building</li>
                  <li>Service Delivery</li>
                  <li>Team Leadership</li>
                  <li>Strategic Planning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Creative</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Copywriting</li>
                  <li>Social Media Marketing</li>
                  <li>Design & Poster Making</li>
                  <li>Content Creation</li>
                  <li>Prompt Engineering</li>
                </ul>
              </div>
            </div>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Certifications" 
            description="My professional qualifications"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Prompt Design in Vertex AI (Google Cloud)</li>
              <li>Introduction to Generative AI (Google Cloud)</li>
            </ul>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Interests" 
            description="The human side of me"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Chess enthusiast - I love the strategic depth and mental challenge</li>
              <li>Vegetarian cooking - Perfecting authentic recipes</li>
              <li>Problem-solving through creative technological solutions</li>
              <li>Building meaningful connections and communities</li>
              <li>Crafting compelling narratives through various mediums</li>
            </ul>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Education" 
            description="Academic background"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>SRI SRI RAVISHANKAR VIDYAMANDIR - Pre University College, Psychology (June 2023 - March 2025)</li>
              <li>BP Indian Public School - High School Diploma, General Studies (2010 - 2021)</li>
            </ul>
          </CollapsibleCard>
          
          <div className="p-6 card-glass rounded-xl">
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <p className="text-muted-foreground mb-4">Download my complete resume with full details of ventures, skills, and experiences.</p>
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
