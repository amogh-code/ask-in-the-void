
import React, { useEffect } from 'react';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CollapsibleCard from '@/components/CollapsibleCard';
import { setupIntersectionObserver } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Businesses: React.FC = () => {
  useEffect(() => {
    setupIntersectionObserver();
  }, []);
  
  return (
    <div className="min-h-screen pb-20">
      <section className="py-20 bg-gradient-to-br from-yellowask/10 via-background to-babypink/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-on-scroll">My Business Ventures</h1>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Beyond coding and design, I'm passionate about building businesses that solve real problems. 
            Here are a couple of my entrepreneurial ventures.
          </p>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Gudbud.in */}
            <CollapsibleCard
              title="Gudbud.in"
              description="Chaos in Cotton – Apparel for Events, Fests, and the Random Cool Kid™"
              defaultOpen
              className="animate-on-scroll"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    At Gudbud.in, we create custom apparel for events, college fests, and anyone looking to 
                    stand out with unique, high-quality clothing. Our designs range from quirky to professional,
                    all delivered with exceptional quality and attention to detail.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Our Services:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Custom T-shirts and Hoodies</li>
                    <li>Event Merchandise</li>
                    <li>College Fest Apparel</li>
                    <li>Corporate Branding</li>
                    <li>Small Batch Custom Orders</li>
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button asChild>
                      <a href="https://gudbud.in" target="_blank" rel="noopener noreferrer" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visit Gudbud.in
                      </a>
                    </Button>
                    
                    <Button variant="outline" asChild>
                      <Link to="/message" className="gap-2">
                        Inquire Now
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="https://source.unsplash.com/random/800x600?tshirt" 
                      alt="Gudbud.in apparel" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img 
                      src="https://source.unsplash.com/random/800x600?hoodie" 
                      alt="Gudbud.in apparel" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </CollapsibleCard>
            
            {/* Annam Authentic */}
            <CollapsibleCard
              title="Annam Authentic"
              description="Malleshwaram's Brahmin Buffet Lords 🍛"
              className="animate-on-scroll"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    Annam Authentic brings the rich flavors of traditional Brahmin cuisine to Malleshwaram. 
                    Our restaurant offers a unique buffet experience featuring carefully prepared vegetarian 
                    dishes that honor authentic recipes passed down through generations.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2">What Makes Us Special:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>100% Vegetarian. 200% Flavor.</li>
                    <li>Daily rotating menu of authentic dishes</li>
                    <li>Premium buffet experience</li>
                    <li>Family-friendly environment</li>
                    <li>Catering services available</li>
                  </ul>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-netflix" />
                      <span>123 Malleshwaram Main Road, Bangalore, India</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 text-netflix" />
                      <span>+91 98765 43210</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-2">
                      <Button asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                          <MapPin className="h-4 w-4" />
                          Get Directions
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild>
                        <Link to="/message" className="gap-2">
                          Inquire About Catering
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden bg-muted h-64">
                    <img 
                      src="https://source.unsplash.com/random/800x600?indian+food" 
                      alt="Annam Authentic food" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden bg-muted h-64">
                    {/* This would be a map in a real implementation */}
                    <iframe
                      title="Annam Authentic Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7246953840214!2d77.5598192!3d12.996252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dde41c9d541%3A0x6c0ee3d8f12fa178!2sMalleshwaram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650450519289!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </CollapsibleCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purpleask/20 to-netflix/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Interested in Collaborating?</h2>
          <p className="text-lg mb-8 text-muted-foreground animate-on-scroll">
            If you're interested in working together or have questions about my businesses,
            I'd love to hear from you. Let's create something amazing together!
          </p>
          <Button asChild size="lg" className="animate-on-scroll">
            <Link to="/message">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Businesses;
