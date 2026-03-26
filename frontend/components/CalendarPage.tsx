
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Calendar as CalendarIcon } from 'lucide-react';

// --- Types ---
interface CalendarEvent {
  id: string;
  day: number; // Nepali Day
  monthIndex: number; // 0 = Baisakh, 4 = Bhadra
  title: string;
  location: string;
  time: string;
  description: string;
  type: 'meeting' | 'rally' | 'training' | 'other';
}

// --- Mock Data ---
// Assuming current view is Bhadra (Month Index 4)
const eventData: CalendarEvent[] = [
  {
    id: 'evt-1',
    day: 5,
    monthIndex: 4, // Bhadra
    title: 'केन्द्रीय सचिवालय बैठक',
    location: 'केन्द्रीय कार्यालय, पेरिसडाँडा',
    time: '११:०० बिहान',
    description: 'पार्टीको आगामी कार्यदिशा र संगठन विस्तार अभियान बारे छलफल।',
    type: 'meeting'
  },
  {
    id: 'evt-2',
    day: 12,
    monthIndex: 4,
    title: 'विशाल जनसभा',
    location: 'खुलामञ्च, काठमाडौं',
    time: '१:०० दिउँसो',
    description: 'महँगी र भ्रष्टाचार विरुद्ध खबरदारी सभा। प्रमुख वक्ता: महासचिव कमरेड।',
    type: 'rally'
  },
  {
    id: 'evt-3',
    day: 15,
    monthIndex: 4,
    title: 'प्रशिक्षण कार्यक्रम',
    location: 'प्रज्ञा भवन, कमलादी',
    time: '१०:०० बिहान',
    description: 'नयाँ संगठित सदस्यहरूका लागि आधारभूत मार्क्सवादी प्रशिक्षण।',
    type: 'training'
  },
  {
    id: 'evt-4',
    day: 22,
    monthIndex: 4,
    title: 'विद्यार्थी संगठनको भेला',
    location: 'त्रिभुवन विश्वविद्यालय',
    time: '२:०० दिउँसो',
    description: 'स्वतन्त्र विद्यार्थी युनियन निर्वाचन तयारी विशेष भेला।',
    type: 'other'
  },
  {
    id: 'evt-5',
    day: 28,
    monthIndex: 4,
    title: 'संविधान दिवस अन्तर्क्रिया',
    location: 'नेपाल ल क्याम्पस',
    time: '३:०० दिउँसो',
    description: 'संविधानका सबल पक्ष र कमजोरीहरू माथि बौद्धिक विमर्श।',
    type: 'meeting'
  }
];

// Helper to convert English numbers to Nepali
const toNepaliDigits = (num: number): string => {
  return num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[parseInt(d)]);
};

const CalendarPage: React.FC = () => {
  // 4 = Bhadra (approx Sept)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4); 
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  
  // Refs for scrolling
  const eventListRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const nepaliMonths = [
    "बैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज",
    "कार्तिक", "मंसिर", "पुस", "माघ", "फागुन", "चैत"
  ];

  const prevMonth = () => setCurrentMonthIndex(prev => (prev === 0 ? 11 : prev - 1));
  const nextMonth = () => setCurrentMonthIndex(prev => (prev === 11 ? 0 : prev + 1));

  // --- Interaction Handlers ---

  // 1. Click Date -> Scroll to Event
  const handleDateClick = (day: number) => {
    setSelectedDay(day);
    // Find index of event for this day
    const eventIndex = eventData.findIndex(e => e.day === day && e.monthIndex === currentMonthIndex);
    
    if (eventIndex !== -1) {
      const element = eventRefs.current.get(eventIndex);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // 2. Click Event Card -> Highlight Date
  const handleEventCardClick = (day: number, index: number) => {
    setSelectedDay(day);
    const element = eventRefs.current.get(index);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // 3. Intersection Observer to detect scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            const event = eventData[index];
            if (event && event.monthIndex === currentMonthIndex) {
              // Only update if not currently clicking (optional debouncing could occur here)
              setSelectedDay(event.day);
            }
          }
        });
      },
      {
        root: eventListRef.current,
        threshold: 0.6, // Trigger when 60% of the card is visible
      }
    );

    const currentRefs = eventRefs.current;
    currentRefs.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => {
      currentRefs.forEach((node) => {
        if (node) observer.unobserve(node);
      });
    };
  }, [currentMonthIndex]);


  // Render Calendar Grid (Simulated for Bhadra - 31 Days)
  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = 31; 
    const startDay = 3; 

    // Empty slots
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square border-b border-r border-gray-100 bg-transparent"></div>);
    }

    // Actual Days
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = eventData.find(e => e.day === day && e.monthIndex === currentMonthIndex);
      const isSelected = selectedDay === day;

      days.push(
        <div 
          key={day}
          onClick={() => handleDateClick(day)}
          className={`
            aspect-square border-b border-r border-gray-100 flex flex-col items-center justify-center relative cursor-pointer transition-colors select-none p-2
            ${isSelected ? 'bg-red-800 text-white z-10' : 'bg-white hover:bg-gray-50 text-gray-700'}
          `}
        >
          <span className={`text-sm md:text-lg font-bold`}>
            {toNepaliDigits(day)}
          </span>
          
          {hasEvent && !isSelected && (
            <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-red-600"></div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-3">
                <CalendarIcon size={18} className="mr-2" />
                <span>पार्टी तालिका</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
               कार्यक्रम क्यालेन्डर
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-8">
        
        {/* Layout Container - height auto to fit square calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto">
          
          {/* LEFT: CALENDAR (60% Width - col-span-7) */}
          <div className="lg:col-span-7 flex flex-col h-fit bg-white border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {/* Calendar Controls */}
            <div className="flex items-center justify-between p-4 bg-red-800 text-white">
              <button onClick={prevMonth} className="hover:bg-red-700 p-2 rounded"><ChevronLeft size={24} /></button>
              <h2 className="text-2xl font-bold font-serif tracking-wide">
                {nepaliMonths[currentMonthIndex]} २०८१
              </h2>
              <button onClick={nextMonth} className="hover:bg-red-700 p-2 rounded"><ChevronRight size={24} /></button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-200">
              {['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि'].map(day => (
                <div key={day} className="py-3 text-center text-sm font-bold text-gray-600 border-r border-gray-200 last:border-0">
                  {day}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 bg-white">
              {renderCalendarDays()}
            </div>
            
            <div className="p-3 bg-gray-50 text-xs text-center border-t border-gray-200 text-gray-500">
               मितिमा क्लिक गरी विवरण हेर्नुहोस्
            </div>
          </div>

          {/* RIGHT: EVENT VERTICAL SLIDER (40% Width - col-span-5) */}
          <div className="lg:col-span-5 relative pl-4 border-l-2 border-gray-100 h-[500px] lg:h-full">
             <div className="absolute top-0 left-0 bottom-0 w-1 bg-gray-100"></div>
             
             {/* Scroll Container */}
             <div 
                ref={eventListRef}
                className="h-full overflow-y-auto scroll-smooth py-4 px-2 space-y-6 no-scrollbar snap-y snap-mandatory"
             >
                {eventData.map((event, idx) => (
                  <div 
                    key={event.id} 
                    ref={(el) => { if (el) eventRefs.current.set(idx, el); }}
                    data-index={idx}
                    className="snap-center transition-all duration-300"
                    onClick={() => handleEventCardClick(event.day, idx)}
                  >
                    <div className={`
                      bg-white p-6 border-2 relative ml-6 transition-all duration-300 cursor-pointer rounded-sm
                      ${selectedDay === event.day ? 'border-red-800 shadow-[6px_6px_0px_0px_#991b1b] scale-[1.02] z-10' : 'border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100'}
                    `}>
                       {/* Timeline Dot */}
                       <div className={`
                         absolute top-1/2 -translate-y-1/2 -left-[33px] w-4 h-4 rounded-full border-2 border-white z-20
                         ${selectedDay === event.day ? 'bg-red-800 ring-2 ring-red-800' : 'bg-gray-300'}
                       `}></div>

                       {/* Connector Line to Dot */}
                       <div className={`
                         absolute top-1/2 -translate-y-1/2 -left-[24px] w-[24px] h-[2px] z-10
                         ${selectedDay === event.day ? 'bg-red-800' : 'bg-transparent'}
                       `}></div>

                       <div className="flex justify-between items-start mb-3">
                          <span className="bg-red-50 text-red-800 font-bold px-3 py-1 text-sm border border-red-100">
                             {nepaliMonths[event.monthIndex]} {toNepaliDigits(event.day)}
                          </span>
                          <span className="text-xs font-bold text-gray-400 uppercase border border-gray-200 px-2 py-1">
                             {event.type}
                          </span>
                       </div>

                       <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                          {event.title}
                       </h3>
                       
                       <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center"><Clock size={16} className="mr-2 text-red-700"/> {event.time}</span>
                          <span className="flex items-center"><MapPin size={16} className="mr-2 text-red-700"/> {event.location}</span>
                       </div>

                       <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {event.description}
                       </p>
                    </div>
                  </div>
                ))}

                {/* Spacer at bottom to allow last item to scroll to center */}
                <div className="h-[200px]"></div>
             </div>
             
             {/* Slider Navigation Hints */}
             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-red-800"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
