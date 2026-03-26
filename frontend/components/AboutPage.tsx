import React from 'react';
import { BookOpen, Users, Target, Atom, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const toNepaliNumber = (num: number) =>
    num
      .toString()
      .replace(/\d/g, (digit) => '०१२३४५६७८९'[Number(digit)]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 space-y-24 pb-24">
        
        {/* 2. INTRODUCTION (Short & To the Point) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-white">
          <div className="relative h-[500px] w-full overflow-hidden rounded-sm shadow-xl">
             <img 
               src="https://picsum.photos/seed/rally_about/800/1000" 
               alt="Party Rally" 
               className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
             <div className="absolute bottom-10 left-10 text-white">
                <p className="font-bold text-xl uppercase tracking-widest">निरन्तर क्रान्ति</p>
             </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-8 leading-tight">
              वैज्ञानिक समाजवादतर्फको यात्रा
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 font-serif">
              <p>
                हामी <span className="text-red-800 font-bold">वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल</span> हौं। हाम्रो स्थापनाको मूल उद्देश्य दलाल पुँजीवाद र सामन्ती अवशेषहरूको अन्त्य गरी नेपालमा वैज्ञानिक समाजवाद स्थापना गर्नु हो।
              </p>
              <p>
                इतिहासका विफलताहरूबाट पाठ सिक्दै र २१औं शताब्दीको विज्ञान–प्रविधिलाई आत्मसात गर्दै हामी नयाँ युगको क्रान्तिमा होमिएका छौं। हामी केवल सत्ता परिवर्तन होइन, उत्पादन सम्बन्ध र सामाजिक संरचनाको आमूल रूपान्तरण चाहन्छौं।
              </p>
            </div>
          </div>
        </section>

        {/* 3. STATS SECTION (4 Columns) */}
        <section className="bg-neutral-50 border-y border-gray-200 py-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="p-4">
                 <div className="text-5xl md:text-6xl font-bold text-red-800 font-serif mb-3">७७</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500">जिल्ला कमिटी</div>
              </div>
              <div className="p-4 md:border-l border-gray-200">
                 <div className="text-5xl md:text-6xl font-bold text-red-800 font-serif mb-3">५०K+</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500">संगठित सदस्य</div>
              </div>
              <div className="p-4 md:border-l border-gray-200">
                 <div className="text-5xl md:text-6xl font-bold text-red-800 font-serif mb-3">५००+</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500">पूर्णकालीन कार्यकर्ता</div>
              </div>
              <div className="p-4 md:border-l border-gray-200">
                 <div className="text-5xl md:text-6xl font-bold text-red-800 font-serif mb-3">७</div>
                 <div className="text-sm font-bold uppercase tracking-widest text-gray-500">जनवर्गीय संगठन</div>
              </div>
           </div>
        </section>

        {/* 4. IDEOLOGIES */}
        <section className="bg-white">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
             <div className="bg-white border border-gray-200 p-8 md:p-10">
               <span className="text-red-700 font-bold uppercase tracking-widest text-sm mb-3 block">दर्शन</span>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-8 leading-tight">हाम्रो वैचारिक आधार</h2>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { icon: <BookOpen size={24} />, label: 'मार्क्सवाद' },
                   { icon: <Users size={24} />, label: 'लेनिनवाद' },
                   { icon: <Target size={24} />, label: 'माओवाद' },
                   { icon: <Atom size={24} />, label: 'वैज्ञानिक समाजवाद' }
                 ].map((item) => (
                   <div key={item.label} className="border border-gray-200 bg-gray-50 p-5 flex items-center justify-between">
                     <span className="text-xl md:text-2xl font-serif font-bold text-gray-900">{item.label}</span>
                     <span className="text-red-700">{item.icon}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="relative min-h-[360px] overflow-hidden rounded-sm border border-gray-200">
               <img
                 src="/marx-lenin.png"
                 alt="वैचारिक आधार"
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
        </section>

        {/* 5. PARTY OBJECTIVES */}
        <section className="bg-white p-6 md:p-10 lg:p-12">
          <div className="text-center mb-14">
            <span className="text-red-700 font-bold uppercase tracking-widest text-sm mb-4 block">दिशा</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">पार्टीको उद्देश्य</h2>
          </div>

          <div className="space-y-0">
            {[
              'भूमण्डलीकृत पुँजीवाद र त्यसबाट पालित-पोषित दलाल पुँजीवादी संसदीय व्यवस्थाका विरुद्ध सङ्घर्ष गर्दै सर्वहारा-श्रमिक र विस्थापित वर्गको सत्ता निर्माण गर्दै वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्ने।',
              'सबै खालका शोषण, विभेद, दमन र उत्पीडनको अन्त्य गर्दै शोषणरहित वर्गविहीन समाज निर्माण गर्ने।',
              'वैज्ञानिक समाजवादीहरुको वैज्ञानिक समाजवादी अन्तर्राष्ट्रिय (Scientific Socialist International - SSI) निर्माणको निम्ति पहल गर्ने।',
              'दलाल पुँजीवादी संसदीय परजीवी व्यवस्थाको विरुद्ध आत्मनिर्भर उत्पादन प्रणाली निर्माण गर्दै स्वाधीन र आत्मनिर्भर देश बनाउने।',
              'पार्टी जीवनको प्रारम्भदेखि नै पितृसत्ताको अन्त्य र महिला मुक्तिको सवाल अनि जात व्यवस्थाको अन्त्य र दलित समुदायको मुक्तिको सवाललाई वर्गीय शोषण-उत्पीडनसरहकै घनत्वको ठानी समतामूलक समाज निर्माणमा दृढ सङ्कल्पित भएर क्रियाशील हुने।',
              'आजको युगको प्रमुख उत्पादक शक्ति विज्ञान-प्रविधिका आधारमा वैज्ञानिक समाजवादी सामाजिक व्यवस्थाको राजनीतिक, आर्थिक, सामाजिक र सांस्कृतिक प्रणाली निर्माण तथा विकास गर्ने।',
              'निजी स्वामित्वको अन्त्य गर्न राष्ट्रियकरण नगरी सम्पूर्ण रूपमा सामुदायिकीकरण गर्ने। समुदायलाई उत्पादक र समुदायलाई नै उपभोक्ता बनाउने अभियान तीव्र पार्ने।',
              'सबै जाति वा उत्पीडित राष्ट्रहरुको आत्मनिर्णयको अधिकारसहित बहुराष्ट्रिय राज्य बनाउने।',
              'नेपाली समाजको आमूल परिवर्तनका लागि सञ्चालित समग्र परिवर्तनको आन्दोलन, १० वर्षे जनयुद्ध, जनसङ्घर्षहरु र जनआन्दोलनका सहिदको गहिरो स्मरण गर्दै क्रान्तिको हर मोर्चामा पूर्ण रूपमा वैज्ञानिक समाजवाद स्थापना नहुन्जेल सङ्घर्ष गर्न दृढसङ्कल्प रहने।',
              'पुँजीवादले ध्वस्त पारेको पर्यावरणको रक्षाका निम्ति सम्पूर्ण प्रयत्न गर्ने।',
              'भूमण्डलीकृत पुँजीवाद, नवउपनिवेशवाद, राष्ट्रिय आत्मसमर्पणवाद र राष्ट्रघाती शक्तिका विरुद्ध राष्ट्रिय स्वाधीनताको रक्षाका लागि आवश्यक पर्दा राष्ट्रिय प्रतिरोध युद्धको विकास गर्ने।'
            ].map((objective, index) => (
              <div key={index} className="py-6 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="flex-shrink-0 text-4xl md:text-5xl font-bold font-sans text-red-800 leading-none min-w-[2.5rem]">
                    {toNepaliNumber(index + 1)}
                  </div>
                  <p className="text-gray-800 text-lg leading-relaxed font-sans">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 6. CTA SECTION */}
      <section className="relative py-16 bg-red-950 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl"></div>
           <div className="absolute top-1/2 left-1/2 w-full h-full bg-red-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-5 leading-tight">
            इतिहास रच्ने अभियानमा सहभागी हुनुहोस्
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-7 max-w-3xl mx-auto font-light leading-relaxed">
            समाजवाद केवल एक विचार होइन, यो एक आन्दोलन हो। तपाईंको ऊर्जा, विचार र समर्पणले नै नयाँ नेपाल निर्माण गर्न सक्छ।
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-white text-red-900 px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-2xl flex items-center justify-center text-base">
               सदस्यता लिनुहोस् <ArrowRight size={22} className="ml-3" />
             </button>
             <button className="bg-transparent border-2 border-red-300 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-red-800 hover:border-red-800 transition-colors flex items-center justify-center text-base">
               सम्पर्क गर्नुहोस्
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;