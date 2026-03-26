import React from 'react';
import { Star } from 'lucide-react';
import { partyNaras } from './NaraBar';

const toNepaliNumber = (num: number) =>
  num
    .toString()
    .replace(/\d/g, (digit) => '०१२३४५६७८९'[Number(digit)]);

const NaraPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-6 bg-red-50 px-4 py-2 rounded-full">
              <Star size={18} className="mr-2 fill-current" />
              <span>राजनीतिक आह्वान</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-serif leading-tight mb-6">पार्टीका नाराहरू</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-serif leading-relaxed">
              वैज्ञानिक समाजवादी रूपान्तरणका लागि जनचेतना, सङ्घर्ष र निर्माणको दिशामा केन्द्रित प्रमुख नाराहरू।
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto border-t border-b border-gray-200">
          {partyNaras.map((nara, index) => {
            const textWithoutNumber = nara.replace(/^\s*[०१२३४५६७८९]+\.\s*/, '');

            return (
              <article key={index} className="py-7 md:py-9 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start gap-5 md:gap-8">
                  <div className="flex-shrink-0 text-4xl md:text-6xl font-bold font-serif text-red-800 leading-none min-w-[2.5rem] md:min-w-[3.5rem]">
                    {toNepaliNumber(index + 1)}
                  </div>
                  <p className="text-gray-800 text-lg md:text-2xl leading-relaxed font-serif">{textWithoutNumber}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NaraPage;
