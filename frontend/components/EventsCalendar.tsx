import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const events = [
  { id: 1, day: "०६", month: "साउन", title: "हिरोशिमा दिवस कार्यक्रम", loc: "केन्द्रीय प्लाजा", time: "१:०० दिउँसो" },
  { id: 2, day: "१२", month: "साउन", title: "राजनीतिक समितिको बैठक", loc: "पार्टी कार्यालय, हल ए", time: "११:०० बिहान" },
  { id: 3, day: "२३", month: "साउन", title: "युवा संघ महाधिवेशन", loc: "राष्ट्रिय सभागृह", time: "१०:०० बिहान" },
  { id: 4, day: "०७", month: "भदौ", title: "मजदुर संगठन सम्मेलन", loc: "मजदुर भवन", time: "२:०० दिउँसो" }
];

const EventsCalendar: React.FC = () => {
  return (
    <section className="py-14 bg-white" id="events">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Upcoming Events List */}
          <div className="lg:col-span-7 xl:col-span-8">
            <SectionHeader 
              title="आगामी गतिविधि" 
              actionText="सबै कार्यक्रम" 
              actionLink="#"
            />
            
            <div className="space-y-4">
              {events.slice(0, 2).map((evt) => (
                <div key={evt.id} className="flex items-center group p-4 md:p-5 rounded-sm bg-white ring-1 ring-gray-200 transition-all cursor-pointer">
                  {/* Date Box */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-white border border-red-100 rounded-sm group-hover:border-red-600 transition-colors mr-5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">{evt.month}</span>
                    <span className="text-2xl font-bold text-red-700 leading-none mt-1">{evt.day}</span>
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors mb-1 tracking-normal">
                      {evt.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 font-medium">
                       <span className="flex items-center"><Clock size={16} className="mr-2 text-red-600"/> {evt.time}</span>
                       <span className="flex items-center"><MapPin size={16} className="mr-2 text-red-600"/> {evt.loc}</span>
                    </div>
                  </div>

                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                    <div className="bg-red-50 p-2 rounded-full text-red-700">
                       <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured / Past Activity */}
          <div className="lg:col-span-5 xl:col-span-4">
             <SectionHeader title="विशेष गतिविधि" />
             
             <div className="relative rounded-sm overflow-hidden group h-[500px] ring-1 ring-gray-200">
               <img 
                 src="https://picsum.photos/seed/convention/800/1200" 
                 alt="Featured Event" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-black/30 to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <div className="bg-yellow-500 text-red-900 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest inline-block mb-4 shadow-lg">
                    सम्पन्न
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight font-serif tracking-normal">
                    ऐतिहासिक आठौं राष्ट्रिय महाधिवेशन
                  </h3>
                  <p className="text-gray-200 mb-6 line-clamp-2 text-base font-light leading-relaxed">
                    राष्ट्रिय कार्यदिशा तय गर्न प्रतिनिधिहरूको ऐतिहासिक भेला सम्पन्न।
                  </p>
                  <button className="bg-white text-red-900 px-6 py-3 rounded-sm font-bold uppercase tracking-wide flex items-center hover:bg-gray-100 transition-colors w-full justify-center text-sm border border-gray-300">
                    फोटो फिचर हेर्नुहोस् <ArrowRight size={18} className="ml-2" />
                  </button>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;