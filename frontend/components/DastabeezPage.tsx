
import React, { useState } from 'react';
import { Book, Menu, X, ChevronRight, ArrowLeft, Download, Eye,  } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const documentData = [
  {
    id: 'prastabana',
    title: 'प्रस्तावना',
    content: (
      <div className="space-y-6">
        <p>वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल आजको युगको विश्व दृष्टिकोण द्वन्द्वात्मक भौतिकवाद र ऐतिहासिक भौतिकवादलाई अङ्गीकार गर्दछ। मार्क्सवाद–लेनिनवाद–माओवादलाई मार्गनिर्देशक सिद्धान्तको रुपमा अवलम्बन गर्दै भूमण्डलीकृत पुँजीवाद र त्यसबाट पालित-पोषित रहेको दलाल पुँजीवादी संसदीय व्यवस्थाका विरुद्ध सङ्घर्ष गर्दै वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्नु आजको नेपाली क्रान्तिको रणनीति हो।</p>
        <p>पार्टी प्रारम्भदेखि नै वैज्ञानिक समाजवादी व्यवस्थाको राजनीतिक प्रणाली, अर्थव्यवस्था, सामाजिक प्रणाली र सांस्कृतिक प्रणालीको निर्माण गर्दै आम जनविद्रोहद्वारा क्रान्ति सम्पन्न गर्न सङ्कल्पित छ।</p>
        <p>पार्टी पुँजीवादको चौथो चरण भूमण्डलीकृत पुँजीवादमा उत्पादक शक्तिमा भएको गुणात्मक परिवर्तनपछि आज प्रमुख उत्पादक शक्ति विज्ञान-प्रविधि भएको र त्यसकै आधारमा वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्न सङ्कल्पित छ।</p>
        <p>पार्टी समुदायलाई उत्पादक बनाउने, कार्यकारी बनाउने, मुलतः सार्वभौम बनाउने र राज्यलाई संयोजन र व्यवस्थापनको जिम्मेवारी दिने सवालमा दृढ छ।</p>
        <p>पार्टी मुलुकमा विद्यमान शोषण, विभेद र उत्पीडनमा रहेका सबै वर्ग, जात, उत्पीडित राष्ट्र, लिङ्ग, भाषा र संस्कृतिका जनताको स्वतन्त्रता, न्याय र मुक्तिको लागि अठोट गर्दछ। साथै मुक्ति, समानता र स्वतन्त्रताको यस यात्रामा आठ हजार वर्ष लामो पितृसत्ताको अन्त्य र महिला मुक्तिको सवाल अनि दक्षिण एसियाको हकमा तीन हजार वर्ष लामो जात व्यवस्थाको अन्त्य र दलित समुदायको मुक्तिको सवाललाई वर्गीय उत्पीडनसरह कै घनत्व भएको विषय ठान्दछ।</p>
        <p>पार्टी राष्ट्रिय स्वाधीनताको रक्षा र आत्मनिर्भर उत्पादन प्रणाली निर्माण गर्न प्रतिबद्ध छ। पार्टी सन् १९५९ को क्युबाली क्रान्तिपछि संसारभर अर्को सफलता हात नपर्नु र भएका समाजवादी सत्ता पनि मक्किएको दरवार ढलेजस्तै ढल्नु अर्थात प्रतिक्रान्ति हुनुलाई गम्भीर समीक्षा गर्दै प्रतिक्रान्तिको शिक्षासहित आफ्नै मौलिकतामा नेपाली क्रान्ति सञ्चालन गर्न सर्वहारा-श्रमिक र विस्थापित वर्गको नेतृत्वमा मध्यम वर्गको एकतामा दलाल पुँजीपति वर्गमाथि प्रहार केन्द्रित गर्दै वैज्ञानिक समाजवाद निर्माण गर्ने र साम्यवादको दिशामा अघि बढ्ने कम्युनिष्ट पार्टी सञ्चालन गर्न यो विधान जारी गर्दछ।</p>
      </div>
    )
  },
  {
    id: 'chapter-1',
    title: '१. नयाँ युगको प्रारम्भ',
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-black font-['Google_Sans'] italic text-gray-950">क) उत्पादक शक्तिमा गुणात्मक परिवर्तन</h3>
          <p>मानव समाज आफ्नो विकासका विभिन्न युगहरू र ती युगका विभिन्न चरणहरू पार गरेर आजको अवस्थामा आइपुगेको छ। आदिम साम्यवादी युग, दास युग, सामन्तवादी युग र पुँजीवादी युगको रूपमा मार्क्सवादले ती युगहरूलाई परिभाषित गरेको छ। तर ती युगहरूभित्र उपयुग वा युगका विभिन्न चरणहरू पनि हुने गरेका छन्।</p>
        </div>
        <p>आज पुँजीवाद भूमण्डलीकृत उपयुग वा चरणमा तीव्र गतिले अगाडि बढिरहेको छ। मार्क्सवादी दर्शन द्वन्द्वात्मक भौतिकवादको एउटा शानदार पक्ष के छ भने यसले हरेक चिजको उत्पत्ति, विकास र अन्त्यको सामान्य अवस्थामा मुख्य कारण त्यही चिजभित्र हुन्छ भन्ने मान्दछ। मानव समाजको विकासलाई पनि द्वन्द्वात्मक भौतिकवादी दृष्टिकोणबाट हेर्दा प्रत्येक युगको उत्पत्ति, विकास र अन्त्यको मुख्य कारण पनि त्यही युगभित्र हुन्छ वा त्यही युगभित्र जन्मिन्छ।</p>
        <div className="bg-red-50 border-l-4 border-red-900 p-8 my-8">
          <p className="text-gray-900 font-['Google_Sans'] italic text-xl">"उत्पादक शक्तिले नै मानव समाजमा आर्थिक, राजनीतिक र सामाजिक सम्बन्धहरू र चेतनाका विभिन्न रूपहरू, समग्रमा भन्दा उत्पादन सम्बन्ध निर्माण एवं विनाश गर्न मुख्य उत्प्रेरकको भूमिका खेल्छ।"</p>
        </div>
        <p>यसरी सुरु भएको दास-मालिक युगभित्रै उत्पादन बढाउन सहयोग पुर्याउने औजार तथा प्रविधि पनि विकसित हुँदै गयो र अन्तः फलामे हलो, गोरु, घोडा, राँगा आदि नारेर जोत्ने प्रविधिमा मानव समाज पुग्यो। मुख्य उत्पादक शक्तिमा आएको गुणात्मक फेरबदलले नै दास-मालिक युगको उत्पादन सम्बन्ध फेरिएर सामन्तवादी युग सुरु हुन पुगेको हो।</p>
        <p>यसरी पुँजीवादमा पुँजी मुख्य उत्पादक शक्ति बन्न गयो। व्यापारिक पुँजीवाद औद्योगिक पुँजीवादमा पुग्दा बजारको उत्पत्ति हुन गयो। अर्कोतिर दोस्रो विश्वयुद्धपछि विश्वमा तीव्र गतिमा विज्ञान-प्रविधिको विकास हुन थाल्यो। मानव समाजमा विज्ञान-प्रविधिको विकास त त्यसभन्दा पहिले पनि हुँदै नै आएको हो, तर विशेषतः सन् १९५० पछि यसमा गुणात्मक फड्को आएको छ।</p>
      </div>
    )
  }
];

const DastabeezPage: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState(documentData[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const pdfDownloadUrl = '/Dastabage.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // LANDING VIEW
  if (!isReading) {
    return (
      <div className="bg-white pt-20 min-h-screen ">
        {/* 1. MASTHEAD */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 py-10 lg:py-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center space-y-10"
            >
               {/* <div className="inline-flex items-center gap-3 bg-red-50 px-5 py-2 text-red-900 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                  <Book size={16} />
                  पार्टी दस्तावेज
               </div> */}
               <h1 className="text-5xl md:text-6xl font-black text-gray-950 font-['Google_Sans'] leading-[0.9] italic tracking-tighter">
                 राजनीतिक <span className="text-red-900">प्रतिवेदन</span> <br className="hidden md:block" /> तथा विधान
               </h1>
               <p className="text-xl md:text-2xl text-gray-500 font-['Google_Sans'] italic max-w-4xl border-l-2 border-red-900/20 pl-8 font-medium">
                 वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपालको आधिकारिक राजनीतिक कार्यदिशा, रणनीति र संगठनात्मक संरचनाको विस्तृत दस्तावेज।
               </p>
            </motion.div>
          </div>
        </div>

        {/* 2. DOCUMENT PREVIEW SECTION */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Cover Image Area */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl group rounded-sm ring-1 ring-gray-200">
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/5 transition-colors"></div>
                  
                  {/* Mock Document Cover Aesthetics */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <img 
                      src="https://i.imghippo.com/files/QObu9356OSg.png" 
                      alt="Logo" 
                      className="w-24 h-24 opacity-90 mb-12 object-contain filter grayscale invert brightness-0"
                    />
                    <div className="w-16 h-[2px] bg-red-900 mb-8" />
                    <h3 className="text-3xl font-black text-gray-950 font-['Google_Sans'] italic leading-tight mb-4">राजनीतिक प्रतिवेदन <br /> एवं विधान</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-auto">पार्टी केन्द्रिय समिति - २०८१</p>
                  </div>

                  <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none"></div>
                </div>

                {/* Decorative Badge */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-900 flex items-center justify-center rounded-full shadow-2xl border-4 border-white z-10 rotate-12">
                   <Book size={32} className="text-white fill-current" />
                </div>
              </motion.div>

              {/* Details Area */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-12"
              >
                 <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-950 font-['Google_Sans'] italic leading-tight tracking-tighter">
                      दस्तावेज <span className="text-red-900">सारांश</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-red-900" />
                 </div>

                 <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-['Google_Sans'] italic font-medium">
                   यस दस्तावेजमा पार्टीको स्थापना, वैचारिक आधार (मार्क्सवाद–लेनिनवाद–माओवाद), वर्तमान युग (भूमण्डलीकृत पुँजीवाद) को विश्लेषण, र वैज्ञानिक समाजवाद निर्माणको रणनीतिक योजना समावेश गरिएको छ। यसले पार्टीको विधान र संगठनात्मक पद्धतिलाई पनि स्पष्ट पार्दछ।
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-6 pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsReading(true)}
                      className="flex-1 md:flex-none flex items-center justify-center px-8 py-4 bg-red-900 text-white rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-red-950 transition-all shadow-xl gap-3"
                    >
                      <Eye size={20} /> अनलाइन पढ्नुहोस्
                    </motion.button>
                    
                    <motion.a
                      href={pdfDownloadUrl}
                      download="Dastabage.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white border-2 border-gray-100 text-gray-950 px-10 py-6 rounded-sm font-black text-[11px] uppercase tracking-normal flex items-center justify-center shadow-lg hover:border-red-900 hover:text-red-900 transition-all gap-4"
                    >
                      <Download size={20} /> डाउनलोड (PDF)
                    </motion.a>
                 </div>
                 
                 <div className="pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-sm bg-red-50 flex items-center justify-center text-green-600">
                          <img src="https://i.imghippo.com/files/NmZa4274WM.png" alt="Haisa Hatauda" className="w-6 h-6"/>
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-normal text-gray-400">अन्तिम अपडेट: भदौ २०८१</p>
                    </div>
                 </div>
              </motion.div>

           </div>
        </div>
      </div>
    );
  }

  // READER VIEW
  return (
    <div className="bg-white min-h-screen pt-20 flex flex-col font-['Google_Sans']">
      {/* Reader Header */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-40 bg-white/95 backdrop-blur-md">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
           <div className="flex items-center gap-6">
              <motion.button 
                whileHover={{ x: -5 }}
                onClick={() => setIsReading(false)}
                className="p-3 bg-gray-50 text-gray-950 hover:bg-red-900 hover:text-white transition-colors shadow-sm"
              >
                 <ArrowLeft size={20} />
              </motion.button>
              <div className="flex flex-col">
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-900 italic">अध्ययन मोड</span>
                 <h1 className="text-lg md:text-xl font-black text-gray-950 italic truncate max-w-[150px] sm:max-w-md">
                   राजनीतिक प्रतिवेदन तथा विधान
                 </h1>
              </div>
           </div>
           
           <button 
             className="lg:hidden p-4 bg-gray-50 text-gray-950" 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </div>

      <div className="flex-grow max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sidebar Navigation */}
          <div className={`
             lg:w-1/4 fixed lg:static inset-0 z-50 bg-white lg:bg-transparent
             ${mobileMenuOpen ? 'flex flex-col p-8 overflow-y-auto' : 'hidden lg:block'}
          `}>
             <div className="flex justify-between items-center mb-10 lg:hidden">
                <h3 className="font-black text-2xl italic text-gray-950">विषयसूची</h3>
                <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-gray-100"><X size={20}/></button>
             </div>
             
             <div className="space-y-4 lg:sticky lg:top-48">
                <div className="px-5 py-2 border-b border-gray-100">
                  <h3 className="font-black text-[10px] uppercase tracking-normal text-gray-400">खण्डहरू</h3>
                </div>
                <nav className="space-y-1">
                  {documentData.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setActiveDoc(doc);
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-5 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-between group
                        ${activeDoc.id === doc.id 
                          ? 'bg-red-900 text-white shadow-2xl skew-x-[-3deg]' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-red-900'}
                      `}
                    >
                      <span className="truncate group-hover:translate-x-1 transition-transform">{doc.title}</span>
                      <ChevronRight size={14} className={`transition-all ${activeDoc.id === doc.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </button>
                  ))}
                </nav>
             </div>
          </div>

          {/* Main Content Reader */}
          <div className="lg:w-3/4 flex-grow">
             <motion.div 
               key={activeDoc.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white p-8 md:p-20 border border-gray-100 shadow-2xl max-w-4xl mx-auto rounded-sm ring-1 ring-gray-100"
             >
                <div className="mb-12 space-y-4">
                  <div className="w-12 h-1 bg-red-900" />
                  <h2 className="text-4xl md:text-6xl font-black text-gray-950 italic leading-tight tracking-tighter">
                    {activeDoc.title}
                  </h2>
                </div>

                <div className="text-xl md:text-2xl text-gray-800 leading-relaxed text-justify font-['Google_Sans'] italic space-y-8">
                   {activeDoc.content}
                </div>
             </motion.div>
             
             <div className="mt-20 text-center">
                <button 
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-red-900 transition-colors"
                >
                   पृष्ठको सुरुवातमा जानुहोस्
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DastabeezPage;

