import React, { ReactNode, createContext, useContext } from 'react';

// Create a context for Print/Export mode
export const ExportContext = createContext<boolean>(false);

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  // We keep this for manual override if needed, but context is primary for deep trees
  printMode?: boolean; 
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = '', printMode = false }) => {
  const isExporting = useContext(ExportContext);
  const isStatic = printMode || isExporting;

  return (
    <div className={`w-full h-full flex flex-col px-6 pt-6 pb-12 md:px-12 md:pt-8 md:pb-16 overflow-hidden relative ${className}`}>
      {/* Decorative background gradients */}
      {/* Use absolute when exporting so html2canvas captures it within the slide div bounds */}
      <div className={`${isStatic ? 'absolute' : 'fixed'} top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0`} />
      <div className={`${isStatic ? 'absolute' : 'fixed'} bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0`} />
      
      {/* Increased max-width to fully utilize 1080p/1440p screens like a presentation slide */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};