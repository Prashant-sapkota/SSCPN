
import React from 'react';
import { PenTool, Calendar, User, ArrowRight } from 'lucide-react';

const opinions = [
  {
    id: 1,
    title: "आवास संकट: पूँजीवादी व्यवस्थाको असफलता",
    author: "कमरेड आदर्श",
    date: "२०८१ भदौ १०",
    summary: "सहरी गरिबहरूको बसोबासको अधिकार खोसिँदै गएको सन्दर्भमा पूँजीवादी विकास मोडेलको आलोचना र वैज्ञानिक समाजवादी विकल्प।",
    image: "https://picsum.photos/seed/housing/800/600"
  },
  {
    id: 2,
    title: "एमसीसी र नेपालको स्वाधीनता",
    author: "विदेश विभाग",
    date: "२०८१ भदौ ०५",
    summary: "साम्राज्यवादी हस्तक्षेप विरुद्धको लडाईंमा एमसीसी परियोजनाले पारेको दीर्घकालीन असरहरूको विश्लेषण।",
    image: "https://picsum.photos/seed/mcc/800/600"
  },
  {
    id: 3,
    title: "जलवायु परिवर्तन र समाजवादी दृष्टिकोण",
    author: "विज्ञान विभाग",
    date: "२०८१ साउन २०",
    summary: "जलवायु संकट पुँजीवादी अतिदोहनको परिणाम हो। पर्यावरण संरक्षणका लागि समाजवादी मोडेलको आवश्यकता।",
    image: "https://picsum.photos/seed/climate/800/600"
  },
  {
    id: 4,
    title: "सांस्कृतिक क्रान्तिको आवश्यकता",
    author: "कमरेड विप्लव",
    date: "२०८१ असार १५",
    summary: "उपभोक्तावादी संस्कृतिले युवा पुस्तालाई कसरी भ्रष्टीकरण गर्दैछ र यसको विकल्पमा वैज्ञानिक संस्कृति कसरी निर्माण गर्ने?",
    image: "https://picsum.photos/seed/culture/800/600"
  }
];

const BicharPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* MASTHEAD */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <PenTool size={18} className="mr-2" />
                <span>वैचारिक स्तम्भ</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               विचार र विश्लेषण
             </h1>
             <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
               समसामयिक राजनीतिक, आर्थिक र सामाजिक मुद्दाहरूमा पार्टीको आधिकारिक दृष्टिकोण र नेताहरूको वैचारिक लेखहरू।
             </p>
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {opinions.map((op) => (
            <div key={op.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0">
               {/* Image */}
               <div className="w-full md:w-1/3 h-56 overflow-hidden rounded-lg">
                 <img 
                   src={op.image} 
                   alt={op.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                 />
               </div>

               {/* Content */}
               <div className="w-full md:w-2/3 flex flex-col">
                 <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <span className="flex items-center font-bold text-red-800"><User size={12} className="mr-1"/> {op.author}</span>
                    <span className="flex items-center"><Calendar size={12} className="mr-1"/> {op.date}</span>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-red-800 transition-colors leading-tight">
                   {op.title}
                 </h3>
                 
                 <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                   {op.summary}
                 </p>

                 <div className="mt-auto">
                   <span className="text-red-700 font-bold text-sm uppercase tracking-wide flex items-center group-hover:underline">
                     पूरा लेख पढ्नुहोस् <ArrowRight size={16} className="ml-2" />
                   </span>
                 </div>
               </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-12 text-center">
           <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-bold uppercase hover:bg-gray-800 hover:text-white transition-colors">
              थप लेखहरू
           </button>
        </div>
      </div>

    </div>
  );
};

export default BicharPage;
