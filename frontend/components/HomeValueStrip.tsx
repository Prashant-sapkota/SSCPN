import React from 'react';
import { ShieldCheck, Target, HandCoins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'के प्रस्ताव छ?',
    text: 'स्पष्ट कार्यक्रम र कार्यदिशा।',
    icon: <Target size={18} />
  },
  {
    title: 'विश्वास किन गर्ने?',
    text: 'दस्तावेज र पारदर्शी प्रतिबद्धता।',
    icon: <ShieldCheck size={18} />
  },
  {
    title: 'कसरी सहभागी हुने?',
    text: 'सदस्यता, कार्यक्रम र प्रशिक्षण पहुँच।',
    icon: <HandCoins size={18} />
  }
];

const HomeValueStrip: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-12" aria-label="मुख्य जानकारी">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item) => (
            <article key={item.title} className="bg-white ring-1 ring-gray-200 p-5">
              <div className="text-red-800 mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-normal">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            to="/samajwadi-karyakram"
            className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-red-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            पूर्ण कार्यक्रम हेर्नुहोस् <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeValueStrip;
