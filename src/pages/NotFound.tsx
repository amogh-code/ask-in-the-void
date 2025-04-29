
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-royalblack to-background py-20 px-4">
      <div className="text-center">
        <h1 className="text-netflix font-netflix text-9xl font-bold animate-pulse">404</h1>
        <h2 className="text-4xl font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! Looks like you've wandered into the digital void. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-16 relative">
        <div className="w-48 h-48 rounded-full bg-netflix/5 animate-pulse absolute -top-10 -left-10 blur-3xl"></div>
        <div className="w-48 h-48 rounded-full bg-purpleask/5 animate-pulse absolute -bottom-10 -right-10 blur-3xl"></div>
        <div className="relative z-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: ['#E50914', '#8B5CF6', '#FFD700', '#FFC0CB', '#FFFFFF'][
                  Math.floor(Math.random() * 5)
                ],
                borderRadius: '50%',
                animation: `bounce ${Math.random() * 2 + 2}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            />
          ))}
          <div className="text-6xl mb-4">🤔</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
