
import React, { useState, useEffect } from 'react';
import { Book, Users, Scale, Shield, Landmark, ChevronRight, Menu, X } from 'lucide-react';

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
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white  border-b ">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] px-8 py-12 lg:px-12 lg:py-16">
            <div className="pointer-events-none absolute -right-10 top-8 h-48 w-48 rounded-full bg-red-100/80 blur-3xl" />
            <div className="relative flex flex-col items-center text-center gap-6">
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 font-serif leading-tight">
                 संगठनात्मक विधि
               </h1>
               <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
                 वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल (SSCPN) को संगठनात्मक विधि वैज्ञानिक समाजवादको राजनीतिक कार्यदिशाद्वारा निर्देशित छ। यसले अनुशासित अग्रदस्ता संरचना र 'जनवादी केन्द्रीयता' को सिद्धान्तलाई जोड दिन्छ।
               </p>
               <div className="grid gap-4 sm:grid-cols-2 w-full">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-red-50 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1">
                     <p className="text-xs uppercase tracking-normal text-red-700 font-semibold mb-3">सिद्धान्त</p>
                     <p className="text-sm text-slate-700 leading-relaxed">वैज्ञानिक समाजवाद र संगठनात्मक अनुशासनको अन्तरसम्बन्ध।</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-red-50 p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1">
                     <p className="text-xs uppercase tracking-normal text-red-700 font-semibold mb-3">रूपरेखा</p>
                     <p className="text-sm leading-relaxed text-slate-70">आगे बढ्ने मार्ग, नेतृत्व, र पार्टी संस्कृति।</p>
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
                         <span className="flex items-center gap-3 truncate">
                            <span className={`flex h-9 w-9 items-center justify-center rounded-2xl ${activeSection === section.id ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-500'}`}>
                               {section.icon}
                            </span>
                            <span className="truncate">{section.title}</span>
                         </span>
                         {activeSection === section.id && <ChevronRight size={16} className="text-red-700" />}
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
                    <section id="nature" className="scroll-mt-16">
                        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_-22px_rgba(15,23,42,0.18)] p-5 transition duration-500 ease-out hover:-translate-y-1">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center mb-8">
                                <span className="bg-red-800 text-white p-3 rounded-3xl shadow-lg shadow-red-100">
                                   <Users size={20} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.28em] text-red-700 font-semibold mb-2">अध्याय</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
                                      पार्टीको प्रकृति र दर्शन
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
                               <div className="rounded-3xl border border-red-50 bg-white p-4">
                                   <h3 className="text-xl font-bold text-slate-900 mb-2">अग्रदस्ता र लडाकु मेसिन</h3>
                                   <p>
                                       पार्टी संरचना सर्वहारा र श्रमिक वर्गको <span className="font-semibold">अग्रदस्ता</span> (Vanguard) हुनुपर्छ, जसले <span className="font-semibold">"लडाकु मेसिन"</span> (Fighting Machine) को रूपमा काम गर्दछ। यो स्पष्ट रूपमा "जन पार्टी" (Mass Party) होइन भनी परिभाषित गरिएको छ।
                                   </p>
                               </div>

                               <div className="flex flex-wrap items-baseline gap-4 text-slate-700 text-lg leading-relaxed">
                                   <h3 className="text-xl font-bold text-slate-900 m-0">वैचारिक प्रतिबद्धता</h3>
                                   <p className="m-0">पार्टीको अस्तित्व मार्क्सवाद–लेनिनवाद–माओवादका आधारभूत मान्यता र पद्धतिहरूको पालनामा निर्भर रहन्छ।</p>
                               </div>

                               <div>
                                   <h3 className="text-xl font-bold text-slate-900 mb-2">संगठनको उद्देश्य</h3>
                                   <p>संगठनात्मक विधिको दीर्घकालीन लक्ष्य <span className="font-semibold">राज्यको विलोपीकरण</span> हो। राजनीतिक सत्ता आम सर्वहारा–श्रमिक जनताको नियन्त्रणमा हुनुपर्छ, जसले राज्यलाई प्रशासकीय समन्वयकारी निकायमा रूपान्तरण गर्न सकून्।</p>
                               </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2 */}
                    <section id="principles" className="scroll-mt-32">
                        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_-22px_rgba(15,23,42,0.18)]  transition duration-500 ease-out hover:-translate-y-1">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center mb-8">
                                <span className="bg-red-800 text-white p-3 rounded-3xl shadow-lg shadow-red-100">
                                   <Scale size={20} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.28em] text-red-700 font-semibold mb-2">अध्याय</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
                                      संगठनात्मक सिद्धान्त
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
                                <p>हामी <span className="font-semibold text-red-800">जनवादी केन्द्रीयता</span> (People's Centralism) को सिद्धान्त अनुरुप सञ्चालित हुन्छौं।</p>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                                        <h4 className="font-bold text-slate-900 text-xl mb-2">क) संगठनात्मक केन्द्रीयता</h4>
                                        <p className="text-base text-slate-600">
                                           यसले कडा अनुशासन कायम गर्दछ: व्यक्ति संगठनको अधीनमा, अल्पमत बहुमतको अधीनमा, तल्लो कमिटी माथिल्लो कमिटीको अधीनमा, र सबै सदस्यहरू केन्द्रीय समितिको अधीनमा रहनुपर्छ।
                                        </p>
                                    </div>
                                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                                        <h4 className="font-bold text-slate-900 text-xl mb-2">ख) वैचारिक केन्द्रीयता</h4>
                                        <p className="text-base text-slate-600">
                                           यसले <span className="font-semibold">अभिव्यक्ति स्वतन्त्रता</span> र <span className="font-semibold">काममा एकरूपता</span> मा जोड दिन्छ। विचार निर्माणको चरणमा सदस्यहरूले आफ्ना मतहरू स्पष्ट रूपमा राख्न पाउने ग्यारेन्टी हुनुपर्छ।
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">आन्तरिक संघर्ष र रूपान्तरण</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-base text-slate-700">
                                        <li>आन्तरिक पार्टी संघर्ष अनिवार्य छ र यो <span className="font-semibold">"एकता–संघर्ष–रूपान्तरण"</span> को प्रक्रियामार्फत सञ्चालन हुनुपर्छ।</li>
                                        <li>आलोचना र आत्मालोचनाको विधि निरन्तर लागू गरिनुपर्छ।</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3 */}
                    <section id="structure" className="scroll-mt-32">
                        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_-22px_rgba(15,23,42,0.18)] transition duration-500 ease-out hover:-translate-y-1">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center mb-8">
                                <span className="bg-red-800 text-white p-3 rounded-3xl shadow-lg shadow-red-100">
                                   <Landmark size={20} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.28em] text-red-700 font-semibold mb-2">अध्याय</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
                                      संगठनात्मक संरचना
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-red-800 mb-4 uppercase tracking-wide">केन्द्रीय निकायहरू</h3>
                                    <ul className="space-y-4">
                                        <li className="rounded-3xl border border-slate-200 bg-white p-4">
                                            <strong className="block text-slate-900">१. राष्ट्रिय महाधिवेशन</strong>
                                            <span className="text-base text-slate-600">प्रत्येक ४ वर्षमा हुने। समग्र राजनीतिक कार्यदिशाको समीक्षा र नीति निर्माण।</span>
                                        </li>
                                        <li className="rounded-3xl border border-slate-200 bg-white p-4">
                                            <strong className="block text-slate-900">२. राष्ट्रिय सम्मेलन/भेला</strong>
                                            <span className="text-base text-slate-600">महाधिवेशनको बीचमा समीक्षा गर्न र कार्ययोजना संशोधन गर्न जिम्मेवार।</span>
                                        </li>
                                        <li className="rounded-3xl border border-slate-200 bg-white p-4">
                                            <strong className="block text-slate-900">३. केन्द्रीय समिति (CC)</strong>
                                            <span className="text-base text-slate-600">४ वर्षे कार्यकाल। सदस्यहरू 'आत्मनिर्भर पूर्णकालीन' हुनुपर्छ।</span>
                                        </li>
                                        <li className="rounded-3xl border border-slate-200 bg-white p-4">
                                            <strong className="block text-slate-900">४. प्रबुद्ध समिति (Presidium)</strong>
                                            <span className="text-base text-slate-600">CC का निर्णयहरू निगरानी गर्ने निकाय।</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-red-800 mb-4 uppercase tracking-wide">आधार र स्थानीय निकायहरू</h3>
                                    <div className="grid gap-4">
                                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                                            <strong className="block text-slate-900">सार्वभौम समिति (General Committee)</strong>
                                            <span className="text-base text-slate-600">यो पार्टीको आधारभूत एकाइ हो। जनताको राजनीतिक सत्ता यसैमा निहीत हुन्छ।</span>
                                        </div>
                                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                                            <strong className="block text-slate-900">सेल समिति (Cell Committee)</strong>
                                            <span className="text-base text-slate-600">सार्वभौम समिति बन्न नसकेको अवस्थामा यो प्रारम्भिक संरचना हो।</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[1.75rem] border border-red-200 bg-white p-4">
                                    <h3 className="text-xl font-bold text-red-900 mb-4">प्रतिनिधित्व र कार्यकाल</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-base text-slate-800">
                                        <li>प्रादेशिक र केन्द्रीय समितिमा <span className="font-semibold">४०% महिला सहभागिता</span> अनिवार्य।</li>
                                        <li>महासचिवको कार्यकाल ४ वर्ष। <span className="font-semibold">लगातार दोहोरिएर निर्वाचित हुन नपाइने</span>।</li>
                                        <li>चैत मसान्तभित्र सदस्यता नवीकरण अनिवार्य।</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4 */}
                    <section id="conduct" className="scroll-mt-32">
                        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_-22px_rgba(15,23,42,0.18)]  transition duration-500 ease-out hover:-translate-y-1">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center mb-8">
                                <span className="bg-red-800 text-white p-3 rounded-3xl shadow-lg shadow-red-100">
                                   <Shield size={20} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.28em] text-red-700 font-semibold mb-2">अध्याय</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif leading-tight">
                                      आचरण र संस्कृति
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">अनुशासन</h3>
                                        <ul className="list-disc pl-5 space-y-3 text-base text-slate-600">
                                            <li>कार्यक्रमका मञ्चहरू <strong className="text-slate-900">"पाठशाला"</strong> (Classroom) हुनुपर्छ।</li>
                                            <li>प्रमुख अतिथि, विशेष अतिथि भन्ने हुँदैन; सबै केवल <strong className="text-slate-900">"अतिथि"</strong> हुन्।</li>
                                            <li>खादा, माला र झिल्के ब्याच प्रयोग गर्न <strong className="text-red-700">निषेध</strong> छ।</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">व्यक्तिगत व्यवहार</h3>
                                        <ul className="list-disc pl-5 space-y-3 text-base text-slate-600">
                                            <li>एक अर्कालाई <strong className="text-slate-900">"कमरेड"</strong> भनेर सम्बोधन गर्नुपर्छ।</li>
                                            <li>"हजुर" वा "भाई/बहिनी" जस्ता शब्दको प्रयोगलाई निरुत्साहित गरिनेछ।</li>
                                            <li>उजुरी वा गुनासो <strong className="text-slate-900">प्रत्यक्ष</strong> सम्बन्धित कमरेडसँग छलफल गर्नुपर्छ।</li>
                                            <li>बालबालिका र महिला माथिको शारीरिक हिंसा <strong className="text-red-700">अपराध</strong> मानिन्छ।</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
