
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BookOpen, Download, Eye, Landmark, Users, Shield, Gavel } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
  {
    id: 'intro',
    title: '१. परिचय: सामुदायिक सार्वभौम नेपाल',
    content: (
      <div className="space-y-3 text-gray-800 leading-relaxed text-lg">
        <p>
          वैज्ञानिक समाजवादी व्यवस्थाको कार्यक्रमको मूल सार <strong>"सामुदायिक सार्वभौम नेपाल"</strong> हो। यो राज्यको प्रकृतिको नाम हो। यसको अर्थ समुदाय नै सबै क्षेत्रमा सार्वभौमसत्ता सम्पन्न भएको अन्तर्वस्तु बुझिनेछ।
        </p>
        <p>
          यो <strong>समस्तरीय संघीय राज्य (Horizontal Federal State)</strong> हुनेछ, जसका भौगोलिक रूपमा तीन तह हुनेछन्। सांस्कृतिक पहिचानलाई सम्बोधन गर्न सङ्घ, प्रदेश, स्थानीय क्षेत्र र सांस्कृतिक क्षेत्र सङ्गठित गरी अधिकार बाँडफाँड गरिनेछ।
        </p>
        <div className="bg-red-50 border-l-4 border-red-800 p-6 my-4">
          <h4 className="font-bold text-red-900 mb-2">मुख्य विशेषताहरू:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>समुदाय नै उत्पादक, समुदाय नै कार्यकारी र समुदाय नै सार्वभौम।</li>
            <li>राज्यको भूमिका केवल व्यवस्थापक र समन्वयकारी।</li>
            <li>निजी सम्पत्तिको अन्त्य र पूर्ण सामुदायिक स्वामित्व।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'structure',
    title: '२. राज्यको संरचना (समस्तरीय संघीयता)',
    content: (
      <div className="space-y text-gray-800 leading-relaxed text-lg">
        <p>
          यो पिरामिड आकारको होइन, <strong>समस्तरीय (Horizontal)</strong> ढाँचाको राज्य हुनेछ। कोही तल र कोही माथि हुने छैनन्; सबै समतलीय हुनेछन्।
        </p>
        
        <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">१२ बहुराष्ट्रिय भौगोलिक प्रदेशहरू</h4>
        <p>पहिचान र सामर्थ्यको आधारमा निम्न प्रदेशहरू निर्माण गरिनेछ:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-2 mb-6">
          <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded">
            <li>थरुहट</li>
            <li>मगरात</li>
            <li>तमुवान</li>
            <li>ताम्सालिङ</li>
            <li>नेवा</li>
            <li>किरात</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded">
            <li>लिम्बुवान</li>
            <li>मिथिला</li>
            <li>भोजपुरा</li>
            <li>अवध</li>
            <li>पूर्वी खसान (कर्णाली)</li>
            <li>पश्चिम खसान (सेती-महाकाली)</li>
          </ul>
        </div>

        <h4 className="font-bold text-gray-900 text-xl mt-6 mb-3">स्वायत्त र संरक्षित क्षेत्र</h4>
        <p>
          आफ्नो पुर्खौली भूमिमा १% भन्दा कम जनसंख्या भएका लोपोन्मुख जातिहरू वा ५५% भन्दा बढी बाहुल्यता भएका क्षेत्रमा <strong>स्वायत्त क्षेत्र</strong> निर्माण गरिनेछ।
        </p>
      </div>
    )
  },
  {
    id: 'governance',
    title: '३. शासकीय स्वरूप (चक्रीय प्रणाली)',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
        <p>
          शासकीय स्वरूप पूर्ण रूपमा <strong>सहमतीय र सामुदायिक</strong> हुनेछ। विगतको 'प्रतिनिधिले शासन गर्ने' युगको अन्त्य गरी 'समुदायले निर्णय गर्ने' युगको सुरुवात गरिनेछ।
        </p>

        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="font-bold text-red-800 text-xl mb-4 flex items-center">
            <Users className="mr-2" /> कार्यकारिणी संरचना
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold mr-2 text-gray-900">१. सार्वभौम परिषद:</span>
              <span>स्थानीय, प्रादेशिक र राष्ट्रिय तहमा व्यवस्थापिकाको रूपमा <strong>सार्वभौम परिषद</strong> रहनेछ।</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-gray-900">२. समावेशी सरकार:</span>
              <span>परिषद्ले ७ सांस्कृतिक समुदायबाट १ महिला र १ पुरुष गरी १४ जनाको कार्यकारी सदस्य निर्वाचित गर्नेछ। त्यही नै सरकार हुनेछ।</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-gray-900">३. चक्रीय नेतृत्व (Rotating Leadership):</span>
              <span>अध्यक्ष र सह-अध्यक्षको जिम्मेवारी १४ जना सदस्यहरू बीच <strong>चक्रीय प्रणालीमा</strong> आलोपालो हुनेछ। कुनै एक व्यक्ति सधैं सत्तामा रहने छैन।</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'economy',
    title: '४. आर्थिक नीति (सामुदायिकीकरण)',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
        <p>
          हाम्रो आर्थिक क्रान्तिको मुख्य निशाना <strong>निजी सम्पत्तिको अन्त्य</strong> हो। तर यसलाई राष्ट्रियकरण (Nationalization) गरिने छैन, बरु <strong>सामुदायिकीकरण (Communalization)</strong> गरिनेछ।
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white border-l-4 border-green-600 p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 mb-2">उत्पादन र उपभोग</h5>
            <p className="text-sm">समुदाय नै उत्पादक, समुदाय नै वितरक र समुदाय नै उपभोक्ता हुने अभियान तीव्र पारिनेछ।</p>
          </div>
          <div className="bg-white border-l-4 border-green-600 p-4 shadow-sm">
            <h5 className="font-bold text-gray-900 mb-2">आत्मनिर्भरता</h5>
            <p className="text-sm">कृषि, उद्योग र सेवा क्षेत्रमा आत्मनिर्भर अर्थतन्त्र निर्माण गरी परनिर्भरताको अन्त्य गरिनेछ।</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'social_cultural',
    title: '५. सामाजिक तथा सांस्कृतिक रूपान्तरण',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
        <h4 className="font-bold text-gray-900 text-xl mb-2">पितृसत्ता र जात व्यवस्थाको अन्त्य</h4>
        <p>
          ८,००० वर्ष पुरानो पितृसत्ता र ३,००० वर्ष पुरानो जात व्यवस्थालाई अन्त्य गर्नु पार्टीको प्राथमिक दायित्व हो।
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>दलित समुदायलाई विशेष अधिकार र क्षतिपूर्तिसहित राज्यका हरेक अंगमा समानुपातिक प्रतिनिधित्व।</li>
          <li>अन्तरजातीय विवाहलाई प्रोत्साहन र पुरस्कृत गर्ने नीति।</li>
          <li>घरेलु कामलाई राष्ट्रिय आयमा गणना गरिनेछ र मातृत्वको पूर्ण अधिकार महिलामा निहित हुनेछ।</li>
        </ul>

        <h4 className="font-bold text-gray-900 text-xl mt-6 mb-2">पहिचान र संस्कृति</h4>
        <p>
          उत्पीडित राष्ट्रहरूको पहिचानलाई 'योगदान' को रूपमा स्वीकार गरिनेछ। वैज्ञानिक, समतामूलक र सहकार्यमूलक संस्कृतिको निर्माण गरिनेछ।
        </p>
      </div>
    )
  },
  {
    id: 'security_justice',
    title: '६. सुरक्षा र न्याय प्रणाली',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
        <h4 className="font-bold text-gray-900 text-xl mb-2 flex items-center"><Shield className="mr-2"/> सुरक्षा नीति</h4>
        <p>
          <strong>"समुदाय सिङ्गै राष्ट्रिय सेना"</strong> भन्ने मूल नीति हुनेछ। १८ वर्ष पुगेका प्रत्येक नागरिकले अनिवार्य सैन्य तालिम लिनेछन् र आवश्यक पर्दा राष्ट्रको रक्षामा खटिनेछन्।
        </p>

        <h4 className="font-bold text-gray-900 text-xl mt-6 mb-2 flex items-center"><Gavel className="mr-2"/> न्याय प्रणाली</h4>
        <p>
          न्याय क्षेत्र बिक्रीको माल बन्ने अवस्थाबाट मुक्त गरिनेछ। कुनै पनि क्षेत्र र तहका न्यायाधीशहरू <strong>निर्वाचित र आवधिक</strong> हुनेछन्। न्याय सम्पादनको मूल्याङ्कन समुदायले गर्न सक्ने व्यवस्था हुनेछ।
        </p>
      </div>
    )
  }
];

const SamajwadiKaryakramPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Placeholder for PDF URL as we don't have the actual file structure
  const pdfUrl = "#";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

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
    <div className="bg-white pt-20 min-h-screen font-['Google_Sans'] ">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-3 lg:px-6 py-10 lg:py-12">
          <div className="flex flex-col items-center text-center">
             {/* <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2 text-red-900 text-[10px] uppercase tracking-[0.35em] font-semibold mb-6"
             >
             </motion.div> */}
             <h1 className="text-4xl md:text-6xl font-semibold text-gray-950 font-['Google_Sans'] leading-tight mb-6 tracking-tight">
               वैज्ञानिक समाजवादी <span className='text-red-900'>कार्यक्रम</span>
             </h1>
             <p className="text-gray-500  text-xl uppercase tracking-normal font-semibold">
                राज्यको संरचना, शासकीय स्वरूप, निर्वाचन प्रणाली र नीति निर्देशक ढाँचा
             </p>
          </div>
        </div>
      </div>

      {/* 2. DOWNLOAD / PREVIEW CTA */}
      <div className="bg-gray-50 border-y border-gray-100">
         <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
               <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-red-50 p-4 text-red-900 border border-red-100">
                     <BookOpen size={28} />
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold text-gray-950">पूर्ण दस्तावेज (PDF)</h3>
                     <p className="text-sm text-gray-500">विस्तृत अध्ययनका लागि आधिकारिक प्रतिवेदन डाउनलोड गर्नुहोस्।</p>
                  </div>
               </div>
               <div className="flex flex-wrap gap-3">
                <a
                  href={pdfUrl}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-full font-semibold text-sm text-gray-700 hover:border-red-900 hover:text-red-900 transition"
                >
                  <Eye size={16} className="mr-2" /> प्रिव्यु
                </a>
                <a
                  href={pdfUrl}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-900 text-white font-semibold text-sm hover:bg-red-950 transition"
                >
                  <Download size={16} className="mr-2" /> डाउनलोड
                </a>
               </div>
            </div>
         </div>
      </div>

      {/* 3. CONTENT AREA */}
          <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 py-8 lg:py-12">
        
        {/* Mobile Toggle */}
        <div className="lg:hidden mb-12">
           <button 
             className="flex items-center text-red-900 font-black text-[10px] uppercase tracking-widest border-2 border-red-100 p-5 bg-white w-full justify-between shadow-lg"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
              <span className="flex items-center">
                 <Menu size={18} className="mr-3"/> विषयसूची
              </span>
              <ChevronRight size={18} className={mobileMenuOpen ? 'rotate-90 transition-transform' : 'transition-transform'} />
           </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">

          {/* SIDEBAR NAVIGATION */}
          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block lg:w-1/4 self-start">
            <div className="lg:sticky lg:top-32">
              <div className="space-y-3 bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
                <div className="pb-3 mb-3 border-b border-gray-100">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">विषयसूची</h3>
                  <p className="mt-2 text-sm text-gray-600">यो कागजातका मुख्य खण्डहरूमा छिटो पुग्नुहोस्।</p>
                </div>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-between
                        ${activeSection === section.id 
                          ? 'bg-red-950 text-white shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      <span className="truncate">{section.title}</span>
                      <ChevronRight size={16} className={`transition-all ${activeSection === section.id ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* MOBILE SIDEBAR */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="fixed inset-0 z-50 bg-white p-8 overflow-y-auto lg:hidden"
              >
                <div className="flex justify-between items-center mb-10">
                  <h3 className="font-black text-2xl font-['Google_Sans'] italic text-gray-950">विषयसूची</h3>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 text-gray-950"><X size={24}/></button>
                </div>

                <div className="space-y-2">
                  <div className="px-4 py-2 mb-4 border-b border-gray-100">
                    <h3 className="font-black text-[10px] uppercase tracking-normal text-gray-400">खण्डहरू</h3>
                  </div>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-5 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-between group
                          ${activeSection === section.id 
                            ? 'bg-red-900 text-white shadow-2xl skew-x-[-3deg]' 
                            : 'text-gray-500 hover:bg-gray-50 hover:text-red-900'}
                        `}
                      >
                        <span className="truncate group-hover:translate-x-1 transition-transform">{section.title.split(': ')[0]}</span>
                        <ChevronRight size={14} className={`transition-all ${activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN CONTENT */}
          <div className="lg:w-3/4 w-full">
            <div className="max-w-4xl">
                <div className="space-y-16 lg:space-y-20">
                   {sections.map((section) => (
                      <section key={section.id} id={section.id} className="scroll-mt-32 group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                         <div className="flex items-center mb-6">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-950 tracking-tight leading-tight w-full">
                              {section.title}
                            </h2>
                         </div>
                         <div className="prose prose-lg prose-red max-w-none text-gray-700 leading-8">
                            {section.content}
                         </div>
                      </section>
                   ))}
                </div>

                {/* <div className="mt-10  border-t border-gray-100">
                   <p className="text-[10px] font-black uppercase tracking-normal text-gray-400">
                     © वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल । केन्द्रीय समिति
                   </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamajwadiKaryakramPage;
