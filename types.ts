import { ReactNode } from 'react';

export interface SlideProps {
  isActive?: boolean;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}
