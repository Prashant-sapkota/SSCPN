
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

interface CalendarEvent {
  id: string;
  day: number;
  monthIndex: number;
  title: string;
  location: string;
  time: string;
  description: string;
  type: 'meeting' | 'rally' | 'training' | 'other';
}

interface StrapiCalendarItem {
  id: number;
  documentId?: string;
  day: number;
  monthIndex: number;
  title: string;
  location: string;
  time: string;
  description: string;
  type: 'meeting' | 'rally' | 'training' | 'other';
}

const toNepaliDigits = (num: number): string => {
  return num.toString().replace(/\d/g, (d) => "०१२३४५६७८९"[parseInt(d)]);
};

const CalendarPage: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const eventListRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<Map<number, HTMLElement>>(new Map());

  const nepaliMonths = [
    "बैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज",
    "कार्तिक", "मंसिर", "पुस", "माघ", "फागुन", "चैत"
  ];

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/calanders?populate=*&sort=day:asc`)
      .then(res => res.json())
      .then(data => {
        const items: CalendarEvent[] = (data.data ?? []).map((item: StrapiCalendarItem) => ({
          id: String(item.id),
          day: item.day,
          monthIndex: item.monthIndex,
          title: item.title,
          location: item.location,
          time: item.time,
          description: item.description,
          type: item.type,
        }));
        setAllEvents(items);
      })
      .catch(() => setAllEvents([]))
      .finally(() => setLoading(false));
  }, []);

  const events = allEvents.filter(e => e.monthIndex === currentMonthIndex);

  const prevMonth = () => {
    setSelectedDay(null);
    setCurrentMonthIndex(prev => (prev === 0 ? 11 : prev - 1));
  };
  const nextMonth = () => {
    setSelectedDay(null);
    setCurrentMonthIndex(prev => (prev === 11 ? 0 : prev + 1));
  };

  const handleDateClick = (day: number) => {
    setSelectedDay(day);
    const eventIndex = events.findIndex(e => e.day === day);
    if (eventIndex !== -1) {
      const element = eventRefs.current.get(eventIndex);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleEventCardClick = (day: number, index: number) => {
    setSelectedDay(day);
    const element = eventRefs.current.get(index);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            const event = events[index];
            if (event) {
              setSelectedDay(event.day);
            }
          }
        });
      },
      {
        root: eventListRef.current,
        threshold: 0.6,
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
  }, [currentMonthIndex, events]);

  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = 31;
    const startDay = 3;

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square border-b border-r border-gray-100 bg-transparent"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = events.find(e => e.day === day);
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
          <span className="text-sm md:text-lg font-bold">
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
    <div className="bg-white min-h-screen pt-20 pb-10">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-950 tracking-tight leading-tight">
              कार्यक्रम <span className="text-red-900">क्यालेन्डर</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
              प्रमुख संगठनात्मक गतिविधिहरू र महत्वपूर्ण बैठकहरूलाई एक सुविधाजनक दृश्यमा व्यवस्थापन गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">

          {/* CALENDAR PANEL */}
          <div className="bg-white border border-gray-200 rounded-[28px] shadow-sm overflow-hidden">
            <div className="flex items-center justify-between bg-red-900 px-5 py-4 text-white">
              <button onClick={prevMonth} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20">
                <ChevronLeft size={20} />
              </button>
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-red-200">अहिले</p>
                <h2 className="text-2xl md:text-3xl font-semibold font-['Google_Sans']">{nepaliMonths[currentMonthIndex]} २०८१</h2>
              </div>
              <button onClick={nextMonth} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-white/20">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 divide-x divide-gray-200 bg-gray-50 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              {['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि'].map(day => (
                <div key={day} className="py-3 text-center">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 bg-white">
              {renderCalendarDays()}
            </div>

            <div className="flex flex-wrap gap-3 px-5 py-4 bg-red-100/30 border-t border-gray-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-2 text-xs font-semibold text-red-800">
                <span className="h-2 w-2 rounded-full bg-red-900" /> कार्यक्रम मिति
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700">
                <span className="h-2 w-2 rounded-full bg-gray-400" /> खुला मिति
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700">
                <span className="h-2 w-2 rounded-full bg-red-200" /> चयन गरिएको दिन
              </span>
            </div>
          </div>

          {/* EVENTS PANEL */}
          <div className="space-y-6">
            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">महत्त्वपूर्ण घटनाहरू</p>
                  <h3 className="mt-3 text-2xl font-semibold text-gray-950">आजका प्रमुख कार्यक्रमहरू</h3>
                </div>
                <div className="rounded-3xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-900">
                  क्लिक गर्नुहोस्
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                कुनै पनि मितिमा क्लिक गर्दा सम्बन्धित घटना सूचीमा तल स्क्रोल हुन्छ र सजिलै पढ्न सकिने रूपमा चयन हुन्छ।
              </p>
            </div>

            <div ref={eventListRef} className="space-y-4">
              {loading && (
                <p className="text-center text-gray-400 py-8">लोड हुँदैछ...</p>
              )}
              {!loading && events.length === 0 && (
                <p className="text-center text-gray-400 py-8">यस महिनामा कुनै कार्यक्रम छैन।</p>
              )}
              {events.map((event, idx) => (
                <button
                  key={event.id}
                  ref={(el) => { if (el) eventRefs.current.set(idx, el); }}
                  data-index={idx}
                  onClick={() => handleEventCardClick(event.day, idx)}
                  className={`w-full text-left rounded-[28px] border p-6 transition duration-300 ease-out ${selectedDay === event.day ? 'border-red-900 bg-red-50 shadow-lg' : 'border-gray-200 bg-white hover:border-red-800 hover:shadow-lg'}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-normal text-red-900 font-semibold mb-2">{nepaliMonths[event.monthIndex]} {toNepaliDigits(event.day)}</p>
                      <h4 className="text-xl font-semibold text-gray-950 leading-tight">{event.title}</h4>
                    </div>
                    <div className="rounded-3xl bg-white/80 px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200">
                      {event.type.toUpperCase()}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} className="text-red-700" /> {event.time}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-red-700" /> {event.location}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-7">{event.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
