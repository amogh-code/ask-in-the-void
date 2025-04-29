
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Message Me', path: '/message' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'About', path: '/about' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar"></div>
      </div>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'py-4'
        }`}
      >
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-netflix font-netflix text-2xl md:text-3xl font-bold hover-float"
          >
            ASK
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`button-hover text-sm font-medium transition-colors hover:text-netflix ${
                      isActive(item.path) ? 'text-netflix' : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-full hover:bg-muted"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center`}
      >
        <ul className="space-y-8 text-center">
          {navItems.map((item) => (
            <li key={item.name} className="transform transition-transform hover:scale-110">
              <Link
                to={item.path}
                className={`text-xl font-medium ${
                  isActive(item.path) ? 'text-netflix' : 'text-foreground/80'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
