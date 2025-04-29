
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ThankYouAnimation from '@/components/ThankYouAnimation';
import { setupIntersectionObserver } from '@/lib/utils';
import { Phone, Mail, MessageSquare, Github } from 'lucide-react';

const Message: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    setupIntersectionObserver();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL
    const subject = `Message from ${name} via Portfolio Website`;
    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;
    
    const mailtoUrl = `mailto:amoghstv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoUrl);
    
    // Show thank you animation
    setShowThankYou(true);
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };
  
  const handleCloseThankYou = () => {
    setShowThankYou(false);
  };
  
  return (
    <div className="min-h-screen pb-10 md:pb-20">
      <section className="py-12 md:py-20 bg-gradient-to-br from-netflix/10 via-background to-purpleask/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-on-scroll">
              Slide Into My Inbox <span className="text-netflix">(Professionally 😏)</span>
            </h1>
            <p className="text-lg text-center mb-8 md:mb-12 text-muted-foreground animate-on-scroll">
              Have a project in mind or just want to say hi? Fill out the form below 
              or use one of my contact details.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="space-y-4 md:space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border hover:border-netflix transition-colors">
                  <Phone className="h-5 w-5 text-netflix flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="font-medium">Phone</p>
                    <a href="tel:+916362683665" className="text-muted-foreground hover:text-netflix text-sm md:text-base truncate">+91 6362683665</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border hover:border-netflix transition-colors">
                  <Mail className="h-5 w-5 text-netflix flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="font-medium">Email</p>
                    <a href="mailto:amoghstv@gmail.com" className="text-muted-foreground hover:text-netflix text-sm md:text-base truncate">amoghstv@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border hover:border-green-500 transition-colors">
                  <MessageSquare className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.link/hhleux" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 text-sm md:text-base truncate">Message me on WhatsApp</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border hover:border-gray-400 transition-colors">
                  <Github className="h-5 w-5 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/amogh-code" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm md:text-base truncate">@amogh-code</a>
                  </div>
                </div>
              </div>
            </div>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-4 md:space-y-6 animate-on-scroll"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-card/20 backdrop-blur-sm border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card/20 backdrop-blur-sm border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px] md:min-h-[200px] resize-y bg-card/20 backdrop-blur-sm border-border"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-netflix hover:bg-netflix/80 transition-colors"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 md:mt-12 text-center text-muted-foreground text-sm animate-on-scroll">
              <p>
                Based in Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ThankYouAnimation isVisible={showThankYou} onClose={handleCloseThankYou} />
    </div>
  );
};

export default Message;
