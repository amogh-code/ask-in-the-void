
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Twitter, Youtube, Phone, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient-red">ASK</h3>
            <p className="text-muted-foreground max-w-xs">
              Entrepreneur and tech enthusiast based in Bangalore, India. Passionate about blending creativity with technology to create impactful experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-netflix transition-colors button-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/message" className="text-muted-foreground hover:text-netflix transition-colors button-hover">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-muted-foreground hover:text-netflix transition-colors button-hover">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-netflix transition-colors button-hover">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/amogh-code"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-netflix transition-colors hover-float"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amogh-sai-krishnan-1506a8212"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-netflix transition-colors hover-float"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/amogh.kris/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-netflix transition-colors hover-float"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-netflix transition-colors hover-float"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCtoXVCLToZyREW3V2HICgTw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-netflix transition-colors hover-float"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://wa.link/hhleux"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors hover-float"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 6362683665
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> amoghstv@gmail.com
              </p>
              <p>
                Bangalore, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AMOGH Sai KRISHNAN. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Made with <span className="text-netflix">♥</span> in Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
