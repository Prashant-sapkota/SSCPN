
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

interface FutureProgram {
  id: number;
  Date: string;
  time: string;
  Title: string;
  Place: string;
}

interface Sangharsha {
  id: number;
  title: string;
  type: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const devanagariDigits: Record<string, string> = {
  '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
  '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
};

const toDevanagari = (val: string | number) =>
  String(val).replace(/[0-9]/g, d => devanagariDigits[d] ?? d);

const NEPALI_MONTHS: Record<number, string> = {
  1: 'जनवरी', 2: 'फेब्रुअरी', 3: 'मार्च', 4: 'अप्रिल',
  5: 'मे', 6: 'जुन', 7: 'जुलाई', 8: 'अगस्ट',
  9: 'सेप्टेम्बर', 10: 'अक्टोबर', 11: 'नोभेम्बर', 12: 'डिसेम्बर',
};

const formatDay = (dateStr: string) => {
  const d = new Date(dateStr);
  return toDevanagari(String(d.getDate()).padStart(2, '0'));
};

const formatMonth = (dateStr: string) => {
  const d = new Date(dateStr);
  return NEPALI_MONTHS[d.getMonth() + 1] ?? '';
};

const formatTime = (timeStr: string) => {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h, 10);
  const period = hour < 12 ? 'बिहान' : 'दिउँसो';
  const hour12 = hour % 12 || 12;
  return `${toDevanagari(hour12)}:${toDevanagari(m ?? '00')} ${period}`;
};

const TYPE_LABELS: Record<string, string> = {
  ongoing: 'जारी',
  scheduled: 'तय भएको',
  completed: 'सम्पन्न',
};

const EventsCalendar: React.FC = () => {
  const [events, setEvents] = useState<FutureProgram[]>([]);
  const [hero, setHero] = useState<Sangharsha | null>(null);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/future-programs?sort=Date:asc&pagination[limit]=4`)
      .then(res => res.json())
      .then(data => setEvents(data.data ?? []))
      .catch(() => setEvents([]));
  }, []);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/sangharshas?populate=*`)
      .then(res => res.json())
      .then(json => {
        const items: Sangharsha[] = (json.data ?? []).map((item: any) => ({
          id: item.id,
          title: item.title,
          type: item.type,
          date: item.date,
          location: item.location,
          description: item.description,
          image: item.image?.[0]?.url ? `${STRAPI_URL}${item.image[0].url}` : '',
        }));
        const mainHero = items.find(c => c.type === 'ongoing') ?? items[0] ?? null;
        setHero(mainHero);
      })
      .catch(() => setHero(null));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-50" id="events">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

          {/* Left Column: Upcoming Events List */}
          <div className="lg:col-span-7  xl:col-span-8">
            <SectionHeader
              title="आगामी गतिविधि"
              actionText="सबै कार्यक्रम"
              actionLink="/calendar"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {events.slice(0, 4).map((evt) => (
                <motion.div
                  key={evt.id}
                  variants={itemVariants}
                  className="flex items-center group p-5 md:p-6 bg-white border border-gray-100 hover:border-red-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden relative"
                >
                  {/* Subtle hover background accent */}
                  <div className="absolute inset-0 bg-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Date Box - Professional Design */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-100 group-hover:border-red-600 transition-colors duration-500 rounded-sm relative z-10 shadow-sm">
                    <span className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1.5">{formatMonth(evt.Date)}</span>
                    <span className="text-2xl md:text-3xl font-black text-red-800 leading-none">{formatDay(evt.Date)}</span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 ml-6 relative z-10">
                    <h4 className="text-lg md:text-xl font-bold text-gray-950 group-hover:text-red-900 transition-colors mb-2 tracking-tight font-['Google_Sans'] italic">
                      {evt.Title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
                       <span className="flex items-center gap-2"><Clock size={14} className="text-red-800"/> {formatTime(evt.time)}</span>
                       <span className="flex items-center gap-2"><MapPin size={14} className="text-red-800"/> {evt.Place}</span>
                    </div>
                  </div>

                  {/* Interaction Indicator */}
                  <div className="hidden sm:flex items-center justify-center h-12 w-12 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500 relative z-10">
                    <div className="bg-red-800 p-2.5 rounded-full text-white shadow-xl">
                       <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Featured Activity */}
          <div className="lg:col-span-5 xl:col-span-4">
             <SectionHeader title="विशेष गतिविधि" />

             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="relative rounded-sm overflow-hidden group h-[500px] lg:h-[600px] border border-gray-100 shadow-2xl"
             >
               <img
                 src={hero?.image || 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200'}
                 alt={hero?.title || 'Featured Event'}
                 className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />

               {/* Advanced Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-red-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>

               <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white z-10">
                  <div className="inline-flex items-center gap-2 bg-red-800/90 text-white text-[10px] font-black px-4 py-2 rounded-sm uppercase tracking-normal mb-6 shadow-2xl border border-red-400/30">
                    <Star size={12} className="text-yellow-400" />
                    {hero ? TYPE_LABELS[hero.type] ?? hero.type : 'जारी'}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.1] font-['Google_Sans'] tracking-tight italic">
                    {hero?.title ?? ''}
                  </h3>

                  <p className="text-red-100/80 mb-10 line-clamp-3 text-base md:text-lg font-medium font-['Google_Sans'] leading-relaxed border-l-2 border-red-500/50 pl-6">
                    {hero?.description ?? ''}
                  </p>

                  <a href="/sangharsha" className="group w-full inline-flex items-center justify-center bg-white text-gray-950 px-8 py-5 font-black font-['Google_Sans'] uppercase tracking-widest text-[11px] rounded-sm hover:bg-gray-50 transition-all border shadow-2xl hover:-translate-y-1 active:translate-y-0">
                    थप जानकारी हेर्नुहोस्
                    <ArrowRight size={18} className="ml-4 transition-transform group-hover:translate-x-2" />
                  </a>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
