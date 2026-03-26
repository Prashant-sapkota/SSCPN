import React from 'react';
import { Printer, Download, FileText, Phone, MapPin, Clock, Info, CheckSquare } from 'lucide-react';

const MembershipPage: React.FC = () => {
  const formImageUrl = '/form.png';

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`<html><head><title>Print Form</title></head><body style="margin:0"><img src="${formImageUrl}" style="width:100%" onload="window.print()" /></body></html>`);
      printWindow.document.close();
    }
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* PAGE HEADER */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-3">
                <FileText size={18} className="mr-2" />
                <span>केन्द्रीय संगठन विभाग</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
               सदस्यता आवेदन
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">

          {/* LEFT COLUMN: Main Form Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* FORM VIEWER SECTION - Kept Border as requested */}
            <div className="bg-white border border-gray-300 shadow-sm">
              <div className="bg-gray-50 border-b border-gray-300 px-6 py-4 flex justify-between items-center">
                <h2 className="font-bold text-gray-800 flex items-center">
                  <FileText className="mr-2 text-red-700" size={20}/> आवेदन फारम
                </h2>
                <div className="flex space-x-2">
                   <button onClick={handlePrint} className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-3 py-1 text-xs font-bold uppercase flex items-center">
                      <Printer size={14} className="mr-1" /> प्रिन्ट
                   </button>
                   <a
                     href={formImageUrl}
                     download="membership-form.png"
                     className="bg-red-800 hover:bg-red-900 text-white px-3 py-1 text-xs font-bold uppercase flex items-center"
                   >
                     <Download size={14} className="mr-1" /> डाउनलोड
                   </a>
                </div>
              </div>
              
              <div className="p-6 bg-gray-200 flex justify-center">
                 <div className="bg-white p-2 shadow-lg max-w-3xl w-full border border-gray-100">
                    <img
                      src={formImageUrl}
                      alt="Membership Form Preview"
                      className="w-full h-auto border border-gray-100"
                    />
                 </div>
              </div>
              
              <div className="bg-gray-50 border-t border-gray-300 p-4 text-center">
                 <p className="text-sm text-gray-500 font-serif">
                   फारम प्रिन्ट गर्न माथिको "प्रिन्ट" बटन थिच्नुहोस्।
                 </p>
              </div>
            </div>

            {/* IMPORTANT INFO (Mahattopurna Jankari) - No Border */}
            <div className="bg-white px-2 flex items-start gap-5">
              <Info className="text-red-700 flex-shrink-0 mt-1" size={28} />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-serif">महत्वपूर्ण जानकारी</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckSquare size={16} className="mt-1 mr-2 text-red-700" />
                    <span>वैज्ञानिक समाजवादी कम्युनिस्ट पार्टीको सदस्यता प्राप्त गर्न भौतिक उपस्थिति अनिवार्य छ।</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare size={16} className="mt-1 mr-2 text-red-700" />
                    <span className="font-bold">फारम प्रिन्ट गरेर भर्ने र पूर्व–सम्पर्क गरेर मात्र बुझाउने।</span>
                  </li>
                  <li className="flex items-start">
                     <CheckSquare size={16} className="mt-1 mr-2 text-red-700" />
                     <span>फारम बुझाउन आउँदा नागरिकताको प्रतिलिपि र फोटो अनिवार्य साथमा ल्याउनुहोला।</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar - No Borders */}
          <div className="lg:col-span-4 space-y-12 h-fit">
            
            {/* Eligibility - No Border */}
            <div className="bg-white px-2">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b-2 border-red-800 pb-1 inline-block">
                 योग्यता
               </h3>
               <ul className="space-y-3 text-sm text-gray-700">
                 <li className="flex items-center border-b border-gray-100 pb-2">
                   <div className="w-1.5 h-1.5 bg-gray-400 mr-3"></div>
                   उमेर १६ वर्ष पूरा भएको।
                 </li>
                 <li className="flex items-center border-b border-gray-100 pb-2">
                   <div className="w-1.5 h-1.5 bg-gray-400 mr-3"></div>
                   पार्टी विधान स्वीकार गर्ने।
                 </li>
                 <li className="flex items-center border-b border-gray-100 pb-2">
                   <div className="w-1.5 h-1.5 bg-gray-400 mr-3"></div>
                   कुनै फौजदारी अभियोग नलागेको।
                 </li>
                 <li className="flex items-center">
                   <div className="w-1.5 h-1.5 bg-gray-400 mr-3"></div>
                   नियमित लेवि तिर्न मन्जुर।
                 </li>
               </ul>
            </div>

            {/* Contact & Map - Sticky, No Border */}
            <div className="bg-white px-2 sticky top-24">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b-2 border-red-800 pb-1 inline-block w-full">
                 सम्पर्क विवरण
               </h3>
               
               <div className="space-y-4 mb-6">
                 <div className="flex items-start group">
                   <MapPin className="text-red-700 mt-0.5 mr-3 group-hover:scale-110 transition-transform" size={18} />
                   <div>
                     <span className="font-bold block text-sm text-gray-800">कार्यालय</span>
                     <span className="text-sm text-gray-600">अनामनगर, काठमाडौं</span>
                   </div>
                 </div>
                 <div className="flex items-start group">
                   <Phone className="text-red-700 mt-0.5 mr-3 group-hover:scale-110 transition-transform" size={18} />
                   <div>
                     <span className="font-bold block text-sm text-gray-800">फोन</span>
                     <span className="text-sm text-gray-600">+९७७-०१-४XXXXXX</span>
                   </div>
                 </div>
                 <div className="flex items-start group">
                   <Clock className="text-red-700 mt-0.5 mr-3 group-hover:scale-110 transition-transform" size={18} />
                   <div>
                     <span className="font-bold block text-sm text-gray-800">समय</span>
                     <span className="text-sm text-gray-600">११:०० - ३:०० (शनिबार बन्द)</span>
                   </div>
                 </div>
               </div>

               {/* Google Map Embed */}
               <div className="w-full h-64 bg-gray-100 border border-gray-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5539527945624!2d85.3235694754593!3d27.699388876187122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a8451847%3A0x6c6e7680517926d0!2sAnamnagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1709623849123!5m2!1sen!2snp" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MembershipPage;