import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import SectionHeader from './SectionHeader';

const newsItems = [
  {
    id: 1,
    title: "औद्योगिक हड्ताल र मजदुर अधिकार सम्बन्धमा पार्टीको विज्ञप्ति",
    category: "विज्ञप्ति",
    date: "१५ भदौ, २०८१",
    image: "https://picsum.photos/seed/news1/600/400",
    summary: "मजदुरको न्यूनतम ज्याला वृद्धि र श्रमिक अधिकारका लागि देशव्यापी संघर्षको आह्वान।"
  },
  {
    id: 2,
    title: "अन्तर्राष्ट्रिय ऐक्यबद्धता: क्युबाली कमरेडहरूलाई पत्र",
    category: "अन्तर्राष्ट्रिय",
    date: "१२ भदौ, २०८१",
    image: "https://picsum.photos/seed/news2/600/400",
    summary: "क्युबाली जनताको प्रतिरोधसँग ऐक्यबद्धता जनाउँदै अन्तर्राष्ट्रिय समर्थन सन्देश जारी।"
  },
  {
    id: 3,
    title: "आवास संकट: पूँजीवादी व्यवस्थाको असफलता",
    category: "विचार",
    date: "१० भदौ, २०८१",
    image: "https://picsum.photos/seed/news3/600/400",
    summary: "आवास संकट समाधानका लागि समाजवादी विकल्प र सार्वजनिक उत्तरदायित्वमा जोड।"
  }

];

const pressReleases = [
  { id: 1, title: "तत्काल युद्धविरामको माग: पार्टीको आधिकारिक धारणा", date: "भदौ ०५, २०८१" },
  { id: 2, title: "मूल्यवृद्धि विरुद्ध देशव्यापी प्रदर्शनको घोषणा", date: "भदौ ०२, २०८१" },
  { id: 3, title: "बाढी पीडितहरूको उद्धारमा खटिन कार्यकर्तालाई निर्देशन", date: "साउन २८, २०८१" },
  { id: 4, title: "संसद विघटनको प्रयास विरुद्ध भर्त्सना", date: "साउन १५, २०८१" }
];

const PressSection: React.FC = () => {
  return (
    <section className="py-14 bg-white" id="press-releases">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Our Take (Visual Grid) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <SectionHeader 
              title="हाम्रो धारणा" 
              actionText="सबै हेर्नुहोस्" 
              actionLink="#"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.slice(0, 3).map((item) => (
                <div key={item.id} className="group cursor-pointer flex flex-col h-full bg-white ring-1 ring-gray-200 hover:ring-gray-300 transition-all duration-300 rounded-sm overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-52">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    {/* White tag instead of red */}
                    <div className="absolute top-3 left-3 bg-white text-red-900 text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide shadow-sm">
                      {item.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Meta Data */}
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4 font-medium uppercase tracking-wide">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1.5" />
                        {item.date}
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-800 leading-tight mb-2 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-5">
                      {item.summary}
                    </p>

                    <div className="mt-auto pt-2">
                      <span className="text-red-800 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                        पूरा पढ्नुहोस् <ArrowRight size={14} className="ml-1.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Press Releases (List) */}
          <div className="lg:col-span-4 xl:col-span-3">
             <SectionHeader 
              title="प्रेस विज्ञप्ति" 
              actionText="अभिलेख" 
              actionLink="#"
            />

            <div className="bg-white rounded-sm p-6 space-y-4">
              {pressReleases.slice(0, 3).map((item) => (
                <div key={item.id} className="flex flex-col bg-white ring-1 ring-gray-200 p-4 group">
                  <div className="flex items-center mb-2">
                    <Tag size={12} className="text-red-600 mr-2" />
                    <span className="text-xs text-red-700 font-bold uppercase tracking-wide">विज्ञप्ति</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-red-800 cursor-pointer mb-2 leading-snug transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-medium flex items-center uppercase tracking-wide">
                    <Clock size={12} className="mr-1.5" /> {item.date}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-right">
               <button className="text-red-800 font-bold uppercase tracking-wider text-sm flex items-center justify-end hover:text-red-600 transition-colors !border-0">
                 थप विज्ञप्तिहरू <ArrowRight size={18} className="ml-2" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PressSection;