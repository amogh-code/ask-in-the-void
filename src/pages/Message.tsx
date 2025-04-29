
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ThankYouAnimation from '@/components/ThankYouAnimation';
import { setupIntersectionObserver } from '@/lib/utils';

const Message: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  React.useEffect(() => {
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
    
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
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
    <div className="min-h-screen pb-20">
      <section className="py-20 bg-gradient-to-br from-netflix/10 via-background to-purpleask/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-on-scroll">
              Slide Into My Inbox <span className="text-netflix">(Professionally 😏)</span>
            </h1>
            <p className="text-lg text-center mb-12 text-muted-foreground animate-on-scroll">
              Have a project in mind or just want to say hi? Fill out the form below 
              and I'll get back to you as soon as possible.
            </p>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-6 animate-on-scroll"
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
                  className="min-h-[200px] resize-y bg-card/20 backdrop-blur-sm border-border"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-netflix hover:bg-netflix/80 transition-colors"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-12 text-center text-muted-foreground text-sm animate-on-scroll">
              <p>
                You can also reach me directly at <a href="mailto:your-email@example.com" className="text-netflix hover:underline">your-email@example.com</a>
              </p>
              <p className="mt-2">
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
