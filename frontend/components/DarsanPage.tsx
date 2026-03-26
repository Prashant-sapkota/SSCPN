
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BookOpen } from 'lucide-react';

const sections = [
  {
    id: 'identity',
    title: '१. पहिचान र वैचारिक आधार',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p className="text-xl font-serif text-gray-900 leading-relaxed">
           वैज्ञानिक समाजवाद कुनै काल्पनिक आदर्श (Utopian Ideals) मा होइन, बरु समाज विज्ञानका कठोर नियमहरूमा आधारित छ।
        </p>
        
        <div className="space-y-4 pt-4">
          <div className="bg-gray-50 p-6 rounded border-l-4 border-red-800">
            <h4 className="font-bold text-gray-900 text-lg mb-2">मार्गदर्शक विचार</h4>
            <p>
              पार्टीले <span className="font-bold">द्वन्द्वात्मक भौतिकवाद</span> र <span className="font-bold">ऐतिहासिक भौतिकवाद</span> को विश्वदृष्टिकोणलाई स्वीकार गर्दछ र मार्क्सवाद–लेनिनवाद–माओवादलाई आफ्नो सैद्धान्तिक मार्गदर्शक मान्दछ।
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded border-l-4 border-gray-800">
            <h4 className="font-bold text-gray-900 text-lg mb-2">संक्रमणकालीन व्यवस्था</h4>
            <p>
              वैज्ञानिक समाजवाद पुँजीवाद र अन्तिम राज्यविहीन, वर्गविहीन साम्यवादी समाज (Communism) बीचको <span className="font-bold">संक्रमणकालीन राज्य व्यवस्था</span> हो।
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded border-l-4 border-red-800">
            <h4 className="font-bold text-gray-900 text-lg mb-2">हाम्रो उद्देश्य</h4>
            <p>
               हाम्रो अन्तिम लक्ष्य भूमण्डलीकृत पुँजीवाद र दलाल संसदीय व्यवस्था विरुद्ध संघर्ष गर्दै <span className="font-bold text-red-800">वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्नु</span> हो।
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'analysis',
    title: '२. नयाँ युगको विश्लेषण',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          पार्टीको विश्लेषण अनुसार पुँजीवाद अब चौथो चरण अर्थात् <span className="font-bold">भूमण्डलीकृत पुँजीवाद</span> (Globalized Capitalism) मा प्रवेश गरेको छ।
        </p>

        <div className="space-y-6 pt-2">
           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">नयाँ उत्पादक शक्ति</h4>
             <p>यो युगको मुख्य विशेषता भनेको मुख्य उत्पादक शक्ति पुँजीबाट <span className="font-bold">विज्ञान र प्रविधि</span> (Science and Technology) मा रूपान्तरित हुनु हो।</p>
           </div>
           
           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">प्रचुरताको युग (Era of Abundance)</h4>
             <p>विज्ञान–प्रविधिको तीव्र विकासले प्रचुर उत्पादनको युग सुरु गरेको छ। पुँजीवादले कृत्रिम अभाव सिर्जना गरे पनि, अब गाँस, बास, कपास, शिक्षा, स्वास्थ्य जस्ता आधारभूत आवश्यकताहरू पर्याप्त मात्रामा पूरा गर्न सकिन्छ।</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 text-lg mb-1">नयाँ अन्तरविरोध</h4>
             <p>आजको विश्वको प्रमुख अन्तरविरोध <span className="font-bold">साम्राज्यवाद</span> (भूमण्डलीकृत पुँजीवाद) र <span className="font-bold">उत्पीडित राष्ट्रहरू</span> बीचको अन्तरविरोध हो।</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'principles',
    title: '३. व्यवस्थाका सिद्धान्तहरू',
    content: (
      <div className="space-y-8 text-gray-800 leading-relaxed">
        
        {/* Political */}
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-4 border-b border-gray-200 pb-1">क) राजनीतिक प्रणाली</h3>
          <ul className="space-y-4 list-disc pl-5 marker:text-red-800">
            <li>
              <strong className="text-gray-900 block mb-1">सर्वहारा अधिनायकत्व</strong>
              <span>प्रतिक्रान्ति रोक्न सर्वहारा—श्रमिक वर्गको अधिनायकत्व आवश्यक छ। तर यो केही नेताहरूको नभई व्यापक श्रमिक जनताको अधिनायकत्व हुनुपर्छ।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">समाज नियन्त्रित व्यवस्था</strong>
              <span>समुदायलाई नै उत्पादक, कार्यकारी र मूलतः सार्वभौम बनाइनेछ।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">राज्यको रूपान्तरण</strong>
              <span>दीर्घकालीन लक्ष्य राज्यको विलोपीकरण हो। राज्यको भूमिका केवल समन्वय र व्यवस्थापनमा सीमित गरिनेछ।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">संरचना</strong>
              <span>राजनीतिक संरचना 'जनवादी केन्द्रीयता' मा आधारित हुनेछ र कम्युनिस्ट पार्टी तथा 'सार्वभौम संगठन' (General Committees) मार्फत सञ्चालन हुनेछ।</span>
            </li>
          </ul>
        </div>

        {/* Economic */}
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-4 border-b border-gray-200 pb-1">ख) आर्थिक प्रणाली</h3>
          <ul className="space-y-4 list-disc pl-5 marker:text-red-800">
            <li>
              <strong className="text-gray-900 block mb-1">निजी स्वामित्वको अन्त्य</strong>
              <span>पार्टी निजी सम्पत्तिको पूर्ण अन्त्य गर्न प्रतिबद्ध छ।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">सामुदायिकीकरण</strong>
              <span>यो प्रक्रिया सम्पत्तिको 'राष्ट्रियकरण' (Nationalization) गरेर होइन, 'पूर्ण सामुदायिकीकरण' (Communalization) गरेर पूरा गरिनेछ।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">आत्मनिर्भरता</strong>
              <span>हाम्रो आर्थिक नीति 'समाजवादी स्वाधीन अर्थतन्त्र' निर्माणमा केन्द्रित छ।</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-4 border-b border-gray-200 pb-1">ग) सामाजिक रूपान्तरण</h3>
          <ul className="space-y-4 list-disc pl-5 marker:text-red-800">
            <li>
              <strong className="text-gray-900 block mb-1">सामाजिक उत्पीडन</strong>
              <span>८,००० वर्ष पुरानो पितृसत्ता र ३,००० वर्ष पुरानो जात व्यवस्थालाई हामी वर्गीय उत्पीडन जत्तिकै गम्भीर मान्दछौं।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">आधारभूत समुदाय</strong>
              <span>महिला र दलितहरू क्रान्तिका लागि 'आधारभूत समुदाय' हुन्।</span>
            </li>
            <li>
              <strong className="text-gray-900 block mb-1">सांस्कृतिक उद्देश्य</strong>
              <span>हाम्रो लक्ष्य 'चेतनाको अधिकतम वैज्ञानिकीकरण' गर्नु हो ताकि मानिसहरूलाई अवैज्ञानिक र उपभोक्तावादी मानसिकताबाट मुक्त गर्न सकियोस्।</span>
            </li>
          </ul>
        </div>

      </div>
    )
  },
  {
    id: 'path',
    title: '४. वैज्ञानिक समाजवादको बाटो',
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          विगतका मोडेलहरू भन्दा फरक, हाम्रो क्रान्तिकारी रणनीति <span className="font-bold">"समानान्तर निर्माण"</span> (Simultaneous Construction) मा केन्द्रित छ।
        </p>
        
        <div className="space-y-6 pt-2">
          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">समानान्तर निर्माण रणनीति</strong>
             <p>क्रान्तिकारी संघर्षसँगै सुरु देखि नै वैज्ञानिक समाजवादी व्यवस्थाको निर्माण सुरु गर्नु अनिवार्य छ।</p>
          </div>
          
          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">निर्माणका चार खम्बा</strong>
             <p>यो निर्माण सामाजिक व्यवस्थाका चारवटै खम्बामा गरिनेछ: आर्थिक प्रणाली, राजनीतिक प्रणाली, सामाजिक प्रणाली, र सांस्कृतिक प्रणाली।</p>
          </div>

          <div className="border-l-4 border-red-800 pl-6 py-2 bg-gray-50">
             <strong className="block text-gray-900 mb-1">रणनीतिक सन्तुलन र विद्रोह</strong>
             <p>आत्मनिर्भर व्यवस्थाको विस्तार गर्दै दलाल पुँजीवादी सत्ता विरुद्ध 'रणनीतिक सन्तुलन' कायम गर्ने र अन्त्यमा <span className="font-bold">सशस्त्र आमविद्रोह</span> द्वारा क्रान्ति सम्पन्न गर्ने।</p>
          </div>
        </div>
      </div>
    )
  }
];

const DarsanPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('identity');
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
                <BookOpen size={18} className="mr-2" />
                <span>प्रशिक्षण सामग्री</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               दर्शन र सिद्धान्त
             </h1>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify md:text-center">
               वैज्ञानिक समाजवाद एक गतिशील, प्रविधि-मैत्री राजनीतिक दर्शन हो जसले निरन्तर वैचारिक संघर्ष र सामुदायिक स्वामित्वमा आधारित वैकल्पिक सामाजिक व्यवस्थाको समानान्तर निर्माणको माग गर्दछ।
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

export default DarsanPage;
