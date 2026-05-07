import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto min-h-[500px] bg-white overflow-hidden flex flex-col md:flex-row">
      
      {/* 
        COLUMN 1: Visual Side (Left)
        - Takes up physical space in the flex row
        - No absolute positioning used for the main structure to prevent overlap
      */}
      <div className="relative w-full md:w-[45%] lg:w-[50%] h-[50vw] sm:h-[45vw] md:h-full min-h-[225px] md:min-h-0 z-10 shrink-0">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative overflow-hidden bg-red-700"
          style={{
            // The Slash: Sharp bottom-right cut
            clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600" 
            alt="The Mission" 
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[2s]"
            referrerPolicy="no-referrer"
          />
          {/* Tone Overlay */}
          <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* 
        COLUMN 2: Content Side (Right)
        - Naturally follows the first column
        - Uses padding to respect the diagonal angle without overlapping
      */}
      <div className="relative flex-grow h-full z-20 flex flex-col justify-center bg-white">
        
        {/* Background Decorative Outlined Text */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[100px] md:text-[150px] lg:text-[300px] font-black text-outline uppercase tracking-tighter text-black">
          SSCPN 
          </h2>
        </div> */}

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative z-10 w-full px-6 sm:px-12 md:pl-12 lg:pl-20 py-10"
        >
          {/* Accent Line */}
          <div className="w-12 h-1.5 bg-red-700 mb-6 lg:mb-10" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-black text-gray-900 leading-[0.9] lg:leading-[0.82] tracking-tighter uppercase mb-6 lg:mb-10 italic">
            परिवर्तन <br />
            <span className="text-red-700">अनिवार्य छ</span>
          </h1>
          
          <p className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl text-gray-500 font-medium leading-relaxed mb-8 lg:mb-12 border-l-4 border-red-700 pb-1 pl-6 lg:pl-8 max-w-xl">
            साम्राज्यवाद र शोषण विरूद्धको यो यात्रामा हामी एक हौं। हामी नयाँ भविष्यको सपना होइन, निर्माण गर्दैछौं।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <Link 
              to="/membership"
              className="group relative flex items-center justify-center gap-3 lg:gap-4 bg-red-700 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-sm font-black text-base lg:text-xl shadow-xl transition-all hover:bg-red-800 hover:-translate-y-1 active:scale-95"
            >
              <UserPlus size={20} className="lg:w-6 lg:h-6" />
              सदस्य बन्नुहोस्
            </Link>

            <Link 
              to="/about"
              className="flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-900 px-8 lg:px-10 py-4 lg:py-5 rounded-sm font-black text-base lg:text-lg transition-all hover:bg-gray-900 hover:text-white"
            >
              हाम्रो बारेमा
              <ArrowRight size={20} className="lg:w-6 lg:h-6" />
            </Link>
          </div>
        </motion.div>

        {/* Diagonal Corner Blade (Right bottom) */}
        <div 
          className="absolute bottom-0 right-0 w-1/4 h-24 bg-red-700/10 pointer-events-none z-0 hidden lg:block"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Decorative Rail Detail */}
      <div className="absolute right-8 bottom-8 hidden lg:block z-30">
        {/* <p className="vertical-text text-gray-200 font-black tracking-[1em] text-[10px] uppercase">
          SSCPN • SSCPN • SSCPN
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
