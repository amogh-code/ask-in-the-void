
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialButtons from '@/components/SocialButtons';
import ScrollingText from '@/components/ScrollingText';
import PhotoCarousel from '@/components/PhotoCarousel';
import AnimatedLogo from '@/components/AnimatedLogo';
import { setupIntersectionObserver } from '@/lib/utils';

const Home: React.FC = () => {
  // Sample photos for the carousel - replace with actual photos
  const photos = [
    'https://source.unsplash.com/random/400x600?person=1',
    'https://source.unsplash.com/random/400x600?tech=1',
    'https://source.unsplash.com/random/400x600?design=1',
  ];
  
  useEffect(() => {
    // Setup animation on scroll
    setupIntersectionObserver();
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-royalblack via-royalblack to-netflix/20 -z-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-netflix/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purpleask/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <AnimatedLogo />
            
            <h2 className="mt-4 text-xl md:text-2xl font-medium max-w-2xl text-foreground/80">
              Turning coffee into code and chaos since 1999
            </h2>
            
            <div className="mt-8">
              <SocialButtons />
            </div>
            
            <div className="mt-12">
              <Button asChild variant="default" className="bg-netflix hover:bg-netflix/80 text-white">
                <Link to="/projects">Explore My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/50 flex justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Scrolling Text */}
      <ScrollingText text="Entrepreneur | Designer | Developer | Human Disaster™ | Entrepreneur | Designer | Developer | Human Disaster™" />
      
      {/* Bio Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-gradient-purple">About Me</h2>
              <p className="text-lg mb-6">
                Hello! I'm <span className="font-bold text-netflix">AMOGH Sai KRISHNAN</span> (ASK), an entrepreneur, 
                designer, and developer based in Bangalore, India. I love creating unique digital 
                experiences and solving complex problems with creative solutions.
              </p>
              <p className="text-lg mb-6">
                With a passion for coding and design, I've worked on a variety of projects from 
                web applications to e-commerce platforms. When I'm not in front of my computer, 
                you can find me exploring new technologies or planning my next startup venture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild variant="outline" className="gap-2">
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/message">Get In Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <PhotoCarousel photos={photos} />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-netflix/10 to-purpleask/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient-red">Let's Create Something Amazing</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for a collaboration, have a project idea, or just want to say hi, 
            I'm always open to new opportunities and connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" className="gap-2">
              <Link to="/projects">See My Work</Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/message">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
