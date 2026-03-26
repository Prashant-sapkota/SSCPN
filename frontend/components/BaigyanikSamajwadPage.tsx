
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BookOpen, Globe } from 'lucide-react';

const sections = [
  {
    id: 'definition',
    title: '१. परिभाषा र मूल पहिचान',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p className="text-xl font-serif text-gray-900 leading-relaxed">
          वैज्ञानिक समाजवाद कुनै काल्पनिक सपना (Utopian Vision) होइन, बरु यो समाज विज्ञानका नियमका आधारमा बनाइने व्यवस्था हो।
        </p>
        
        <div className="space-y-4 pt-4">
          <div>
            <h4 className="font-bold text-red-800 text-lg mb-2">वैज्ञानिक पक्ष</h4>
            <p>
              'वैज्ञानिक' शब्दले यो कुरामा जोड दिन्छ कि आधुनिक युगमा <span className="font-bold">विज्ञान–प्रविधिलाई</span> (Science and Technology) मुख्य उत्पादक शक्ति बनेको छ। यसले यसलाई पूर्ववर्ती समाजवादी रणनीतिहरूभन्दा फरक बनाउँछ।
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-red-800 text-lg mb-2">संक्रमणकालीन राज्य</h4>
            <p>
              वैज्ञानिक समाजवाद पुँजीवाद र वर्गविहीन, राज्यविहीन साम्यवादी समाज (Communism) बीचको <span className="font-bold">संक्रमणकालीन राज्य व्यवस्था</span> हो।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-red-800 text-lg mb-2">समाज नियन्त्रित व्यवस्था</h4>
            <p>
              राज्यको राजनीतिक सत्तालाई अन्ततः रूपान्तरण गरिनेछ, जसको उद्देश्य समुदाय (समाज) लाई उत्पादक, कार्यकारी र मूलतः सार्वभौम बनाउनु हो। राज्यले केवल समन्वय र व्यवस्थापनको जिम्मेवारी लिनेछ।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-red-800 text-lg mb-2">ज्ञानको भूमिका</h4>
            <p>
              मुख्य उत्पादक शक्तिको रूपमा विज्ञान र प्रविधिलाई 'ज्ञान' (Knowledge) को रूपमा लिइन्छ जुन सबैको हो। यसले मानिसद्वारा पत्ता लगाइएका प्रकृतिका नियमहरूको स्वामित्व सामूहिक हुनसक्दछ भन्ने कुरामा जोड दिन्छ।
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'politics',
    title: '२. राजनीतिक प्रणाली',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          यो एक संक्रमणकालीन संरचना हो जसले श्रमिक वर्गको शासन स्थापना गर्न र राज्यका दमनकारी कार्यहरूलाई क्रमशः विलोप गर्नमा केन्द्रित छ।
        </p>

        <div className="space-y-6 pt-2">
           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">सर्वहारा—श्रमिक वर्गको अधिनायकत्व</h4>
             <p>संक्रमणकालमा सर्वहारा—श्रमिक वर्गको अधिनायकत्व हुनेछ। यो अधिनायकत्व पार्टी वा नेताहरूको सानो समूहको नभई व्यापक सर्वहारा–श्रमिक जनतालाई अधिकार सम्पन्न बनाउँदै उनीहरूको नियन्त्रणमा हुनेछ।</p>
           </div>
           
           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">राज्यको विलोपीकरण</h4>
             <p>अन्तिम लक्ष्य भनेको राज्यको विलोपीकरण गरी राज्यलाई व्यवस्थापक समन्वयकारी संस्थामा रूपान्तरण गर्नु हो। आम जनतालाई बढीभन्दा बढी कार्यकारी अधिकारबाट सुसज्जित बनाउँदै यो प्रक्रिया सुरु गरिन्छ।</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">निरन्तर वर्ग संघर्ष</h4>
             <p>यो संक्रमणकालीन चरण भएकोले, वर्गीय समाजका बाँकी अवशेषहरू हटाउन निरन्तर वर्ग संघर्ष पनि जारी रहन्छ।</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">राजनीतिक संरचना</h4>
             <p>राजनीतिक प्रणाली दुई प्रमुख अंगहरूमा संरचित हुनेछ: <span className="font-bold">कम्युनिस्ट पार्टी</span> र <span className="font-bold">सार्वभौम संगठन</span> (General Committees)। सार्वभौम संगठन नै जनताको सत्ता अभ्यास गर्ने मुख्य थलो हुनेछ।</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'economics',
    title: '३. आर्थिक र स्वामित्वका सिद्धान्तहरू',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
           वैज्ञानिक समाजवादी आर्थिक प्रणालीले मौलिक रूपमा निजी स्वामित्वलाई अस्वीकार गर्छ र योजनाबद्ध, सामुदायिक व्यवस्थापनमार्फत प्रचुरता (Abundance) को लक्ष्य राख्छ।
        </p>

        <ul className="space-y-6 pt-2 list-disc pl-5 marker:text-red-800">
          <li>
            <strong className="text-gray-900 block text-lg mb-1">निजी स्वामित्वको अन्त्य</strong>
            <span>हाम्रो पार्टी निजी स्वामित्वको अन्त्य गर्न प्रतिबद्ध छ, जुन सम्पत्तिको राष्ट्रियकरण नगरी सम्पूर्ण रूपमा <span className="font-bold">सामुदायिकीकरण</span> गरेर हासिल गरिनेछ। राज्य नियन्त्रित पुँजीवाद (State Capitalism) को खतराबाट बच्न यो अनिवार्य छ।</span>
          </li>
          
          <li>
            <strong className="text-gray-900 block text-lg mb-1">प्रचुरता (Abundance)</strong>
            <span>आधुनिक विज्ञान र प्रविधिले ठूलो परिमाणमा उत्पादन सम्भव बनाएको छ। यो प्रणालीले जनताका आधारभूत आवश्यकताहरू पूरा गर्न उत्पादनमा प्रचुरता ल्याउनेछ।</span>
          </li>

          <li>
            <strong className="text-gray-900 block text-lg mb-1">आर्थिक इन्जिनको रूपमा समुदाय</strong>
            <span>मुख्य आर्थिक लक्ष्य भनेको समुदायलाई उत्पादक र समुदायलाई नै उपभोक्ता बनाउने अभियान तीव्र पार्नु हो।</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'social',
    title: '४. सामाजिक र सांस्कृतिक रूपान्तरण',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          यसले गहिरो जरा गाडेका सामाजिक अन्यायहरूलाई सम्बोधन गर्छ र मार्क्सवादी विचार र आधुनिक यथार्थअनुरूप संस्कृतिलाई रूपान्तरण गर्छ।
        </p>

        <div className="space-y-6 pt-2">
           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-2">सामाजिक र आर्थिक समानता</h4>
             <p>प्रणालीले जात, राष्ट्रियता, लिङ्ग, क्षेत्र र वर्णका आधारमा हुने सबै सामाजिक विभेदहरू अन्त्य गरी सामाजिक समता र आर्थिक समानता कायम गर्ने लक्ष्य राख्छ।</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-2">उत्पीडनको अन्त्य</h4>
             <p>८,००० वर्ष पुरानो पितृसत्ता र ३,००० वर्ष पुरानो जात व्यवस्थाको अन्त्य गर्न पार्टी दृढ छ। दलितहरूलाई आधारभूत क्रान्तिकारी समुदायको रूपमा चिनिन्छ जसको मुक्ति बिना समग्र क्रान्ति असम्भव छ।</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-2">वैज्ञानिक समाजवादी संस्कृति</h4>
             <p className="mb-2">नयाँ संस्कृति निम्न तीन तत्वहरूको संश्लेषणमा निर्माण हुनेछ:</p>
             <ol className="list-decimal pl-5 space-y-2 text-gray-700">
               <li>परम्परागत मानव / प्रकृतिप्रेमी संस्कृति।</li>
               <li>पुँजीवादी प्रगतिशील संस्कृति (जस्तै: व्यक्तिगत स्वतन्त्रता र मानव अधिकार)।</li>
               <li>मार्क्सवादी विचारधारा (चेतनाको अधिकतम वैज्ञानिकीकरण)।</li>
             </ol>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'path',
    title: '५. वैज्ञानिक समाजवादको बाटो',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          वर्तमान परिस्थितिमा, विश्वव्यापी पुँजीवाद विरुद्धको संघर्षसँगै समानान्तर रूपमा वैज्ञानिक समाजवादको निर्माण गरिनुपर्छ। हामी सत्ता कब्जा गरेपछि मात्र समाजवाद निर्माण गर्ने परम्परागत सोचबाट मुक्त हुनुपर्छ।
        </p>
        
        <div className="space-y-6 pt-2">
          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">समानान्तर निर्माण</strong>
             <p>क्रान्तिकारी रणनीतिमा प्रारम्भदेखि नै वैज्ञानिक समाजवादी व्यवस्थाको (आर्थिक, राजनीतिक, सामाजिक र सांस्कृतिक) निर्माण गर्दै जाने प्रक्रिया समावेश छ।</p>
          </div>
          
          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">विकल्पको निर्माण</strong>
             <p>आत्मनिर्भर समाजवादी अर्थतन्त्र र राजनीतिक संरचनाको विकासले दलाल पुँजीवादी व्यवस्थालाई कमजोर बनाउनेछ।</p>
          </div>

          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">रणनीतिक सन्तुलन र विद्रोह</strong>
             <p>जब रणनीतिक सन्तुलन कायम हुन्छ, अन्तिम चरणमा सशस्त्र आमविद्रोहद्वारा वैज्ञानिक समाजवादी क्रान्ति पूरा गरिनेछ।</p>
          </div>

          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">अन्तर्राष्ट्रिय लक्ष्य</strong>
             <p>पार्टी वैज्ञानिक समाजवादीहरूको विश्वव्यापी संगठन, वैज्ञानिक समाजवादी इन्टरनेसनल (SSI) गठन गर्न प्रतिबद्ध छ।</p>
          </div>
        </div>
      </div>
    )
  }
];

const BaigyanikSamajwadPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('definition');
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
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <Globe size={18} className="mr-2" />
                <span>प्रशिक्षण सामग्री</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               वैज्ञानिक समाजवाद
             </h1>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify md:text-center">
               यो भूमण्डलीकृत पुँजीवाद र विश्वको उत्पादक शक्तिमा आएको परिवर्तनको व्यापक विश्लेषणमा आधारित वर्तमान युगको क्रान्तिको राजनीतिक कार्यदिशा हो।
             </p>
          </div>
        </div>
      </div>
      
      {/* Main Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
        
        {/* Mobile Toggle Button */}
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
                         <span className="truncate">{section.title}</span>
                         {activeSection === section.id && <ChevronRight size={16} />}
                      </button>
                   ))}
                </nav>
             </div>
          </div>

          {/* MAIN CONTENT - BOOK STYLE */}
          <div className="lg:w-3/4 w-full">
             <div className="max-w-4xl mx-auto">
                
                {/* Sections */}
                <div className="space-y-24">
                   {sections.map((section) => (
                      <section key={section.id} id={section.id} className="scroll-mt-32">
                         <div className="flex items-center mb-8">
                            <span className="bg-red-800 text-white p-2 rounded mr-4">
                               <BookOpen size={20} />
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif border-b-2 border-gray-200 pb-2 w-full">
                              {section.title.split('. ')[1]}
                            </h2>
                         </div>
                         
                         <div className="prose prose-lg prose-red max-w-none text-gray-800 font-serif">
                            {section.content}
                         </div>
                      </section>
                   ))}
                </div>

                {/* Footer of the Book */}
                <div className="mt-24 pt-12 border-t border-gray-200 text-center">
                   <p className="text-gray-500 text-sm">
                     © वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल । प्रशिक्षण विभाग
                   </p>
                </div>

             </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BaigyanikSamajwadPage;
