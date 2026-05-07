
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Globe, MapPin, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const globalHistory = [
  {
    year: "1848",
    title: "कम्युनिष्ट म्यानिफेस्टो प्रकाशन",
    desc: "मार्क्स र एङ्गेल्सद्वारा Communist Manifesto प्रकाशित — वैज्ञानिक समाजवादको प्रारम्भिक वैचारिक जग।",
    icon: <History size={20} />
  },
  {
    year: "1871",
    title: "पेरिस कम्युन",
    desc: "७१ दिनको श्रमिक सत्ता। पराजयपछि मार्क्सको निष्कर्ष — पुरानो राज्य संरचना पूर्ण ध्वस्त नगरी समाजवाद सम्भव हुँदैन।",
    icon: <History size={20} />
  },
  {
    year: "1917",
    title: "अक्टोबर समाजवादी क्रान्ति",
    desc: "लेनिन नेतृत्वमा रूसमा सफल क्रान्ति। प्रमाणित गर्यो — क्रान्ति एक देशमै सम्पन्न हुन सक्छ।",
    icon: <History size={20} />
  },
  {
    year: "1917–1945",
    title: "विश्वभर विस्तार",
    desc: "अक्टोबर क्रान्तिको प्रभावमा औपनिवेशिक राष्ट्रहरू स्वतन्त्र हुने आन्दोलनमा उछाल। दोस्रो विश्वयुद्धताका संसारको दुई–तिहाइ भागमा कम्युनिष्ट प्रभाव।",
    icon: <History size={20} />
  },
  {
    year: "1949",
    title: "चीनमा जनवादी क्रान्ति",
    desc: "माओवादी रणनीति — ‘दीर्घ जनयुद्ध’ र किसानलाई केन्द्रीय शक्ति बनाउनु। मार्क्सवादको विकासमा ऐतिहासिक योगदान।",
    icon: <History size={20} />
  },
  {
    year: "1966",
    title: "सांस्कृतिक क्रान्ति",
    desc: "पार्टीभित्रका पूँजीवादी मार्गीहरुमाथि प्रहार। सामन्ती–पूँजीवादी विचारणको रूपान्तरणको प्रयास।",
    icon: <History size={20} />
  },
  {
    year: "1953–1991",
    title: "संशोधनवाद र सोभियत पतन",
    desc: "ख्रुश्चेव लाइन — ‘शान्तिपूर्ण सहअस्तित्व’ → संशोधनवाद। अन्ततः सोभियत र पूर्वी युरोपमा खुला पूँजीवादको पुनर्स्थापना।",
    icon: <History size={20} />
  },
  {
    year: "1991–वर्तमान",
    title: "विश्वव्यापीकरणको चरण",
    desc: "पूँजीवाद ‘Globalized Capitalism’ मा रूपान्तरित। विज्ञान–प्रविधि मुख्य उत्पादन शक्ति। मुख्य विरोधाभास — वैश्वीकरण/साम्राज्यवाद VS उत्पीडित राष्ट्रहरू।",
    icon: <History size={20} />
  }
];

const nepalHistory = [
  {
    year: "२००६ - २००७ साल",
    title: "कम्युनिष्ट पार्टीको स्थापना",
    desc: "नेपाल कम्युनिष्ट पार्टीको स्थापना २००६ साल वैशाख १० गते (२२ अप्रिल १९४९) कमरेड पुष्पलाल श्रेष्ठको नेतृत्वमा भारतको कलकत्तामा भयो। जहाँनिया राणा शासनको अन्त्य र सामन्तवादको विरोध गर्दै पार्टीले 'नौलो जनवाद' को कार्यक्रम अघि सार्‍यो। २००७ सालको क्रान्तिमा कम्युनिष्टहरुले महत्वपूर्ण भूमिका खेले पनि दिल्ली सम्झौता मार्फत क्रान्तिलाई धोका दिइयो भन्ने निष्कर्ष पार्टीले निकाल्यो। यो प्रारम्भिक चरणमा पार्टीले किसान र मजदुर संगठनहरुको निर्माण गरी वर्ग संघर्षको बीजारोपण गर्यो।",
    image: "https://picsum.photos/seed/pushpalal/800/600"
  },
  {
    year: "२०२८ - २०३५ साल",
    title: "झापा विद्रोह र पुनर्गठन",
    desc: "२०२८ सालमा झापा जिल्लामा युवा कम्युनिष्टहरुले 'वर्ग शत्रु खत्तम' अभियान सहित सशस्त्र झापा विद्रोहको सुरुवात गरे। यो विद्रोहले नेपालको कम्युनिष्ट आन्दोलनमा संशोधनवाद विरुद्ध नयाँ क्रान्तिकारी उर्जा सञ्चार गर्यो। यद्यपि यो आन्दोलनमा केही उग्रवामपन्थी विचलनहरु देखा परे, यसले पञ्चायती निरंकुशता विरुद्ध लड्ने नयाँ पुस्ता तयार गर्यो।",
    image: "https://picsum.photos/seed/jhapa_revolt/800/600"
  },
  {
    year: "२०४६ - २०५१ साल",
    title: "जनआन्दोलन र संसदीय अभ्यास",
    desc: "२०४६ सालमा वाम मोर्चा र नेपाली कांग्रेसको सहकार्यमा ऐतिहासिक जनआन्दोलन भयो जसले निरंकुश पञ्चायती व्यवस्थाको अन्त्य गरी बहुदलीय व्यवस्था पुनर्स्थापना गर्यो। तर, राजनीतिक परिवर्तनले मात्र जनताको आधारभूत वर्गीय समस्या समाधान गर्न सकेन। कम्युनिष्ट पार्टीहरु संसदीय अभ्यासमा सामेल भए पनि एउटा ठूलो तप्काले 'संसद खसीको टाउको देखाएर कुकुरको मासु बेच्ने थलो हो' भन्ने मान्यता राख्दै नयाँ क्रान्तिको तयारीमा जुट्यो।",
    image: "https://picsum.photos/seed/mass_movement/800/600"
  },
  {
    year: "२०५२ - २०६२ साल",
    title: "महान १० वर्षे जनयुद्ध",
    desc: "२०५२ फागुन १ गतेबाट सुरु भएको महान जनयुद्ध नेपालको इतिहासकै सबैभन्दा ठूलो सशस्त्र विद्रोह थियो। यसले ग्रामीण क्षेत्रमा सामन्ती सत्ताको अन्त्य गर्दै 'जनसत्ता' र 'जनअदालत' हरु निर्माण गर्यो। महिला, दलित, जनजाति र मधेसी समुदायमा आएको अभूतपूर्व राजनीतिक चेतना र जागरण जनयुद्धको मुख्य उपलब्धि थियो। शाही सेनासँगको लडाईं र रणनीतिक प्रत्याक्रमणको चरणसम्म पुग्दा जनयुद्धले देशको पुरानो संरचनालाई ध्वस्त पारेको थियो।",
    image: "https://picsum.photos/seed/peoples_war/800/600"
  },
  {
    year: "वर्तमान अवस्था",
    title: "वैज्ञानिक समाजवादको यात्रा",
    desc: "जनयुद्ध र २०६२/६३ को जनआन्दोलनको बलमा राजतन्त्रको अन्त्य भई संघीय लोकतान्त्रिक गणतन्त्र स्थापना भयो। तर, संविधानसभाबाट बनेको संविधानले पनि दलाल पूँजीवादी सत्तालाई नै संस्थागत गर्यो। आज देशमा भ्रष्टाचार, महँगी र युवा पलायन व्याप्त छ। पुरानो संसदीय व्यवस्था असफल भइसकेको सन्दर्भमा अबको एकमात्र विकल्प 'वैज्ञानिक समाजवाद' हो भन्ने निष्कर्षसहित पार्टीले एकीकृत जनक्रान्तिको कार्यदिशा अघि सारेको छ।",
    image: "https://picsum.photos/seed/socialism_flag/800/600"
  }
];

const ItihasPage: React.FC = () => {
  const globalScrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. MASTHEAD */}
      <div className="relative text-white border-b border-gray-800 overflow-hidden pb-10 bg-black">
        <div className="absolute inset-0 bg-[url('/marx-lenin.png')] bg-cover bg-center bg-no-repeat opacity-100"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-bold text-white font-['Google_Sans'] leading-tight mb-6 drop-shadow-xl">
               इतिहास: संघर्ष र क्रान्ति
             </h1>
             <p className="text-lg md:text-xl text-red-200/90 leading-relaxed max-w-2xl mx-auto">
               विश्व कम्युनिष्ट आन्दोलनका पाठहरू र नेपाली क्रान्तिको उतारचढावपूर्ण यात्रा।
             </p>

             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
               <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-5 shadow-xl transition-transform duration-500 hover:-translate-y-1">
                 <p className="text-sm uppercase tracking-normal text-red-200">सम्प्रदाय</p>
                 <p className="mt-3 text-3xl font-bold">विश्वव्यापी</p>
               </div>
               <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-5 shadow-xl transition-transform duration-500 hover:-translate-y-1">
                 <p className="text-sm uppercase tracking-[0.25em] text-red-200">देशीय संघर्ष</p>
                 <p className="mt-3 text-3xl font-bold">नेपाली आन्दोलन</p>
               </div>
               <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-5 shadow-xl transition-transform duration-500 hover:-translate-y-1">
                 <p className="text-sm uppercase tracking-[0.25em] text-red-200">सन्देश</p>
                 <p className="mt-3 text-3xl font-bold">वैज्ञानिक समाजवाद</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. GLOBAL TIMELINE */}
      <section className="py-5 pt-10 bg-white border-b border-gray-200 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16">
          
          <div className="flex items-center justify-between mt-10 mb-12">
            <div className="flex items-center">
              <div className="bg-red-800 p-3 rounded-full mr-4 text-white">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl font-bold font-['Google_Sans'] text-gray-900">
                विश्व कम्युनिष्ट आन्दोलन
              </h2>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => scroll(globalScrollRef, 'left')} className="p-2 border border-gray-300 rounded-full hover:bg-red-800 hover:text-white transition-colors"><ChevronLeft /></button>
              <button onClick={() => scroll(globalScrollRef, 'right')} className="p-2 border border-gray-300 rounded-full hover:bg-red-800 hover:text-white transition-colors"><ChevronRight /></button>
            </div>
          </div>

          {/* Timeline Container */}
          <div 
            ref={globalScrollRef}
            className="flex overflow-x-auto  pt-10 no-scrollbar snap-x snap-mandatory relative"
          >
            {/* Center Line */}
            <div className="absolute top-1/2 left-0 w-[200%] h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            {globalHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex-shrink-0 w-80 md:w-96 snap-center px-4 relative z-10 flex flex-col justify-center h-[500px]">
                  
                  {/* Vertical Connector Line */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 z-0
                    ${isEven ? 'bottom-1/2 h-16' : 'top-1/2 h-16'}
                  `}></div>

                  {/* Dot on Line */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-800 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md z-20 ring-1 ring-gray-200"></div>

                  {/* Top Card (Even items) */}
                  <div className={`mb-auto transition-all duration-300 hover:-translate-y-2 ${isEven ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white p-6 rounded border border-gray-200 shadow-sm border-t-4 border-t-red-800 h-full hover:shadow-lg transition-shadow">
                       <div className="flex justify-between items-start mb-2">
                           <span className="text-3xl font-bold text-gray-200">{item.year}</span>
                           <div className="text-red-800 bg-red-50 p-1 rounded">{item.icon}</div>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                       <p className="text-sm text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Year Label on Line */}
                  <div className={`absolute left-1/2 -translate-x-1/2 font-bold text-red-800 bg-white border border-gray-200 px-3 py-1 text-xs rounded-full z-20 shadow-sm ${isEven ? 'top-[53%]' : 'bottom-[53%]'}`}>
                    {item.year}
                  </div>

                  {/* Bottom Card (Odd items) */}
                  <div className={`mt-auto transition-all duration-300 hover:translate-y-2 ${!isEven ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                     <div className="bg-white p-6 rounded border border-gray-200 shadow-sm border-b-4 border-b-red-800 h-full hover:shadow-lg transition-shadow">
                       <div className="flex justify-between items-start mb-2">
                           <span className="text-3xl font-bold text-gray-200">{item.year}</span>
                           <div className="text-red-800 bg-red-50 p-1 rounded">{item.icon}</div>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                       <p className="text-sm text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                  </div>

                </div>
              );
            })}
             <div className="w-24 flex-shrink-0"></div>
          </div>
        </div>
      </section>

      {/* 3. NEPAL HISTORY - Narrative Paragraphs with Photos */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16">
          
          <div className="flex items-center justify-center mb-20">
            <div className="bg-neutral-800 p-3 rounded-full mr-4 text-white">
              <MapPin size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-['Google_Sans'] text-gray-900">
              नेपालको कम्युनिष्ट आन्दोलन
            </h2>
          </div>

          <div className="space-y-24">
             {nepalHistory.map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                   
                   {/* Image Side */}
                   <div className="w-full md:w-1/2 relative group">
                      {/* Decorative Border Frame */}
                      <div className="absolute top-4 -left-4 w-full h-full border-2 border-red-800 z-0 hidden md:block group-hover:top-2 group-hover:-left-2 transition-all duration-300"></div>
                      
                      <div className="relative z-10 overflow-hidden shadow-xl rounded-sm">
                         <img 
                           src={item.image} 
                           alt={item.title} 
                           className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                         />
                      </div>
                      
                      {/* Badge for Year */}
                      <div className="absolute top-0 right-0 bg-red-800 text-white font-bold px-4 py-2 z-20 shadow-lg text-sm md:text-base border-b-2 border-l-2 border-white">
                         {item.year}
                      </div>
                   </div>
                   
                   {/* Text Side */}
                   <div className="w-full md:w-1/2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-1 bg-red-800 mr-4"></div>
                        <span className="text-red-800 font-bold uppercase tracking-widest text-sm">ऐतिहासिक कालखण्ड</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 font-['Google_Sans'] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify font-light">
                        {item.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>

        </div>
      </section>
      
      {/* 4. REVOLUTIONARY CTA - Minimal Version */}
      <section className="relative py-16 bg-red-950 border-t border-red-900 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-10">
            <img 
                src="https://picsum.photos/seed/rally_crowd/1600/900" 
                alt="Background" 
                className="w-full h-full object-cover grayscale"
            />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold font-['Google_Sans'] text-white mb-4 leading-tight">
             दर्शक होइन, योद्धा बन्नुहोस्
           </h2>
           
           <p className="text-red-100 mb-8 text-lg font-light">
             संसदीय व्यवस्थाको विकल्पमा वैज्ञानिक समाजवाद निर्माण गर्न आजै पार्टी सदस्यता लिनुहोस्।
           </p>
           
           <button 
             onClick={() => navigate('/membership')}
             className="inline-flex items-center px-8 py-3 text-base font-bold text-red-900 bg-white rounded-sm hover:bg-gray-100 transition-colors shadow-lg"
           >
             सदस्यता आवेदन <ChevronRight className="ml-2" size={20} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default ItihasPage;
