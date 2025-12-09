import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { AdservioLogo } from './components/AdservioLogo';
import { ExportContext } from './components/SlideContainer'; // Import the context
import { 
  HeroSlide, ProfileSlide, ApproachSlide, ServicesSlide, 
  AISlide, DeliverablesSlide, IndustriesSlide, EcosystemSlide, 
  LeadershipSlide, PartnerSlide, ContactSlide 
} from './components/Slides';
import { Download, Loader2 } from 'lucide-react';
// @ts-ignore
import html2canvas from 'html2canvas';
// @ts-ignore
import { jsPDF } from 'jspdf';

const SLIDES = [
  HeroSlide,
  ProfileSlide,
  ApproachSlide,
  ServicesSlide,
  AISlide,
  DeliverablesSlide,
  IndustriesSlide,
  EcosystemSlide,
  LeadershipSlide,
  PartnerSlide,
  ContactSlide
];

// Map slide indices to navigation labels
const NAV_ITEMS = [
  { label: 'Profile', indices: [1] },
  { label: 'Approach', indices: [2] },
  { label: 'Services', indices: [3] },
  { label: 'AI Practice', indices: [4, 5] },
  { label: 'Industries', indices: [6] },
  { label: 'Ecosystem', indices: [7] },
  { label: 'Leadership', indices: [8] },
  { label: 'Why Us', indices: [9] },
  { label: 'Contact', indices: [10] },
];

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isExporting, setIsExporting] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExporting) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isExporting]);

  const CurrentSlideComponent = SLIDES[currentSlideIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  // PDF Generation Function
  const generatePDF = async () => {
    setIsExporting(true);
    
    // Allow time for the hidden container to render (1.5s to be safe for images)
    setTimeout(async () => {
      if (!exportRef.current) {
          setIsExporting(false);
          return;
      }

      try {
        const doc = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [1920, 1080] // Standard 1080p presentation ratio
        });

        const slides = exportRef.current.children;
        const totalSlides = slides.length;

        for (let i = 0; i < totalSlides; i++) {
          const slideElement = slides[i] as HTMLElement;
          
          // Capture the slide
          const canvas = await html2canvas(slideElement, {
            scale: 1, // Capture at 1:1 scale of our 1920x1080 container
            useCORS: true,
            logging: false,
            backgroundColor: '#020617'
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.90);

          if (i > 0) {
            doc.addPage([1920, 1080], 'landscape');
          }
          
          doc.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
        }

        doc.save('Adservio_Presentation.pdf');
      } catch (error) {
        console.error('PDF Generation failed:', error);
        alert('Failed to generate PDF. Please try again.');
      } finally {
        setIsExporting(false);
      }
    }, 1500); 
  };

  return (
    <div className="relative w-screen h-screen bg-slate-950 overflow-hidden font-sans text-white">
      {/* Persistent Logo Bottom Left (Watermark) */}
      <AnimatePresence>
        {currentSlideIndex !== 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.8 }} 
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-6 md:left-12 z-50 cursor-pointer hover:opacity-100 transition-opacity" 
            onClick={() => goToSlide(0)}
          >
            <AdservioLogo className="h-5 md:h-6" showText={true} textClassName="text-white text-lg md:text-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Menu Bar Container */}
      <div className="fixed top-8 right-6 md:right-12 z-50 flex items-center gap-4">
          {/* Navigation Items */}
          <div className="hidden lg:flex gap-6 text-[10px] xl:text-xs font-bold uppercase tracking-widest text-gray-500 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
            {NAV_ITEMS.map((item, i) => {
               const isActive = item.indices.includes(currentSlideIndex);
               return (
                 <span 
                    key={i} 
                    className={`cursor-pointer transition-all duration-300 ${isActive ? 'text-blue-400 font-extrabold scale-110' : 'hover:text-white'}`} 
                    onClick={() => goToSlide(item.indices[0])}
                 >
                   {item.label}
                 </span>
               );
            })}
          </div>

          {/* Export PDF Button */}
          <button
             onClick={generatePDF}
             disabled={isExporting}
             className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full shadow-lg shadow-blue-900/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center"
             title="Download Presentation as PDF"
          >
             {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          </button>
      </div>

      {/* Main Slide Area */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlideIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <Navigation 
        currentSlide={currentSlideIndex} 
        totalSlides={SLIDES.length} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
        goToSlide={goToSlide}
      />

      {/* Hidden Container for PDF Export */}
      {isExporting && (
        <ExportContext.Provider value={true}>
            <div 
            ref={exportRef} 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: '100vw', // Move off-screen
                width: '1920px', 
                height: '1080px',
                pointerEvents: 'none',
                zIndex: -1
            }}
            >
            {SLIDES.map((SlideComponent, index) => (
                <div key={index} style={{ width: '1920px', height: '1080px', position: 'relative', overflow: 'hidden', background: '#020617' }}>
                    
                    {/* EXPORT: Persistent Logo (Bottom Left) */}
                    {index !== 0 && (
                        <div className="absolute bottom-8 left-12 z-50 opacity-80">
                            <AdservioLogo className="h-6" showText={true} textClassName="text-white text-xl" />
                        </div>
                    )}

                    {/* EXPORT: Navigation Header */}
                    <div className="absolute top-8 right-12 z-50 flex items-center gap-4">
                        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-500 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
                            {NAV_ITEMS.map((item, i) => {
                               const isActive = item.indices.includes(index);
                               return (
                                 <span 
                                    key={i} 
                                    className={`${isActive ? 'text-blue-400 font-extrabold scale-110' : ''}`} 
                                 >
                                   {item.label}
                                 </span>
                               );
                            })}
                        </div>
                        {/* Download Button Visual */}
                        <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-900/20 flex items-center justify-center">
                             <Download size={18} />
                        </div>
                    </div>

                    <SlideComponent />
                </div>
            ))}
            </div>
        </ExportContext.Provider>
      )}
    </div>
  );
};

export default App;