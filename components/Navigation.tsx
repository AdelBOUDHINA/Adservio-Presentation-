import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, nextSlide, prevSlide, goToSlide }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
      <button 
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      <button 
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      
      <span className="absolute -top-8 right-4 text-xs font-mono text-gray-500">
        {currentSlide + 1} / {totalSlides}
      </span>
    </div>
  );
};
