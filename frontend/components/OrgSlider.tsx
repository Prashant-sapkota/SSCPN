// import React from 'react';
// import { partyNaras } from './NaraBar';

// // Using a CSS animation for the infinite marquee
// const OrgSlider: React.FC = () => {
//   const naras = partyNaras;

//   return (
//     <div className="bg-red-800 overflow-hidden py-4" aria-label="पार्टीका नाराहरू">
//       <div className="relative flex overflow-x-hidden">
//         <div className="py-0.5 animate-marquee whitespace-nowrap flex space-x-40">
//           {[...naras, ...naras].map((nara, index) => (
//             <span key={index} className="text-yellow-400 font-serif font-bold text-sm md:text-base tracking-normal mx-4 flex items-center">
//               {nara.replace(/^[०-९0-9]+\.\s*/, '')}
//             </span>
//           ))}
//         </div>
//       </div>
//       <style>{`
//         .animate-marquee {
//           animation: marquee 250s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OrgSlider;



import React from 'react';
import { motion } from 'motion/react';
// import { Sparkles } from 'lucide-react';
// import hahaa from '../assets/images/hahaa.png';
const partyNaras = [
  "वैज्ञानिक समाजवाद जिन्दाबाद!",
  "सामुदायिक सार्वभौमिकता जिन्दाबाद!",
  "मजदुर-किसान ऐक्यबद्धता जिन्दाबाद!",
  "जात व्यवस्था अन्त्य गरौं!",
  "पितृसत्तात्मक संरचनाको अन्त्य गरौं!",
  "सामुदायिक अर्थतन्त्र निर्माण गरौं!",
  "पूर्ण समानुपातिक प्रतिनिधित्व सुनिश्चित गरौं!",
  "प्रतिरोध आन्दोलन जिन्दाबाद!"
];

const OrgSlider: React.FC = () => {
  // Create a triple length array to ensure seamless looping
  const displayNaras = [...partyNaras, ...partyNaras, ...partyNaras];

  return (
    <div className="bg-red-950/95 font-['Google_Sans'] py-6 border-y border-red-900/50 shadow-2xl overflow-hidden relative" aria-label="पार्टीका नाराहरू">
      {/* Edge Fades for professional look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-red-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-red-950 to-transparent z-10 pointer-events-none" />

      <div className="relative flex whitespace-nowrap items-center">
        <motion.div 
          className="flex items-center gap-20 pr-20"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {displayNaras.map((nara, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="text-white font-['Google_Sans'] font-black text-sm md:text-base tracking-[0.05em] uppercase italic opacity-90">
                {nara}
              </span>
              {/* <Sparkles size={12} className="text-yellow-500 opacity-60" /> */}
              <img src="https://i.imghippo.com/files/NmZa4274WM.png" alt="Haisa Hatauda" className="w-6 h-6" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OrgSlider;
