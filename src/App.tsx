
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixIntro from "./components/NetflixIntro";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Message from "./pages/Message";
import Ventures from "./pages/Ventures";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { setupCursorTrail, setupScrollProgressBar } from './lib/utils';

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');
    
    // Setup cursor trail effect
    setupCursorTrail();
    
    // Setup scroll progress bar
    setupScrollProgressBar();
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro ? (
          <NetflixIntro onIntroComplete={handleIntroComplete} />
        ) : (
          <BrowserRouter>
            <div className="min-h-screen flex flex-col pt-16">
              <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/message" element={<Message />} />
                  <Route path="/ventures" element={<Ventures />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              
              <Footer />
            </div>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
