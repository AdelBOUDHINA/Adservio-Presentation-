import React from 'react';

interface AdservioLogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export const AdservioLogo: React.FC<AdservioLogoProps> = ({ 
  className = "h-10", 
  textClassName = "text-white",
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* 
        Logo Mark: White Circle with Dark "A" shape inside.
        The "A" shape is a rounded triangle with a concave bottom and a dot inside.
      */}
      <svg viewBox="0 0 60 60" className="h-full w-auto aspect-square drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Main Circle Background - White */}
         <circle cx="30" cy="30" r="30" fill="white" />
         
         {/* The "A" / Arrowhead Shape - Dark Navy (matching app bg) */}
         {/* Path defined to create a rounded arrowhead with concave bottom */}
         <path 
           d="M30 14 L44 42 Q30 35 16 42 Z" 
           fill="#020617" 
           stroke="#020617" 
           strokeWidth="5" 
           strokeLinejoin="round" 
           strokeLinecap="round"
         />
         
         {/* The Dot inside - White */}
         <circle cx="30" cy="34" r="4" fill="white" />
      </svg>
      
      {/* Text: Adservio - Lowercase, sans-serif */}
      {showText && (
        <span className={`font-bold text-3xl tracking-tight lowercase font-sans ${textClassName}`}>adservio</span>
      )}
    </div>
  );
};