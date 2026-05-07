import React from 'react';
import { VenetianMask , Users, Atom, ArrowRight, Star, Shield, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import mahobadImage from '../assets/images/mahobad.png';
import lelinbadImage from '../assets/images/lelinbad.png';
import karlImage from '../assets/images/karl.png';
import atomImage from '../assets/images/atom.png';

const AboutPage: React.FC = () => {
  const toNepaliNumber = (num: number) =>
    num
      .toString()
      .replace(/\d/g, (digit) => '०१२३४५६७८९'[Number(digit)]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6 space-y-12 lg:space-y-16 pb-10">
        
        {/* 1. HERO / INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-video xl:aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1531266752426-aad472b7bdf4?auto=format&fit=crop&q=80&w=1200" 
                alt="Movement and People" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/10 to-transparent pointer-events-none"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 md:p-6 border border-gray-100 shadow-2xl">
                 <p className="text-[9px] md:text-[10px] font-black uppercase tracking-normal text-red-900 mb-1">नारा</p>
                 <p className="text-xl md:text-2xl font-['Google_Sans'] italic font-black text-gray-950">निरन्तर क्रान्ति</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-['Google_Sans'] text-gray-950 leading-[1.1] tracking-tighter italic">
              वैज्ञानिक समाजवादतर्फको <span className="text-red-900">अविचलित यात्रा</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-base md:text-xl text-gray-600 leading-relaxed font-medium">
              <p className="border-l-4 border-red-800 pl-6 md:pl-10">
                हामी <span className="text-red-900 font-black">वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल</span> हौं। हाम्रो स्थापनाको मूल उद्देश्य दलाल पुँजीवाद र सामन्ती अवशेषहरूको अन्त्य गरी नेपालमा वैज्ञानिक समाजवाद स्थापना गर्नु हो।
              </p>
              <p className="pl-6 md:pl-10 text-gray-500 italic">
                इतिहासका विफलताहरूबाट पाठ सिक्दै र २१औं शताब्दीको विज्ञान–प्रविधिलाई आत्मसात गर्दै हामी नयाँ युगको क्रान्तिमा होमिएका छौं।
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. STATS SECTION */}
        <section className=" bg-gray-50/50 border-y pt-10 border-gray-100 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { val: "७७", label: "जिल्ला कमिटी" },
              { val: "५०K+", label: "संगठित सदस्य" },
              { val: "५००+", label: "पूर्णकालीन कार्यकर्ता" },
              { val: "७", label: "जनवर्गीय संगठन" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl lg:text-7xl font-black text-gray-950 font-['Google_Sans'] mb-4 group-hover:text-red-900 transition-colors duration-500 italic">
                  {stat.val}
                </div>
                <div className="text-[10px] font-black uppercase tracking-normal text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. IDEOLOGIES */}
        <section className="bg-white pt-10 tracking-normal">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
             <div className="space-y-5">
               <SectionHeader title="हाम्रो वैचारिक आधार" />
               
               <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                 {[
                   { icon: <img src={karlImage} alt="मार्क्सवाद" className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm filter grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />, label: 'मार्क्सवाद', desc: 'वैज्ञानिक विश्वदृष्टिकोण' },
                   { icon: <img src={lelinbadImage} alt="लेनिनवाद" className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm filter grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />, label: 'लेनिनवाद', desc: 'संगठन र सत्ता' },
                   { icon: <img src={mahobadImage} alt="माओवाद" className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm filter grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />, label: 'माओवाद', desc: 'निरन्तर क्रान्ति' },
                   { icon: <img src={atomImage} alt="वैज्ञानिक समाजवाद" className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-sm filter grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />, label: 'वैज्ञानिक समाजवाद', desc: 'भविष्यको मार्ग' }
                 ].map((item) => (
                   <motion.div 
                      key={item.label} 
                      variants={itemVariants}
                      className="group p-8 bg-white border border-gray-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                     <div className="flex items-start gap-4 mb-6">
                       <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-slate-900 shadow-sm transition-colors duration-500 group-hover:bg-white group-hover:border-slate-300 group-hover:text-red-900">
                         {item.icon}
                       </div>
                       <div className="min-w-0">
                         <h3 className="text-2xl font-black font-['Google_Sans'] text-gray-950 group-hover:text-red-900 transition-colors italic leading-none">{item.label}</h3>
                         <p className="text-[10px] font-black uppercase tracking-normal text-gray-400 leading-none mt-2">{item.desc}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
             </div>

             <div className="relative h-[200px] md:h-[500px] md:h-auto overflow-hidden shadow-2xl group border border-gray-50 rounded-sm">
               <img
                 src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1200"
                 alt="Ideology and Vision"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute bottom-12 left-12 right-12 text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                  <p className="text-4xl font-['Google_Sans'] font-black italic leading-tight">विचारको शक्तिले नै युग परिवर्तन गर्छ।</p>
               </div>
             </div>
           </div>
        </section>

        {/* 4. PARTY OBJECTIVES */}
        <section className="bg-white">
          <SectionHeader title="पार्टीको उद्देश्य" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-0"
          >
            {[
              'भूमण्डलीकृत पुँजीवाद र त्यसबाट पालित-पोषित दलाल पुँजीवादी संसदीय व्यवस्थाका विरुद्ध सङ्घर्ष गर्दै सर्वहारा-श्रमिक र विस्थापित वर्गको सत्ता निर्माण गर्दै वैज्ञानिक समाजवादी क्रान्ति सम्पन्न गर्ने।',
              'सबै खालका शोषण, विभेद, दमन र उत्पीडनको अन्त्य गर्दै शोषणरहित वर्गविहीन समाज निर्माण गर्ने।',
              'वैज्ञानिक समाजवादीहरुको वैज्ञानिक समाजवादी अन्तर्राष्ट्रिय (Scientific Socialist International - SSI) निर्माणको निम्ति पहल गर्ने।',
              'दलाल पुँजीवादी संसदीय परजीवी व्यवस्थाको विरुद्ध आत्मनिर्भर उत्पादन प्रणाली निर्माण गर्दै स्वाधीन र आत्मनिर्भर देश बनाउने।',
              'पार्टी जीवनको प्रारम्भदेखि नै पितृसत्ताको अन्त्य र महिला मुक्तिको सवाल अनि जात व्यवस्थाको अन्त्य र दलित समुदायको मुक्तिको सवाललाई वर्गीय शोषण-उत्पीडनसरहकै घनत्वको ठानी समतामूलक समाज निर्माणमा दृढ सङ्कल्पित भएर क्रियाशील हुने।',
              'आजको युगको प्रमुख उत्पादक शक्ति विज्ञान-प्रविधिका आधारमा वैज्ञानिक समाजवादी सामाजिक व्यवस्थाको राजनीतिक, आर्थिक, सामाजिक र सांस्कृतिक प्रणाली निर्माण तथा विकास गर्ने।',
              'निजी स्वामित्वको अन्त्य गर्न राष्ट्रियकरण नगरी सम्पूर्ण रूपमा सामुदायिकीकरण गर्ने। समुदायलाई उत्पादक र समुदायलाई नै उपभोक्ता बनाउने अभियान तीव्र पार्ने।',
              'सबै जाति वा उत्पीडित राष्ट्रहरुको आत्मनिर्णयको अधिकारसहित बहुराष्ट्रिय राज्य बनाउने।',
              'नेपाली समाजको आमूल परिवर्तनका लागि सञ्चालित समग्र परिवर्तनको आन्दोलन, १० वर्षे जनयुद्ध, जनसङ्घर्षहरु र जनआन्दोलनका सहिदको गहिरो स्मरण गर्दै क्रान्तिको हर मोर्चामा पूर्ण रूपमा वैज्ञानिक समाजवाद स्थापना नहुन्जेल सङ्घर्ष गर्न दृढसङ्कल्प रहने।',
              'पुँजीवादले ध्वस्त पारेको पर्यावरणको रक्षाका निम्ति सम्पूर्ण प्रयत्न गर्ने।',
              'भूमण्डलीकृत पुँजीवाद, नवउपनिवेशवाद, राष्ट्रिय आत्मसमर्पणवाद र राष्ट्रघाती शक्तिका विरुद्ध राष्ट्रिय स्वाधीनताको रक्षाका लागि आवश्यक पर्दा राष्ट्रिय प्रतिरोध युद्धको विकास गर्ने।'
            ].map((objective, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group py-3 md:py-4 border-b border-gray-100 flex flex-col md:flex-row gap-6 lg:gap-5 items-start hover:bg-gray-50/50 px-4 transition-colors"
              >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white border border-gray-100 group-hover:border-red-900 transition-colors duration-500 shadow-sm relative">
                    <span className="text-3xl font-black font-['Google_Sans'] italic text-red-900 leading-none">{toNepaliNumber(index + 1)}</span>
                    <div className="absolute inset-0 bg-red-900 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-sm"></div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                     <p className="text-gray-800 text-xl lg:text-2xl font-['Google_Sans'] italic group-hover:text-red-950 transition-colors leading-relaxed">
                       {objective}
                     </p>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>

      {/* 5. CTA SECTION */}
      <section className="relative py-10 md:py-16 bg-red-950 text-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center">
          {/* <div className="inline-flex items-center  bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-normal mb-12">
            तपाईंको आवश्यकता
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-black font-['Google_Sans'] mb-10 leading-[0.9] tracking-tighter italic">
            इतिहास रच्ने अभियानमा <br className="hidden md:block" /> <span className="text-red-500">सहभागी हुनुहोस्</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-red-100 mb-16 max-w-4xl mx-auto font-medium leading-relaxed opacity-80 italic">
            समाजवाद केवल एक विचार होइन, यो एक आन्दोलन हो। तपाईंको ऊर्जा, विचार र समर्पणले नै नयाँ नेपाल निर्माण गर्न सक्छ।
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="group relative border border-red-600 text-red-700 bg-white px-12 py-6 font-black uppercase tracking-normal text-[11px] shadow-2xl flex items-center overflow-hidden rounded-full transition-all duration-300 hover:bg-red-50 hover:-translate-y-0.5"
             >
               <span className="relative z-10 flex items-center gap-4">
                 सदस्यता लिनुहोस् <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
               </span>
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </motion.button>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="group relative border-4 border-black  text-white bg-red-950 px-16 py-7 font-black uppercase tracking-normal text-[11px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] flex items-center rounded-full transition-all duration-300 hover:bg-white hover:text-red-700"
             >
               <span className="relative z-10 flex items-center gap-4">
                 सम्पर्क गर्नुहोस् <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
               </span>
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </motion.button>
          </div>
        </div>

        {/* Floating Icons for texture */}
        <div className="absolute top-10 right-20 opacity-5 rotate-12">
          <Shield size={200} />
        </div>
        <div className="absolute bottom-10 left-20 opacity-5 -rotate-12">
          <Landmark size={200} />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
