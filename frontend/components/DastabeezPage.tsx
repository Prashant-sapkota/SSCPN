
import React, { useState } from 'react';
import { Book, Menu, X, FileText, ChevronRight, ArrowLeft, Download } from 'lucide-react';

const documentData = [
  {
    id: 'prastabana',
    title: 'प्रस्तावना',
    content: `
      <p>वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल आजको युगको विश्व दृष्टिकोण द्वन्द्वात्मक भौतिकवाद र ऐतिहासिक भौतिकवादलाई अङ्गीकार गर्दछ। मार्क्सवाद–लेनिनवाद–माओवादलाई मार्गनिर्देशक सिद्धान्तको रुपमा अवलम्बन गर्दै भूमण्डलीकृत पुँजीवाद र त्यसबाट पालित-पोषित रहेको दलाल पुँजीवादी संसदीय व्यवस्थाका विरुद्ध सङ्घर्ष गर्दै वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्नु आजको नेपाली क्रान्तिको रणनीति हो।</p>
      <p>पार्टी प्रारम्भदेखि नै वैज्ञानिक समाजवादी व्यवस्थाको राजनीतिक प्रणाली, अर्थव्यवस्था, सामाजिक प्रणाली र सांस्कृतिक प्रणालीको निर्माण गर्दै आम जनविद्रोहद्वारा क्रान्ति सम्पन्न गर्न सङ्कल्पित छ।</p>
      <p>पार्टी पुँजीवादको चौथो चरण भूमण्डलीकृत पुँजीवादमा उत्पादक शक्तिमा भएको गुणात्मक परिवर्तनपछि आज प्रमुख उत्पादक शक्ति विज्ञान-प्रविधि भएको र त्यसकै आधारमा वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्न सङ्कल्पित छ।</p>
      <p>पार्टी समुदायलाई उत्पादक बनाउने, कार्यकारी बनाउने, मुलतः सार्वभौम बनाउने र राज्यलाई संयोजन र व्यवस्थापनको जिम्मेवारी दिने सवालमा दृढ छ।</p>
      <p>पार्टी मुलुकमा विद्यमान शोषण, विभेद र उत्पीडनमा रहेका सबै वर्ग, जात, उत्पीडित राष्ट्र, लिङ्ग, भाषा र संस्कृतिका जनताको स्वतन्त्रता, न्याय र मुक्तिको लागि अठोट गर्दछ। साथै मुक्ति, समानता र स्वतन्त्रताको यस यात्रामा आठ हजार वर्ष लामो पितृसत्ताको अन्त्य र महिला मुक्तिको सवाल अनि दक्षिण एसियाको हकमा तीन हजार वर्ष लामो जात व्यवस्थाको अन्त्य र दलित समुदायको मुक्तिको सवाललाई वर्गीय उत्पीडनसरह कै घनत्व भएको विषय ठान्दछ।</p>
      <p>पार्टी राष्ट्रिय स्वाधीनताको रक्षा र आत्मनिर्भर उत्पादन प्रणाली निर्माण गर्न प्रतिबद्ध छ। पार्टी सन् १९५९ को क्युबाली क्रान्तिपछि संसारभर अर्को सफलता हात नपर्नु र भएका समाजवादी सत्ता पनि मक्किएको दरवार ढलेजस्तै ढल्नु अर्थात प्रतिक्रान्ति हुनुलाई गम्भीर समीक्षा गर्दै प्रतिक्रान्तिको शिक्षासहित आफ्नै मौलिकतामा नेपाली क्रान्ति सञ्चालन गर्न सर्वहारा-श्रमिक र विस्थापित वर्गको नेतृत्वमा मध्यम वर्गको एकतामा दलाल पुँजीपति वर्गमाथि प्रहार केन्द्रित गर्दै वैज्ञानिक समाजवाद निर्माण गर्ने र साम्यवादको दिशामा अघि बढ्ने कम्युनिष्ट पार्टी सञ्चालन गर्न यो विधान जारी गर्दछ।</p>
    `
  },
  {
    id: 'chapter-1',
    title: '१. नयाँ युगको प्रारम्भ',
    content: `
      <h3 class="text-xl font-bold text-gray-800 mb-3">क) उत्पादक शक्तिमा गुणात्मक परिवर्तन</h3>
      <p>मानव समाज आफ्नो विकासका विभिन्न युगहरू र ती युगका विभिन्न चरणहरू पार गरेर आजको अवस्थामा आइपुगेको छ। आदिम साम्यवादी युग, दास युग, सामन्तवादी युग र पुँजीवादी युगको रूपमा मार्क्सवादले ती युगहरूलाई परिभाषित गरेको छ। तर ती युगहरूभित्र उपयुग वा युगका विभिन्न चरणहरू पनि हुने गरेका छन्।</p>
      <p>आज पुँजीवाद भूमण्डलीकृत उपयुग वा चरणमा तीव्र गतिले अगाडि बढिरहेको छ। मार्क्सवादी दर्शन द्वन्द्वात्मक भौतिकवादको एउटा शानदार पक्ष के छ भने यसले हरेक चिजको उत्पत्ति, विकास र अन्त्यको सामान्य अवस्थामा मुख्य कारण त्यही चिजभित्र हुन्छ भन्ने मान्दछ। मानव समाजको विकासलाई पनि द्वन्द्वात्मक भौतिकवादी दृष्टिकोणबाट हेर्दा प्रत्येक युगको उत्पत्ति, विकास र अन्त्यको मुख्य कारण पनि त्यही युगभित्र हुन्छ वा त्यही युगभित्र जन्मिन्छ।</p>
      <p>मानव समाजको विकास र गतिलाई हेर्ने दुई विश्व-दृष्टिकोण छन्। एउटा द्वन्द्वात्मक भौतिकवाद अर्थात् मार्क्सवाद र अर्को आदर्शवाद। आदर्शवादले मानव समाजलाई राजाहरू, वीर योद्धाहरू, महापुरुष-महास्त्रीहरू, विद्वानहरू वा ईश्वरको कृपा वा इच्छाले बदल्छ वा चलाउँछ भन्छ। तर मार्क्सवादले त्यसको ठीक उल्टो मानव समाजमा विकसित हुने उत्पादक शक्तिको विकासले नै मानव समाज परिवर्तन गर्ने ढोका खोल्दछ र बदल्छ भन्ने मान्दछ। उत्पादक शक्तिले नै मानव समाजमा आर्थिक, राजनीतिक र सामाजिक सम्बन्धहरू र चेतनाका विभिन्न रूपहरू, समग्रमा भन्दा उत्पादन सम्बन्ध निर्माण एवं विनाश गर्न मुख्य उत्प्रेरकको भूमिका खेल्छ।</p>
      <p>यसरी सुरु भएको दास-मालिक युगभित्रै उत्पादन बढाउन सहयोग पुर्‍याउने औजार तथा प्रविधि पनि विकसित हुँदै गयो र अन्तः फलामे हलो, गोरु, घोडा, राँगा आदि नारेर जोत्ने प्रविधिमा मानव समाज पुग्यो। मुख्य उत्पादक शक्तिमा आएको गुणात्मक फेरबदलले नै दास-मालिक युगको उत्पादन सम्बन्ध फेरिएर सामन्तवादी युग सुरु हुन पुगेको हो।</p>
      <p>यसरी पुँजीवादमा पुँजी मुख्य उत्पादक शक्ति बन्न गयो। व्यापारिक पुँजीवाद औद्योगिक पुँजीवादमा पुग्दा बजारको उत्पत्ति हुन गयो। अर्कोतिर दोस्रो विश्वयुद्धपछि विश्वमा तीव्र गतिमा विज्ञान-प्रविधिको विकास हुन थाल्यो। मानव समाजमा विज्ञान-प्रविधिको विकास त त्यसभन्दा पहिले पनि हुँदै नै आएको हो, तर विशेषतः सन् १९५० पछि यसमा गुणात्मक फड्को आएको छ।</p>
    `
  }
];

const DastabeezPage: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState(documentData[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const pdfDownloadUrl = '/Dastabage.pdf';

  // LANDING VIEW
  if (!isReading) {
    return (
      <div className="bg-white min-h-screen font-sans">
        {/* Masthead */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
               <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                  <Book size={18} className="mr-2" />
                  <span>पार्टी दस्तावेज</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
                 राजनीतिक प्रतिवेदन तथा विधान
               </h1>
               <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                 वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपालको आधिकारिक राजनीतिक कार्यदिशा, रणनीति र संगठनात्मक संरचनाको विस्तृत दस्तावेज।
               </p>
            </div>
          </div>
        </div>

        {/* Document Preview Section */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
           <div className="bg-neutral-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm">
              
              {/* Cover Image Area */}
                <div className="md:w-1/3 bg-gray-200 relative h-64 md:h-auto flex items-center justify-center p-8 group">
                 <div className="absolute inset-0 bg-neutral-800/10 group-hover:bg-neutral-800/20 transition-colors"></div>
                 {/* Mock Document Cover */}
                 <div className="bg-white w-40 h-56 shadow-2xl flex flex-col items-center justify-center p-4 text-center border border-gray-100 transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                     src="https://i.imghippo.com/files/QObu9356OSg.png" 
                      alt="Logo" 
                     className="w-12 h-12 opacity-90 mb-4 object-contain"
                    />
                    <div className="w-full h-1 bg-red-800 mb-1"></div>
                    <div className="w-2/3 h-1 bg-gray-300 mb-4 mx-auto"></div>
                    <h3 className="text-xs font-bold text-gray-900 leading-tight">दस्ताबेज</h3>
                    <div className="mt-auto text-[10px] text-gray-400">२०८१</div>
                 </div>
              </div>

              {/* Details Area */}
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                 <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">
                   दस्तावेज सारांश
                 </h2>
                 <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                   यस दस्तावेजमा पार्टीको स्थापना, वैचारिक आधार (मार्क्सवाद–लेनिनवाद–माओवाद), वर्तमान युग (भूमण्डलीकृत पुँजीवाद) को विश्लेषण, र वैज्ञानिक समाजवाद निर्माणको रणनीतिक योजना समावेश गरिएको छ। यसले पार्टीको विधान र संगठनात्मक पद्धतिलाई पनि स्पष्ट पार्दछ।
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    <a
                     href={pdfDownloadUrl}
                     download="Dastabage.pdf"
                     className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded font-bold uppercase tracking-wider flex items-center shadow-lg transition-transform transform hover:-translate-y-1"
                    >
                      <Download size={20} className="mr-2" /> डाउनलोड (PDF)
                    </a>
                 </div>
                 
                 <div className="mt-6 text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    अन्तिम अपडेट: भदौ २०८१
                 </div>
              </div>

           </div>
        </div>
      </div>
    );
  }

  // READER VIEW (Full screen / Overlay style)
  return (
    <div className="bg-neutral-100 min-h-screen font-sans flex flex-col">
      {/* Reader Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 h-16 flex items-center justify-between">
           <div className="flex items-center">
              <button 
                onClick={() => setIsReading(false)}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
                title="फिर्ता जानुहोस्"
              >
                 <ArrowLeft size={24} />
              </button>
              <div className="flex flex-col">
                 <span className="text-xs font-bold text-red-800 uppercase tracking-wider">अध्ययन मोड</span>
                 <h1 className="text-lg font-bold text-gray-900 truncate max-w-[200px] sm:max-w-md">
                   राजनीतिक प्रतिवेदन तथा विधान
                 </h1>
              </div>
           </div>
           
           <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      <div className="flex-grow max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-12 2xl:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          
          {/* Sidebar Navigation */}
          <div className={`
             lg:w-1/4 fixed lg:static inset-0 z-30 bg-black/50 lg:bg-transparent lg:block
             ${mobileMenuOpen ? 'block' : 'hidden'}
          `}>
            <div className="bg-white lg:bg-gray-50 h-full lg:h-auto lg:sticky lg:top-24 w-3/4 lg:w-full p-4 border-r lg:border border-gray-200 shadow-xl lg:shadow-none overflow-y-auto">
               <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h3 className="font-bold text-gray-900">विषयसूची</h3>
                  <button onClick={() => setMobileMenuOpen(false)}><X size={20}/></button>
               </div>
               <h3 className="font-bold text-gray-900 mb-4 px-2 hidden lg:block">विषयसूची</h3>
               
               <ul className="space-y-1">
                 {documentData.map((doc) => (
                   <li key={doc.id}>
                     <button
                       onClick={() => {
                         setActiveDoc(doc);
                         setMobileMenuOpen(false);
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                       }}
                       className={`w-full text-left px-4 py-3 rounded flex items-center justify-between transition-colors text-sm ${
                         activeDoc.id === doc.id 
                           ? 'bg-red-800 text-white font-bold shadow-sm' 
                           : 'text-gray-700 hover:bg-gray-200'
                       }`}
                     >
                       <span className="truncate">{doc.title}</span>
                       {activeDoc.id === doc.id && <ChevronRight size={16} />}
                     </button>
                   </li>
                 ))}
               </ul>
            </div>
            {/* Click outside to close mobile menu */}
            <div className="lg:hidden flex-grow" onClick={() => setMobileMenuOpen(false)}></div>
          </div>

          {/* Main Content Reader */}
          <div className="lg:w-3/4 min-h-[60vh]">
             <div className="bg-white p-8 md:p-16 rounded-lg border border-gray-200 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-8 border-b-2 border-red-800 pb-4">
                  {activeDoc.title}
                </h2>
                <div 
                  className="prose prose-lg prose-red max-w-none text-gray-800 leading-loose text-justify font-serif"
                  dangerouslySetInnerHTML={{ __html: activeDoc.content }}
                />
             </div>
             
             <div className="mt-8 flex justify-center">
                <button 
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="text-gray-500 hover:text-red-800 text-sm font-bold uppercase tracking-wider"
                >
                   माथि जानुहोस्
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DastabeezPage;
