import React from 'react';
import { User, Calendar, Target, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const wings = [
  {
    name: "वैज्ञानिक समाजवादी विद्यार्थी संगठन, नेपाल",
    description: "वैज्ञानिक, व्यवहारिक र जनवादी शिक्षाको लागि संघर्षरत विद्यार्थीहरूको साझा मोर्चा।",
    leader: "कमरेड रमेश",
    established: "२०६५",
    focus: "शिक्षा",
    image: "https://picsum.photos/seed/student_union/800/600",
    link: "#"
  },
  {
    name: "वैज्ञानिक समाजवादी महिला संगठन, नेपाल",
    description: "पितृसत्तात्मक उत्पीडनको अन्त्य र महिला मुक्तिका लागि क्रियाशील क्रान्तिकारी संगठन।",
    leader: "कमरेड सीता",
    established: "२०६६",
    focus: "लैंगिक समानता",
    image: "https://picsum.photos/seed/women_march/800/600",
    link: "#"
  },
  {
    name: "वैज्ञानिक समाजवादी ट्रेड युनियन महासंघ",
    description: "मजदुरहरूको हक, अधिकार, उचित ज्याला र सुरक्षित कार्यस्थलको सुनिश्चितताको लागि लड्ने शक्ति।",
    leader: "कमरेड हरि",
    established: "२०६४",
    focus: "श्रम अधिकार",
    image: "https://picsum.photos/seed/factory_workers/800/600",
    link: "#"
  },
  {
    name: "जात व्यवस्था उन्मूलन मोर्चा, नेपाल",
    description: "जातीय विभेद र छुवाछूतको अन्त्य गरी समतामूलक समाज निर्माण गर्न समर्पित।",
    leader: "कमरेड विप्लव",
    established: "२०६७",
    focus: "सामाजिक न्याय",
    image: "https://picsum.photos/seed/protest_dalit/800/600",
    link: "#"
  },
  {
    name: "उत्पीडित राष्ट्र मुक्ति मोर्चा, नेपाल",
    description: "उत्पीडित समुदाय र राष्ट्रियताको पहिचान, स्वायत्तता र अधिकारका लागि संघर्षरत।",
    leader: "कमरेड पासाङ",
    established: "२०६८",
    focus: "पहिचान",
    image: "https://picsum.photos/seed/flag_rally/800/600",
    link: "#"
  },
  {
    name: "वैज्ञानिक सांस्कृतिक केन्द्र, नेपाल",
    description: "साम्राज्यवादी संस्कृति विरुद्ध जनवादी कला, साहित्य र संस्कृतिको संरक्षण तथा सम्वर्द्धन गर्ने।",
    leader: "कमरेड अनिल",
    established: "२०७०",
    focus: "संस्कृति",
    image: "https://picsum.photos/seed/culture_dance/800/600",
    link: "#"
  },
  {
    name: "वैज्ञानिक समाजवादी शिक्षक संगठन",
    description: "शिक्षा क्षेत्रमा व्याप्त व्यापारीकरण अन्त्य गर्न र शिक्षकहरूको पेशागत हकहितका लागि।",
    leader: "कमरेड गुरु",
    established: "२०६९",
    focus: "शिक्षण",
    image: "https://picsum.photos/seed/teachers/800/600",
    link: "#"
  },
  {
    name: "युवा लिग, नेपाल",
    description: "देशको परिवर्तन र विकासमा युवाहरूको नेतृत्वदायी भूमिका सुनिश्चित गर्न।",
    leader: "कमरेड प्रकाश",
    established: "२०६६",
    focus: "युवा नेतृत्व",
    image: "https://picsum.photos/seed/youth_rally/800/600",
    link: "#"
  }
];

const OrganizationGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="organizations">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="जनवर्गीय संगठनहरू" 
          actionText="सबै संगठनहरू बारे जान्नुहोस्" 
          actionLink="#"
        />

        {/* Detailed Cards Grid - Limited to 4 items (1 row on XL screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wings.slice(0, 4).map((wing, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-200"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={wing.image} 
                  alt={wing.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                {/* White tag instead of yellow */}
                <div className="absolute top-4 right-4 bg-white text-red-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg uppercase tracking-wide">
                  <Target size={12} className="mr-1.5" /> {wing.focus}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Decorative top red line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <h3 className="text-xl font-bold text-red-900 mb-3 group-hover:text-red-700 transition-colors leading-tight mt-2">
                  {wing.name}
                </h3>

                {/* Info Metadata - Removed Location */}
                <div className="flex flex-wrap gap-y-2 gap-x-6 mb-5 text-xs text-gray-500 border-b border-gray-100 pb-4 font-bold uppercase tracking-wider">
                  <div className="flex items-center" title="संयोजक">
                    <User size={14} className="mr-1.5 text-red-600" />
                    <span>{wing.leader}</span>
                  </div>
                  <div className="flex items-center" title="स्थापना">
                    <Calendar size={14} className="mr-1.5 text-red-600" />
                    <span>{wing.established}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1">
                  {wing.description}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={wing.link} 
                    className="w-full block text-center bg-gray-50 hover:bg-red-50 text-red-800 font-bold uppercase text-xs tracking-widest py-4 rounded-sm border border-gray-200 hover:border-red-200 transition-colors group/btn"
                  >
                    थप जानकारी <ArrowRight size={14} className="inline ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationGrid;