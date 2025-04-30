
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, MapPin, Book, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialButtons from '@/components/SocialButtons';
import ScrollingText from '@/components/ScrollingText';
import PhotoCarousel from '@/components/PhotoCarousel';
import AnimatedLogo from '@/components/AnimatedLogo';
import { setupIntersectionObserver } from '@/lib/utils';

const Home: React.FC = () => {
  // Limited to just 3 photos for the carousel - replace with actual photos
  const photos = [
    'https://source.unsplash.com/random/400x600?chess=1',
    'https://source.unsplash.com/random/400x600?coding=1',
    'https://source.unsplash.com/random/400x600?travel=1',
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
              Crafting experiences that inspire and engage
            </h2>
            
            <div className="mt-8">
              <SocialButtons />
            </div>
            
            <div className="mt-12">
              <Button asChild variant="default" className="bg-netflix hover:bg-netflix/80 text-white">
                <Link to="/ventures">Discover My Ventures</Link>
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
      <ScrollingText text="Entrepreneur | Designer | Creative | Human Disaster™ | Chess Enthusiast | Psychology Appreciator" />
      
      {/* Bio Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-gradient-purple">About Me</h2>
              <p className="text-lg mb-6">
                Hello! I'm <span className="font-bold text-netflix">AMOGH Sai KRISHNAN</span> (ASK), an entrepreneur and 
                tech enthusiast based in Bangalore, India. I'm passionate about blending creativity 
                with technology to create impactful experiences.
              </p>
              <p className="text-lg mb-6">
                Currently, I'm building Gudbud, a T-shirt brand that caters to engineering students with 
                quirky and relatable designs. I'm also the CEO of Annam Authentic, Malleshwaram and 
                Sadashivnagar's largest vegetarian catering service.
              </p>
              
              {/* Interests Icons */}
              <div className="flex flex-wrap gap-6 my-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-netflix" />
                  </div>
                  <span className="text-sm text-muted-foreground">Chess</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-2">
                    <Code className="h-6 w-6 text-netflix" />
                  </div>
                  <span className="text-sm text-muted-foreground">Coding</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-2">
                    <Globe className="h-6 w-6 text-netflix" />
                  </div>
                  <span className="text-sm text-muted-foreground">Travel</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-netflix" />
                  </div>
                  <span className="text-sm text-muted-foreground">Psychology</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            Whether you're looking for a collaboration, have a business idea, or just want to say hi, 
            I'm always open to new opportunities and connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" className="gap-2">
              <Link to="/ventures">View My Ventures</Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/message">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Philosophical Quotes */}
      <PhilosophicalQuotes />
    </div>
  );
};

export default Home;
