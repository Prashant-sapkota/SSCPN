import React from 'react';
import { Network, ChevronRight, Calendar, MapPin } from 'lucide-react';

const featuredUpdate = {
  id: 1,
  title: "मेची-महाकाली संगठन विस्तार अभियान सुरु",
  date: "२०८१ भदौ १५",
  location: "झापा",
  description: "‘गाउँ फर्कौं, संगठन बनाऔं’ भन्ने मूल नाराका साथ ३ महिने राष्ट्रिय अभियानको आज औपचारिक उद्घाटन गरियो। देशका ७७ वटै जिल्लामा एकसाथ सुरु भएको यो अभियानले पार्टीलाई नयाँ उचाइमा पुर्याउने विश्वास लिइएको छ।",
  image: "https://picsum.photos/seed/rally_org/1600/900"
};

const updates = [
  {
    id: 2,
    title: "कर्णाली प्रदेश कमिटी पुनर्गठन सम्पन्न",
    date: "२०८१ भदौ १८",
    location: "सुर्खेत",
    description: "पार्टी केन्द्रको निर्देशन अनुसार कर्णाली प्रदेशको विस्तारित बैठकले ५१ सदस्यीय नयाँ कमिटी गठन गरेको छ।",
    image: "https://picsum.photos/seed/meeting1/800/600"
  },
  {
    id: 3,
    title: "काठमाडौं जिल्लाको प्रशिक्षण भेला सम्पन्न",
    date: "२०८१ भदौ १०",
    location: "प्रज्ञा भवन",
    description: "नयाँ सदस्यता प्राप्त गरेका ५०० युवाहरूलाई माक्र्सवाद र पार्टी विधान सम्बन्धी आधारभूत प्रशिक्षण दिइयो।",
    image: "https://picsum.photos/seed/training/800/600"
  },
  {
    id: 4,
    title: "लेवि व्यवस्थापन सम्बन्धि नयाँ निर्देशिका जारी",
    date: "२०८१ भदौ ०५",
    location: "केन्द्रीय कार्यालय",
    description: "आर्थिक पारदर्शिता कायम गर्न अर्थ विभागले नयाँ नियम लागू गरेको छ।",
    image: "https://picsum.photos/seed/office/800/600"
  },
  {
    id: 5,
    title: "गण्डकी प्रदेश स्तरीय कार्यकर्ता भेला",
    date: "२०८१ भदौ ०१",
    location: "पोखरा",
    description: "प्रदेश कमिटीको आयोजनामा वृहत कार्यकर्ता भेला सम्पन्न।",
    image: "https://picsum.photos/seed/pokhara/800/600"
  }
];

const SangathanatmakPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Page Header - White BG, Simple */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <Network size={18} className="mr-2" />
                <span>संगठन विभाग</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               संगठनात्मक गतिविधि
             </h1>
             <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
               पार्टी निर्माण, सदस्यता विस्तार र कमिटी प्रणाली सुदृढीकरण सम्बन्धी गतिविधिहरू।
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-12">
        
        {/* FEATURED SECTION */}
        <div className="bg-white mb-16 group cursor-pointer">
           <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img 
                src={featuredUpdate.image} 
                alt={featuredUpdate.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                 <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-wide mb-3 text-red-300">
                    <span className="bg-red-800 text-white px-2 py-1">मुख्य समाचार</span>
                    <span className="flex items-center"><Calendar size={14} className="mr-1"/> {featuredUpdate.date}</span>
                    <span className="flex items-center"><MapPin size={14} className="mr-1"/> {featuredUpdate.location}</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">
                   {featuredUpdate.title}
                 </h2>
                 <p className="text-gray-200 text-lg max-w-3xl line-clamp-2">
                   {featuredUpdate.description}
                 </p>
              </div>
           </div>
        </div>

        {/* UPDATES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white border border-gray-200 hover:border-red-800 transition-colors group flex flex-col h-full hover:shadow-lg">
              <div className="h-48 overflow-hidden relative">
                 <img src={update.image} alt={update.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                 <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <span className="flex items-center"><Calendar size={12} className="mr-1 text-red-700"/> {update.date}</span>
                 </div>
                 
                 <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-red-800 transition-colors">
                   {update.title}
                 </h3>
                 
                 <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
                   {update.description}
                 </p>
                 
                 <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center group-hover:underline">
                      पूरा पढ्नुहोस् <ChevronRight size={14} className="ml-1" />
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SangathanatmakPage;