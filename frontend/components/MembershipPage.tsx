

import React from 'react';
import { Printer, Download, FileText, Phone, MapPin, Clock, Info, CheckSquare, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const MembershipPage: React.FC = () => {
  const formImageUrl = '/form.png';

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`<html><head><title>Print Form</title></head><body style="margin:0"><img src="${formImageUrl}" style="width:100%" onload="window.print()" /></body></html>`);
      printWindow.document.close();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white pt-20 min-h-screen ">
      
      {/* 1. PAGE HEADER */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 py-10 lg:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
             {/* <div className="inline-flex items-center gap-3 bg-red-50 px-5 py-2 text-red-900 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                <FileText size={16} />
                केन्द्रीय संगठन विभाग
             </div> */}
             <h1 className="text-4xl md:text-6xl font-black text-gray-950 font-['Google_Sans'] leading-[0.9] italic tracking-tighter">
               सदस्यता <span className="text-red-900">आवेदन</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-500 font-['Google_Sans'] italic max-w-3xl border-l-2 border-red-900/20 pl-8 font-medium">
                वैज्ञानिक समाजवादी कम्युनिस्ट पार्टीको क्रान्तिकारी अभियानमा जोडिनुहोस्। फारम भर्नुहोस् र नयाँ युगको निर्माणमा सहभागी हुनुहोस्।
             </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* LEFT COLUMN: Main Form Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-20"
          >
            
            {/* FORM VIEWER SECTION */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-950 font-['Google_Sans'] italic flex items-center gap-4">
                    <FileText className="text-red-900" size={32}/> आवेदन फारम
                  </h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">विस्तृत विवरणका साथ फारम भर्नुहोस्</p>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                   <button 
                     onClick={handlePrint} 
                     className="flex-1 md:flex-none flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-100 rounded-sm font-black text-[10px] uppercase tracking-widest text-gray-600 hover:border-red-900 hover:text-red-900 transition-all gap-3"
                   >
                      <Printer size={16} /> प्रिन्ट गर्नुहोस्
                   </button>
                   <a
                     href={formImageUrl}
                     download="membership-form.png"
                     className="flex-1 md:flex-none flex items-center justify-center px-8 py-4 bg-red-900 text-white rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-red-950 transition-all shadow-xl gap-3"
                   >
                     <Download size={16} /> डाउनलोड
                   </a>
                </div>
              </div>
              
              <div className="p-8 md:p-16 bg-gray-50 flex justify-center shadow-inner rounded-sm border border-gray-100 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                 <div className="bg-white p-4 shadow-2xl max-w-2xl w-full border border-gray-100 transition-transform duration-700 group-hover:scale-[1.02]">
                    <img
                      src={formImageUrl}
                      alt="Membership Form Preview"
                      className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                 </div>
              </div>
              
              <div className="text-center">
                 <p className="text-[10px] font-black uppercase tracking-normal text-gray-400 italic">
                   * फारम प्रिन्ट गरेर भौतिक रूपमा बुझाउनुपर्नेछ।
                 </p>
              </div>
            </motion.div>

            {/* IMPORTANT INFO */}
            {/* <motion.div variants={itemVariants} className="bg-gray-50/50 p-10 md:p-16 border-l-4 border-red-900 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-red-900">
                  <Info size={32} />
                  <h2 className="text-3xl md:text-5xl font-black text-gray-950 font-['Google_Sans'] italic">महत्वपूर्ण जानकारी</h2>
                </div>
                <div className="h-1 w-20 bg-red-900/20" />
              </div>

              <ul className="space-y-8">
                {[
                  "वैज्ञानिक समाजवादी कम्युनिस्ट पार्टीको सदस्यता प्राप्त गर्न भौतिक उपस्थिति अनिवार्य छ।",
                  "फारम प्रिन्ट गरेर भर्ने र पूर्व–सम्पर्क गरेर मात्र बुझाउने।",
                  "फारम बुझाउन आउँदा नागरिकताको प्रतिलिपि र फोटो अनिवार्य साथमा ल्याउनुहोला।"
                ].map((info, idx) => (
                  <li key={idx} className="flex items-start gap-6 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-900 group-hover:bg-red-900 group-hover:text-white transition-colors duration-500">
                      <CheckSquare size={14} />
                    </div>
                    <span className="text-xl md:text-2xl text-gray-700 font-['Google_Sans'] italic font-medium leading-relaxed group-hover:text-gray-950 transition-colors">
                      {info}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div> */}

          </motion.div>

          {/* RIGHT COLUMN: Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-24"
          >
            
            {/* Eligibility */}
            <div className="space-y-10">
               <div className="space-y-4">
                 <h3 className="text-2xl font-black text-gray-950 font-['Google_Sans'] italic border-b-2 border-red-900/10 pb-4 inline-block tracking-tight">
                   सदस्यताका लागि योग्यता
                 </h3>
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">न्यूनतम मापदण्डहरू</p>
               </div>

               <div className="space-y-4">
                 {[
                   "उमेर १६ वर्ष पूरा भएको।",
                   "पार्टी विधान पूर्ण रूपमा स्वीकार गर्ने।",
                   "कुनै पनि किसिमको फौजदारी अभियोग नलागेको।",
                   "संगठनात्मक अनुशासन र नियमित लेवि तिर्न मन्जुर।"
                 ].map((item, idx) => (
                   <div key={idx} className="group flex items-center gap-6 p-4 border border-gray-50 hover:border-red-100 hover:bg-red-50/30 transition-all">
                     <div className="w-2 h-2 bg-red-900 rotate-45 group-hover:scale-125 transition-transform" />
                     <span className="text-base font-bold text-gray-700 group-hover:text-red-950 transition-colors">{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-10 sticky top-32">
               <div className="space-y-4">
                 <h3 className="text-2xl font-black text-gray-950 font-['Google_Sans'] italic border-b-2 border-red-900/10 pb-4 inline-block tracking-tight w-full">
                   सम्पर्क विवरण
                 </h3>
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">कार्यालय सम्पर्क</p>
               </div>
               
               <div className="space-y-8">
                 {[
                   { icon: <MapPin size={20} />, label: "कार्यालय", value: "अनामनगर, काठमाडौं" },
                   { icon: <Phone size={20} />, label: "फोन", value: "+९७७-०१-४XXXXXX" },
                   { icon: <Clock size={20} />, label: "समय", value: "११:०० - ३:०० (शनिबार बन्द)" }
                 ].map((contact, idx) => (
                   <div key={idx} className="flex items-start gap-6 group">
                     <div className="mt-1 p-3 bg-red-50 text-red-900 border border-red-100 group-hover:bg-red-900 group-hover:text-white transition-colors duration-500 shadow-sm">
                       {contact.icon}
                     </div>
                     <div>
                       <span className="text-[10px] font-black uppercase tracking-normal text-gray-400 block mb-1">{contact.label}</span>
                       <span className="text-lg font-black text-gray-900 italic font-['Google_Sans'] group-hover:text-red-900 transition-colors">{contact.value}</span>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Map Embed Aesthetics */}
               <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden shadow-2xl rounded-sm ring-1 ring-gray-100 grayscale hover:grayscale-0 transition-all duration-700 group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5539527945624!2d85.3235694754593!3d27.699388876187122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a8451847%3A0x6c6e7680517926d0!2sAnamnagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1709623849123!5m2!1sen!2snp" 
                    width="100%" 
                    height="100%" 
                    className="border-0"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute inset-0 bg-red-900/10 pointer-events-none mix-blend-overlay"></div>
               </div>
            </div>

          </motion.div>

        </div>
      </div>

       {/* CALL TO ACTION
       <section className="bg-gray-950 py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
             <Star size={400} className="text-white rotate-12" />
          </div>
          
          <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center">
             <h2 className="text-4xl md:text-7xl font-black font-['Google_Sans'] italic text-white mb-10 leading-tight">
                परिवर्तनका लागि <br /> <span className="text-red-600">अघि बढ्नुहोस्</span>
             </h2>
             <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-['Google_Sans'] italic">
                तपाईंको विचार र ऊर्जाले नै वैज्ञानिक समाजवादको सपना साकार पार्नेछ।
             </p>
             
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="group relative bg-white text-gray-950 px-16 py-6 font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center gap-4 mx-auto overflow-hidden"
             >
               <span className="relative z-10 flex items-center gap-4">
                 अहिले नै सम्पर्क गर्नुहोस् <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-red-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </motion.button>
          </div>
       </section> */}
    </div>
  );
};

export default MembershipPage;
