
import React, { useState, useEffect } from 'react';
import { Cpu, Globe, Zap, Shield, Server, Wifi, Database, Menu, X, ChevronRight, BookOpen } from 'lucide-react';

const sections = [
  {
    id: 'force',
    title: '१. मुख्य उत्पादक शक्तिको रूपमा',
    content: (
      <div className="space-y-6">
        <p className="text-xl font-['Google_Sans'] text-gray-900 leading-relaxed">
           पार्टीले द्वन्द्वात्मक भौतिकवादको विधि प्रयोग गर्दै उत्पादक शक्तिमा आउने गुणात्मक परिवर्तनले नै मानव समाज र युगको रूपान्तरण गर्दछ भन्ने मान्यता राख्दछ।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <Database size={18} className="mr-2 text-red-700"/> गुणात्मक परिवर्तन
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              पुँजीवाद आफ्नो चौथो चरण अर्थात् <span className="font-bold">भूमण्डलीकृत पुँजीवाद</span> मा प्रवेश गरेको छ। सन् १९५० पछि भएको असाधारण प्रगतिका कारण विश्वको मुख्य उत्पादक शक्तिमा गुणात्मक परिवर्तन आएको छ।
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <Zap size={18} className="mr-2 text-red-700"/> नयाँ युगको परिभाषा
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              पुँजी (Capital) मुख्य उत्पादक शक्ति रहेको युगको अन्त्य भएको छ र त्यसको स्थानमा <span className="font-bold">विज्ञान र प्रविधि</span> (Science and Technology) मुख्य उत्पादक शक्ति बनेको युग सुरु भएको छ।
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <Server size={18} className="mr-2 text-red-700"/> श्रम र पुँजीको भूमिका
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              हजारौं मेसिन चलाउन अब केही अपरेटर मात्र आवश्यक पर्छ। यसले पुँजी, मेसिनरी र सामूहिक मानव श्रमको तुलनात्मक भूमिका घटेको र विज्ञान-प्रविधिको दक्षता विशाल रूपमा बढेको पुष्टि गर्छ।
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-800">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              <Globe size={18} className="mr-2 text-red-700"/> ज्ञान: सामूहिक सम्पत्ति
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              विज्ञान र प्रविधि मूलतः ज्ञान (Knowledge) हो। प्रकृतिका नियमहरूको स्वामित्व <span className="font-bold">सामुदायिक</span> (Communal Ownership) हुन सक्दछ भन्ने हाम्रो दर्शनको मुख्य पक्ष हो।
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'impact',
    title: '२. विश्व उत्पादन र श्रममा प्रभाव',
    content: (
      <div className="space-y-6">
         <p className="text-gray-800 leading-relaxed text-lg">
           विज्ञान-प्रविधिको उभारले विश्व अर्थतन्त्र र श्रमिक वर्गको संरचनालाई मौलिक रूपमा पुनर्गठन गरेको छ।
         </p>

         <div className="space-y-4">
           <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
             <h3 className="text-xl font-bold text-red-800 mb-2">भूमण्डलीकृत पुँजीवादको आधार</h3>
             <p className="text-gray-700 leading-relaxed">
               इन्टरनेट जस्ता प्रविधिको तीव्र विकासले विश्व पुँजीवादलाई भूमण्डलीकृत चरणमा पुर्‍यायो। यसले बहुपक्षीय संस्था र बहुराष्ट्रिय कम्पनीमार्फत उत्पीडित राष्ट्र र श्रमिकहरूको एकीकृत लुट सम्भव बनाएको छ।
             </p>
           </div>
           
           <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
             <h3 className="text-xl font-bold text-red-800 mb-2">श्रमिक विस्थापन</h3>
             <p className="text-gray-700 leading-relaxed">
               प्रविधिको दक्षताले लाखौं औद्योगिक मजदुरहरूलाई विस्थापित गरेको छ र उनीहरूलाई सेवा क्षेत्र, विशेष गरी असंगठित क्षेत्र (Gig Economy) मा धकेलेको छ।
             </p>
           </div>
           
           <div className="bg-white p-6 rounded border border-gray-200 shadow-sm">
             <h3 className="text-xl font-bold text-red-800 mb-2">आर्थिक असमानता</h3>
             <p className="text-gray-700 leading-relaxed">
               पुँजीको केन्द्रीकरण र श्रमको विस्थापनले गर्दा धनी र गरिब बीचको खाडल पहिलेको तुलनामा १० गुणाले वृद्धि भएको छ।
             </p>
           </div>
         </div>
      </div>
    )
  },
  {
    id: 'abundance',
    title: '३. प्रचुरताको युग र पुँजीवादी षड्यन्त्र',
    content: (
       <div className="space-y-8">
          <div>
             <p className="text-gray-800 text-lg leading-relaxed mb-4">
                पार्टीले विज्ञान-प्रविधिलाई ठूलो परिमाणमा उत्पादन (Mass Production) क्षमताको माध्यमबाट उत्तर-पुँजीवादी समाजको आधार तयार गर्ने शक्तिको रूपमा देख्छ।
             </p>
             <div className="bg-red-50 p-6 rounded border-l-4 border-red-800">
                <h4 className="font-bold text-red-900 mb-2 text-lg">प्रचुर उत्पादन (Abundant Production)</h4>
                <p className="text-gray-800">
                  मार्क्स र एंगेल्सले संश्लेषण गरेजस्तै, विज्ञान-प्रविधि निर्देशित अर्थतन्त्रले प्रचुरताको युग सुरु गरेको छ। अब गाँस, बास, कपास, शिक्षा, स्वास्थ्य र मनोरञ्जन जस्ता आधारभूत आवश्यकताहरू पर्याप्त उत्पादन गर्न सकिन्छ।
                </p>
                <p className="text-gray-600 text-sm italic mt-4">
                   उदाहरण: डिजिटल वस्तुहरूको वितरणले यो पुष्टि गर्छ। 'कम्युनिस्ट घोषणापत्र' इन्टरनेटमा राखेपछि अर्बौं मानिसले एकैचोटि पढ्न सक्छन्, प्रतिहरू सकिँदैनन्।
                 </p>
             </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Google_Sans']">पुँजीवादी उपायहरू</h3>
             <p className="text-gray-700 mb-4">
               प्रविधिले प्रचुरता सम्भव बनाए पनि, नाफा कायम राख्न पुँजीवादले नयाँ रणनीतिहरू अपनाउन बाध्य भएको छ:
             </p>
             <ul className="grid sm:grid-cols-2 gap-4">
                <li className="bg-gray-50 p-3 rounded border border-gray-200">
                   <span className="font-bold text-red-800 block mb-1">१. कृत्रिम अभाव</span>
                   <span className="text-sm text-gray-600">सामान लुकाएर वा उत्पादन घटाएर मूल्य बढाउने।</span>
                </li>
                <li className="bg-gray-50 p-3 rounded border border-gray-200">
                   <span className="font-bold text-red-800 block mb-1">२. उपभोक्तावाद</span>
                   <span className="text-sm text-gray-600">अनावश्यक उपभोगको लत सिर्जना गर्ने।</span>
                </li>
                <li className="bg-gray-50 p-3 rounded border border-gray-200">
                   <span className="font-bold text-red-800 block mb-1">३. कमजोर उत्पादन</span>
                   <span className="text-sm text-gray-600">छिटो बिग्रने सामान बनाई पटक-पटक किन्न बाध्य पार्ने।</span>
                </li>
                <li className="bg-gray-50 p-3 rounded border border-gray-200">
                   <span className="font-bold text-red-800 block mb-1">४. डिजिटल नियोजित अप्रचलन</span>
                   <span className="text-sm text-gray-600">सफ्टवेयर अपडेटसँगै भाइरस पठाएर पुराना डिभाइस ढिलो बनाउने।</span>
                </li>
             </ul>
          </div>
       </div>
    )
  },
  {
    id: 'significance',
    title: '४. वैज्ञानिक समाजवादी क्रान्तिको महत्व',
    content: (
       <div className="space-y-6">
           <p className="text-gray-800 text-lg leading-relaxed">
             मुख्य उत्पादक शक्तिको रूपमा विज्ञान-प्रविधिको पहिचानले नै नयाँ क्रान्तिको रणनीति निर्धारण गर्दछ।
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-800 transition-colors">
                 <Wifi className="text-red-800 mb-4" size={24} />
                 <h4 className="font-bold text-gray-900 mb-2">नयाँ क्रान्तिको आधार</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   कम्युनिस्ट आन्दोलनको पुरानो चक्र पूरा भएको छ। अबको क्रान्तिकारी रणनीति <span className="font-bold text-red-800">विज्ञान र प्रविधिमा आधारित</span> भएर मात्र भूमण्डलीकृत पुँजीवादलाई परास्त गर्न सकिन्छ।
                 </p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-800 transition-colors">
                 <Shield className="text-red-800 mb-4" size={24} />
                 <h4 className="font-bold text-gray-900 mb-2">साम्राज्यवादसँग प्रतिरोध</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   विज्ञान-प्रविधिको प्रयोग नै त्यो मुख्य कारक हो जसले उत्पीडित राष्ट्रहरूलाई विश्व साम्राज्यवादको <span className="font-bold text-red-800">डटेर प्रतिवाद</span> गर्न सक्षम बनाउँछ।
                 </p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-800 transition-colors">
                 <Server className="text-red-800 mb-4" size={24} />
                 <h4 className="font-bold text-gray-900 mb-2">सैन्य विकास</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   क्रान्ति सम्पन्न गर्न र वैज्ञानिक समाजवादी व्यवस्थाको रक्षा गर्न आवश्यक <span className="font-bold text-red-800">सूचना-प्रविधि र आधुनिक हतियार</span> सहितको सैन्य संरचना विकास गरिनुपर्छ।
                 </p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg hover:border-red-800 transition-colors">
                 <Database className="text-red-800 mb-4" size={24} />
                 <h4 className="font-bold text-gray-900 mb-2">शक्ति सन्तुलन</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   आजको युगमा अरबौं पुँजीले मात्र शक्ति सुनिश्चित गर्दैन; बरु जसले मुख्य उत्पादक शक्ति (S&T) लाई कुशलतापूर्वक प्रयोग गर्छ, उसैले शक्ति हासिल गर्छ।
                 </p>
              </div>
           </div>
       </div>
    )
  }
];

const BigyanPrabidhiPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('force');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white from-white via-slate-100 to-slate-50 border-b border-slate-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 ">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.24)] px-8 py-12 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-end">
               <div className="h-40 w-40 rounded-full bg-red-100/80 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-center text-center gap-6">
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 font-['Google_Sans'] leading-tight">
                 विज्ञान र <span className="text-red-900">प्रविधि</span>
               </h1>
               <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
                 विज्ञान र प्रविधि (Science and Technology) वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपालको दर्शन र क्रान्तिकारी रणनीतिको आधारस्तम्भ हो। हाम्रो विश्लेषणमा यो नै वर्तमान युगको मुख्य उत्पादक शक्ति हो।
               </p>
               <div className="grid gap-4 sm:grid-cols-2 w-full">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-red-50 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1">
                     <p className="text-xs uppercase tracking-[0.24em] text-red-700 font-semibold mb-3">मुख्य विचार</p>
                     <p className="text-sm text-slate-700 leading-relaxed">विज्ञान र प्रविधिले नयाँ सामाजिक आर्थिक युगको मार्गनिर्देशन गर्छ।</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-red-50 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1">
                     <p className="text-xs uppercase tracking-[0.24em] text-red-700 font-semibold mb-3">रणनीति</p>
                     <p className="text-sm leading-relaxed text-slate-700">विज्ञान-प्रविधिले पुँजीवादको नयाँ स्वरूपलाई परास्त गर्न सक्नेछ।</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
        
        {/* Mobile Toggle */}
        <div className="lg:hidden mb-6">
           <button 
             className="flex items-center text-red-800 font-bold text-sm border border-red-200 px-4 py-3 rounded shadow-sm bg-white w-full justify-between"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
              <span className="flex items-center">
                 <Menu size={20} className="mr-2"/> विषयसूची (Table of Contents)
              </span>
           </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative items-start">

          {/* SIDEBAR NAVIGATION */}
          <div className={`
             lg:w-1/4 lg:block lg:sticky lg:top-24 self-start
             ${mobileMenuOpen ? 'fixed inset-0 z-50 bg-slate-100 p-6 overflow-y-auto' : 'hidden'}
          `}>
             <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-bold text-xl text-slate-900">विषयसूची</h3>
                <button className="text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}><X size={24}/></button>
             </div>

             <div className="bg-white/95 rounded-[1.75rem] border border-slate-200 p-4 shadow-lg shadow-slate-200/70 backdrop-blur-xl">
                <div className="px-4 py-3 border-b border-slate-200 mb-3">
                   <h3 className="font-semibold text-slate-500 uppercase text-xs tracking-[0.25em]">अध्यायहरू</h3>
                </div>
                <nav className="space-y-2">
                   {sections.map((section) => (
                      <button
                         key={section.id}
                         onClick={() => scrollToSection(section.id)}
                         className={`w-full text-left px-4 py-3 rounded-3xl text-sm font-medium transition-all duration-200 flex items-center justify-between
                            ${activeSection === section.id 
                               ? 'bg-red-50 text-red-900 font-semibold shadow-sm shadow-red-100 border-l-4 border-red-800' 
                               : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                         `}
                      >
                         <span className="truncate">{section.title}</span>
                         {activeSection === section.id && <ChevronRight size={16} className="text-red-700" />}
                      </button>
                   ))}
                </nav>
             </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:w-3/4 w-full">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-10">
                   {sections.map((section) => (
                      <section key={section.id} id={section.id} className="scroll-mt-32">
                         <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_-22px_rgba(15,23,42,0.18)] p-10 transition duration-500 ease-out hover:-translate-y-1">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                               <div className="min-w-0">
                                  <p className="text-xs uppercase tracking-[0.28em] text-red-700 font-semibold mb-2">अध्याय</p>
                                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-['Google_Sans'] leading-tight">
                                    {section.title}
                                  </h2>
                               </div>
                            </div>
                            <div className="prose prose-lg prose-red max-w-none text-slate-700 font-['Google_Sans']">
                               {section.content}
                            </div>
                         </div>
                      </section>
                   ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigyanPrabidhiPage;
