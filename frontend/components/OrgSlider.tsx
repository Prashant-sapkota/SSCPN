import React from 'react';
import { partyNaras } from './NaraBar';

// Using a CSS animation for the infinite marquee
const OrgSlider: React.FC = () => {
  const naras = partyNaras;

  return (
    <div className="bg-red-800 overflow-hidden py-4" aria-label="पार्टीका नाराहरू">
      <div className="relative flex overflow-x-hidden">
        <div className="py-0.5 animate-marquee whitespace-nowrap flex space-x-40">
          {[...naras, ...naras].map((nara, index) => (
            <span key={index} className="text-yellow-400 font-serif font-bold text-sm md:text-base tracking-normal mx-4 flex items-center">
              {nara.replace(/^[०-९0-9]+\.\s*/, '')}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 250s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default OrgSlider;