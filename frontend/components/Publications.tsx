import React from 'react';
import { Download, BookOpen, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

const publications = [
  { id: 1, title: "एकता! भदौ २०८१", type: "पत्रिका", date: "१५ भदौ २०८१", img: "https://picsum.photos/seed/pub1/300/400" },
  { id: 2, title: "प्यालेस्टाइनसँग ऐक्यबद्धता", type: "लेख संग्रह", date: "१६ फागुन २०८१", img: "https://picsum.photos/seed/pub2/300/400" },
  { id: 3, title: "५७ औं महाधिवेशन प्रस्तावहरू", type: "दस्तावेज", date: "०६ कार्तिक २०८०", img: "https://picsum.photos/seed/pub3/300/400" },
  { id: 4, title: "महिला र वर्ग: परिचय", type: "पुस्तक", date: "११ असोज २०८१", img: "https://picsum.photos/seed/pub4/300/400" },
];

const Publications: React.FC = () => {
  return (
    <section className="py-14 bg-white" id="publications">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="प्रशिक्षण सामग्री" 
          className="border-red-700"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.slice(0, 3).map((pub) => (
            <div key={pub.id} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-full aspect-[3/4] mb-5 overflow-hidden border border-gray-200 bg-white rounded-sm transition-all duration-300 transform group-hover:-translate-y-1">
                <img 
                    src={pub.img} 
                    alt={pub.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-3 py-1.5 shadow uppercase tracking-wider">
                   {pub.type}
                </div>
                <div className="absolute inset-0 bg-red-900/88 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-4 duration-300">
                    <button className="bg-white text-red-900 px-5 py-2.5 rounded-full font-bold flex items-center text-sm hover:bg-gray-100 transition-colors border border-gray-300">
                        <BookOpen size={18} className="mr-2"/> पढ्नुहोस्
                    </button>
                    <button className="border border-white text-white px-5 py-2.5 rounded-full font-bold flex items-center text-sm hover:bg-white hover:text-red-900 transition-colors">
                        <Download size={18} className="mr-2"/> पि.डी.एफ
                    </button>
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1.5 leading-tight group-hover:text-red-800 transition-colors tracking-normal">{pub.title}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{pub.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;