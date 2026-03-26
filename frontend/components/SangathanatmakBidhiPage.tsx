
import React, { useState, useEffect } from 'react';
import { Book, Users, Scale, Shield, Landmark, ChevronRight, Menu, X, Network } from 'lucide-react';

const sections = [
  { id: 'nature', title: '१. पार्टीको प्रकृति र दर्शन', icon: <Users size={18} /> },
  { id: 'principles', title: '२. संगठनात्मक सिद्धान्त', icon: <Scale size={18} /> },
  { id: 'structure', title: '३. संगठनात्मक संरचना', icon: <Landmark size={18} /> },
  { id: 'conduct', title: '४. आचरण र संस्कृति', icon: <Shield size={18} /> },
];

const SangathanatmakBidhiPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('nature');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy to update active section based on scroll position
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
      const headerOffset = 100; // Adjusted for sticky header + spacing
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
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <Network size={18} className="mr-2" />
                <span>प्रशिक्षण सामग्री</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               संगठनात्मक विधि
             </h1>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify md:text-center">
               वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल (SSCPN) को संगठनात्मक विधि वैज्ञानिक समाजवादको राजनीतिक कार्यदिशाद्वारा निर्देशित छ। यसले अनुशासित अग्रदस्ता संरचना र 'जनवादी केन्द्रीयता' को सिद्धान्तलाई जोड दिन्छ।
             </p>
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
             lg:w-1/4 lg:block lg:sticky lg:top-32 self-start
             ${mobileMenuOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'}
          `}>
             <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-bold text-xl text-gray-900">विषयसूची</h3>
                <button onClick={() => setMobileMenuOpen(false)}><X size={24}/></button>
             </div>

             <div className="bg-gray-50 rounded-lg border border-gray-200 p-2 shadow-sm">
                <div className="px-4 py-3 border-b border-gray-200 mb-2">
                   <h3 className="font-bold text-gray-400 uppercase text-xs tracking-widest">अध्यायहरू</h3>
                </div>
                <nav className="space-y-1">
                   {sections.map((section) => (
                      <button
                         key={section.id}
                         onClick={() => scrollToSection(section.id)}
                         className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all duration-200 flex items-center justify-between
                            ${activeSection === section.id 
                               ? 'bg-white text-red-800 font-bold shadow-sm border-l-4 border-red-800' 
                               : 'text-gray-600 hover:bg-white hover:text-gray-900'}
                         `}
                      >
                         <span className="flex items-center truncate">
                            <span className={`mr-3 ${activeSection === section.id ? 'text-red-700' : 'text-gray-400'}`}>
                               {section.icon}
                            </span>
                            {section.title}
                         </span>
                         {activeSection === section.id && <ChevronRight size={16} />}
                      </button>
                   ))}
                </nav>
             </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:w-3/4 w-full">
            <div className="max-w-4xl mx-auto">
                
                <div className="space-y-24">
                    
                    {/* SECTION 1 */}
                    <section id="nature" className="scroll-mt-32">
                        <div className="flex items-center mb-8">
                            <span className="bg-red-800 text-white p-2 rounded mr-4">
                               <Users size={20} />
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-200 pb-2 w-full">
                              पार्टीको प्रकृति र दर्शन
                            </h2>
                         </div>

                         <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                            <div className="pl-6 border-l-4 border-red-800 bg-gray-50 py-4 pr-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">अग्रदस्ता र लडाकु मेसिन</h3>
                                <p>
                                    पार्टी संरचना सर्वहारा र श्रमिक वर्गको <span className="font-bold">अग्रदस्ता</span> (Vanguard) हुनुपर्छ, जसले <span className="font-bold">"लडाकु मेसिन"</span> (Fighting Machine) को रूपमा काम गर्दछ। यो स्पष्ट रूपमा "जन पार्टी" (Mass Party) होइन भनी परिभाषित गरिएको छ।
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-8">वैचारिक प्रतिबद्धता</h3>
                                <p>पार्टीको अस्तित्व मार्क्सवाद–लेनिनवाद–माओवादका आधारभूत मान्यता र पद्धतिहरूको पालनामा निर्भर रहन्छ।</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-8">संगठनको उद्देश्य</h3>
                                <p>संगठनात्मक विधिको दीर्घकालीन लक्ष्य <span className="font-bold">राज्यको विलोपीकरण</span> हो। राजनीतिक सत्ता आम सर्वहारा–श्रमिक जनताको नियन्त्रणमा हुनुपर्छ, जसले राज्यलाई प्रशासकीय समन्वयकारी निकायमा रूपान्तरण गर्न सकून्।</p>
                            </div>
                         </div>
                    </section>

                    {/* SECTION 2 */}
                    <section id="principles" className="scroll-mt-32">
                        <div className="flex items-center mb-8">
                            <span className="bg-red-800 text-white p-2 rounded mr-4">
                               <Scale size={20} />
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-200 pb-2 w-full">
                              संगठनात्मक सिद्धान्त
                            </h2>
                         </div>

                         <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                            <p>हामी <span className="font-bold text-red-800">जनवादी केन्द्रीयता</span> (People's Centralism) को सिद्धान्त अनुरुप सञ्चालित हुन्छौं।</p>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">क) संगठनात्मक केन्द्रीयता</h4>
                                    <p className="text-base text-gray-600">
                                       यसले कडा अनुशासन कायम गर्दछ: व्यक्ति संगठनको अधीनमा, अल्पमत बहुमतको अधीनमा, तल्लो कमिटी माथिल्लो कमिटीको अधीनमा, र सबै सदस्यहरू केन्द्रीय समितिको अधीनमा रहनुपर्छ।
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">ख) वैचारिक केन्द्रीयता</h4>
                                    <p className="text-base text-gray-600">
                                       यसले <span className="font-bold">अभिव्यक्ति स्वतन्त्रता</span> र <span className="font-bold">काममा एकरूपता</span> मा जोड दिन्छ। विचार निर्माणको चरणमा सदस्यहरूले आफ्ना मतहरू स्पष्ट रूपमा राख्न पाउने ग्यारेन्टी हुनुपर्छ।
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded border-l-4 border-gray-400">
                                <h4 className="font-bold text-gray-900 mb-2">आन्तरिक संघर्ष र रूपान्तरण</h4>
                                <ul className="list-disc pl-5 space-y-2 text-base">
                                    <li>आन्तरिक पार्टी संघर्ष अनिवार्य छ र यो <span className="font-bold">"एकता–संघर्ष–रूपान्तरण"</span> को प्रक्रियामार्फत सञ्चालन हुनुपर्छ।</li>
                                    <li>आलोचना र आत्मालोचनाको विधि निरन्तर लागू गरिनुपर्छ।</li>
                                </ul>
                            </div>
                         </div>
                    </section>

                    {/* SECTION 3 */}
                    <section id="structure" className="scroll-mt-32">
                        <div className="flex items-center mb-8">
                            <span className="bg-red-800 text-white p-2 rounded mr-4">
                               <Landmark size={20} />
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-200 pb-2 w-full">
                              संगठनात्मक संरचना
                            </h2>
                         </div>

                         <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                            
                            <div>
                                <h3 className="text-xl font-bold text-red-800 mb-4 uppercase tracking-wide">केन्द्रीय निकायहरू</h3>
                                <ul className="space-y-4">
                                    <li className="border-b border-gray-100 pb-2">
                                        <strong className="block text-gray-900">१. राष्ट्रिय महाधिवेशन</strong>
                                        <span className="text-base text-gray-600">प्रत्येक ४ वर्षमा हुने। समग्र राजनीतिक कार्यदिशाको समीक्षा र नीति निर्माण।</span>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <strong className="block text-gray-900">२. राष्ट्रिय सम्मेलन/भेला</strong>
                                        <span className="text-base text-gray-600">महाधिवेशनको बीचमा समीक्षा गर्न र कार्ययोजना संशोधन गर्न जिम्मेवार।</span>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <strong className="block text-gray-900">३. केन्द्रीय समिति (CC)</strong>
                                        <span className="text-base text-gray-600">४ वर्षे कार्यकाल। सदस्यहरू 'आत्मनिर्भर पूर्णकालीन' हुनुपर्छ।</span>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <strong className="block text-gray-900">४. प्रबुद्ध समिति (Presidium)</strong>
                                        <span className="text-base text-gray-600">CC का निर्णयहरू निगरानी गर्ने निकाय।</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-red-800 mb-4 uppercase tracking-wide">आधार र स्थानीय निकायहरू</h3>
                                <ul className="space-y-4">
                                    <li className="bg-gray-50 p-4 rounded">
                                        <strong className="block text-gray-900">सार्वभौम समिति (General Committee)</strong>
                                        <span className="text-base text-gray-600">यो पार्टीको आधारभूत एकाइ हो। जनताको राजनीतिक सत्ता यसैमा निहीत हुन्छ।</span>
                                    </li>
                                    <li className="bg-gray-50 p-4 rounded">
                                        <strong className="block text-gray-900">सेल समिति (Cell Committee)</strong>
                                        <span className="text-base text-gray-600">सार्वभौम समिति बन्न नसकेको अवस्थामा यो प्रारम्भिक संरचना हो।</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-6 rounded">
                                <h3 className="text-xl font-bold text-red-900 mb-4">प्रतिनिधित्व र कार्यकाल</h3>
                                <ul className="list-disc pl-5 space-y-2 text-base text-gray-800">
                                    <li>प्रादेशिक र केन्द्रीय समितिमा <span className="font-bold">४०% महिला सहभागिता</span> अनिवार्य।</li>
                                    <li>महासचिवको कार्यकाल ४ वर्ष। <span className="font-bold">लगातार दोहोरिएर निर्वाचित हुन नपाइने</span>।</li>
                                    <li>चैत मसान्तभित्र सदस्यता नवीकरण अनिवार्य।</li>
                                </ul>
                            </div>

                         </div>
                    </section>

                    {/* SECTION 4 */}
                    <section id="conduct" className="scroll-mt-32">
                        <div className="flex items-center mb-8">
                            <span className="bg-red-800 text-white p-2 rounded mr-4">
                               <Shield size={20} />
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-200 pb-2 w-full">
                              आचरण र संस्कृति
                            </h2>
                         </div>

                         <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">अनुशासन</h3>
                                    <ul className="list-disc pl-5 space-y-3 text-base text-gray-600">
                                        <li>कार्यक्रमका मञ्चहरू <strong className="text-gray-900">"पाठशाला"</strong> (Classroom) हुनुपर्छ।</li>
                                        <li>प्रमुख अतिथि, विशेष अतिथि भन्ने हुँदैन; सबै केवल <strong className="text-gray-900">"अतिथि"</strong> हुन्।</li>
                                        <li>खादा, माला र झिल्के ब्याच प्रयोग गर्न <strong className="text-red-700">निषेध</strong> छ।</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">व्यक्तिगत व्यवहार</h3>
                                    <ul className="list-disc pl-5 space-y-3 text-base text-gray-600">
                                        <li>एक अर्कालाई <strong className="text-gray-900">"कमरेड"</strong> भनेर सम्बोधन गर्नुपर्छ।</li>
                                        <li>"हजुर" वा "भाई/बहिनी" जस्ता शब्दको प्रयोगलाई निरुत्साहित गरिनेछ।</li>
                                        <li>उजुरी वा गुनासो <strong className="text-gray-900">प्रत्यक्ष</strong> सम्बन्धित कमरेडसँग छलफल गर्नुपर्छ।</li>
                                        <li>बालबालिका र महिला माथिको शारीरिक हिंसा <strong className="text-red-700">अपराध</strong> मानिन्छ।</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <p className="text-base text-gray-500 italic border-t border-gray-100 pt-4">
                                * प्रेम, विवाह वा सहजीवन (Cohabitation) नितान्त व्यक्तिगत मामिला हुन्। पीडित भएको उजुरी नआएसम्म पार्टीले हस्तक्षेप गर्दैन।
                            </p>
                         </div>
                    </section>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SangathanatmakBidhiPage;
