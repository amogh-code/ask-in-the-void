
import React, { useEffect, useRef } from 'react';
import { getElementOffsetTop, scrollToElement } from '@/lib/domUtils';
import TimelineItem from '@/components/TimelineItem';
import CollapsibleCard from '@/components/CollapsibleCard';
import { Button } from '@/components/ui/button';
import { FileDown, Book, Code, MapPin, ChessKnight } from 'lucide-react';
import ScrollingText from '@/components/ScrollingText';
import PhilosophicalQuotes from '@/components/PhilosophicalQuotes';

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
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-gradient-red text-center md:text-left">
        The Walking Resume <span className="text-muted-foreground">(With a Pulse)</span>
      </h1>
      
      <ScrollingText text="Entrepreneur • Designer • Creative • Human Disaster™ • Chess Enthusiast • Psychology Appreciator" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div id="timeline" ref={timelineRef} className="space-y-8 md:space-y-0 relative">
            <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 md:left-[15px] w-1 bg-gradient-to-b from-netflix via-purpleask to-yellowask"></div>
            
            <TimelineItem 
              date="Sept 2023 - Present" 
              title="Gudbud.in" 
              organization="Founder" 
              description="Founded a student-focused online store specializing in quirky, relatable apparel for engineers. Launched and managed all aspects of the business from design to delivery."
              icon={<Code className="h-4 w-4 text-netflix" />}
            />
            
            <TimelineItem 
              date="Nov 2023 - Present" 
              title="Annam Authentic" 
              organization="Chief Executive Officer" 
              description="Leading Malleshwaram and Sadashivnagar's largest vegetarian catering service specializing in authentic Brahmin cuisine. Managing all aspects including marketing, delivery, cooking, and business operations."
              icon={<MapPin className="h-4 w-4 text-netflix" />}
            />
            
            <TimelineItem 
              date="2021 - Oct 2024" 
              title="Freelance Copywriter" 
              organization="Self-employed" 
              description="Created compelling content for various clients, crafting narratives that engage and convert audiences."
              icon={<Book className="h-4 w-4 text-netflix" />}
            />
            
            <TimelineItem 
              date="2022 - 2024" 
              title="Social Media Designer" 
              organization="Freelance" 
              description="Designed numerous posters and posts for various social media accounts, developing a keen eye for visual storytelling."
              icon={<Code className="h-4 w-4 text-netflix" />}
            />
            
            <TimelineItem 
              date="June 2023 - Present" 
              title="Student" 
              organization="SRI SRI RAVISHANKAR VIDYAMANDIR" 
              description="Pursuing Pre-University education with a focus on Psychology."
              icon={<Book className="h-4 w-4 text-netflix" />}
            />
          </div>
        </div>
        
        <div className="space-y-4 md:space-y-6 order-1 lg:order-2 mb-8 lg:mb-0">
          <CollapsibleCard 
            title="Skills" 
            description="What I can do"
            defaultOpen={true}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-netflix" />
                  Entrepreneurial
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Business Development</li>
                  <li>Brand Building</li>
                  <li>Service Delivery</li>
                  <li>Team Leadership</li>
                  <li>Strategic Planning</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <ChessKnight className="h-4 w-4 mr-2 text-netflix" />
                  Creative
                </h4>
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
              <li className="flex items-start">
                <Code className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Prompt Design in Vertex AI (Google Cloud)</span>
              </li>
              <li className="flex items-start">
                <Code className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Introduction to Generative AI (Google Cloud)</span>
              </li>
            </ul>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Interests" 
            description="The human side of me"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li className="flex items-start">
                <ChessKnight className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Chess enthusiast - I love the strategic depth and mental challenge</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Vegetarian cooking - Perfecting authentic recipes</span>
              </li>
              <li className="flex items-start">
                <Code className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Problem-solving through creative technological solutions</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Exploring new places and cultures through travel</span>
              </li>
              <li className="flex items-start">
                <Book className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>Delving into psychological concepts and philosophical ideas</span>
              </li>
            </ul>
          </CollapsibleCard>
          
          <CollapsibleCard 
            title="Education" 
            description="Academic background"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li className="flex items-start">
                <Book className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>SRI SRI RAVISHANKAR VIDYAMANDIR - Pre University College, Psychology (June 2023 - March 2025)</span>
              </li>
              <li className="flex items-start">
                <Book className="h-4 w-4 mr-2 mt-1 text-netflix flex-shrink-0" />
                <span>BP Indian Public School - High School Diploma, General Studies (2010 - 2021)</span>
              </li>
            </ul>
          </CollapsibleCard>
          
          <div className="p-6 card-glass rounded-xl transform transition-all duration-300 hover:scale-[1.01] shadow-lg hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FileDown className="h-5 w-5 mr-2 text-netflix" /> Resume
            </h3>
            <p className="text-muted-foreground mb-4">Download my complete resume with full details of ventures, skills, and experiences.</p>
            <Button onClick={handleResumeDownload} className="w-full">
              <FileDown className="mr-2 h-4 w-4" /> Download PDF Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 py-8 px-6 bg-card/20 backdrop-blur-sm border border-border rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gradient-purple">My Philosophy</h2>
        <p className="text-lg mb-4">
          As a student of psychology and an appreciator of philosophy, I believe in the power of understanding human behavior and thought processes to create more meaningful connections and experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-border/50 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
            <h3 className="font-semibold mb-2 text-netflix">Psychological Perspective</h3>
            <p>
              I'm fascinated by how our minds work and how understanding psychological principles can help us build better products, services, and relationships. My psychology background influences my approach to problem-solving and user experience design.
            </p>
          </div>
          <div className="border border-border/50 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
            <h3 className="font-semibold mb-2 text-netflix">Philosophical Approach</h3>
            <p>
              I draw inspiration from various philosophical traditions, particularly existentialism and stoicism, which guide my decision-making and help me maintain perspective in both business and life challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
