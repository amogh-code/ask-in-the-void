
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoCarouselProps {
  photos: string[];
  interval?: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [photos, interval]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="min-w-full">
            <img
              src={photo}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 transition-opacity bg-black/30 hover:bg-black/50 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 transition-opacity bg-black/30 hover:bg-black/50 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
