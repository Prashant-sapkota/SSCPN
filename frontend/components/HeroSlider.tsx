import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText, UserPlus } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/seed/rally1/1920/1080",
    title: "प्रतिरोध २.०",
    subtitle: "साम्राज्यवाद र शोषण विरुद्ध एकताबद्ध अभियान।",
    cta: "आन्दोलनमा सामेल हुनुहोस्",
    link: "/membership"
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/workers1/1920/1080",
    title: "श्रमिक अधिकार नै मानव अधिकार हो",
    subtitle: "उचित ज्याला, सम्मान र सामाजिक सुरक्षाका लागि संघर्ष।",
    cta: "हाम्रो घोषणापत्र पढ्नुहोस्",
    link: "/samajwadi-karyakram"
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/study1/1920/1080", 
    title: "आफ्नो इतिहास जान्नुहोस्",
    subtitle: "हाम्रा राजनीतिक दस्तावेज र अभिलेखहरू अध्ययन गर्नुहोस्।",
    cta: "राजनीतिक दस्तावेज डाउनलोड गर्नुहोस्",
    ctaIcon: <FileText className="mr-2" size={20} />,
    link: "/dastabeez",
    isDownload: true
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/community1/1920/1080",
    title: "संगठन नै शक्ति हो",
    subtitle: "उज्ज्वल भविष्य निर्माणका लागि हामीलाई तपाईंको खाँचो छ।",
    cta: "सदस्य बन्नुहोस्",
    ctaIcon: <UserPlus className="mr-2" size={20} />,
    link: "/membership",
    isMember: true
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-black group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Enhanced Gradient Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div> 
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-screen-2xl mx-auto w-full">
            <div className="max-w-3xl animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 uppercase tracking-normal drop-shadow-xl font-serif leading-none">
                {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-lg font-light leading-relaxed border-l-4 border-red-600 pl-5">
                {slide.subtitle}
                </p>
                <Link 
                to={slide.link}
                className={`
                  inline-flex items-center px-7 py-3.5 text-base font-bold uppercase tracking-wide rounded-sm transition-all transform hover:translate-x-1 shadow-xl border
                    ${slide.isMember 
                        ? 'bg-yellow-500 border-yellow-500 text-red-900 hover:bg-yellow-400' 
                        : 'bg-red-700 border-red-700 text-white hover:bg-transparent hover:text-white'}
                `}
                >
                {slide.ctaIcon}
                {slide.cta}
                </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-red-700 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-red-700 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-red-600 w-12' : 'bg-white/50 w-6 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;