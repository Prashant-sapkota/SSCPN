
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, Newspaper } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

interface PressRelease {
  id: number;
  documentId: string;
  title: string;
  category: string;
  date: string;
  image: Array<{ url: string }>;
  summary: string;
}

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const devanagariDigits: Record<string, string> = {
  '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
  '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
};

const toDevanagari = (val: string | number) =>
  String(val).replace(/[0-9]/g, d => devanagariDigits[d] ?? d);

const NEPALI_MONTHS: Record<number, string> = {
  1: 'जनवरी', 2: 'फेब्रुअरी', 3: 'मार्च', 4: 'अप्रिल',
  5: 'मे', 6: 'जुन', 7: 'जुलाई', 8: 'अगस्ट',
  9: 'सेप्टेम्बर', 10: 'अक्टोबर', 11: 'नोभेम्बर', 12: 'डिसेम्बर',
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const day = toDevanagari(String(d.getDate()).padStart(2, '0'));
  const month = NEPALI_MONTHS[d.getMonth() + 1] ?? '';
  const year = toDevanagari(d.getFullYear());
  return `${day} ${month}, ${year}`;
};

const getImageUrl = (images: Array<{ url: string }> | null) => {
  if (!images || images.length === 0)
    return 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800';
  const url = images[0].url;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const PressSection: React.FC = () => {
  const [items, setItems] = useState<PressRelease[]>([]);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/press-releases?populate=*&sort=date:desc&pagination[limit]=7`)
      .then(res => res.json())
      .then(data => setItems(data.data ?? []))
      .catch(() => setItems([]));
  }, []);

  const newsItems = items.slice(0, 3);
  const listItems = items.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="py-20 lg:py-28 bg-white border-t border-gray-50" id="press-releases">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

          {/* LEFT */}
          <div className="lg:col-span-8 xl:col-span-9">
            <SectionHeader title="हाम्रो धारणा" actionText="सबै हेर्नुहोस्" actionLink="/bichar" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group flex flex-col h-full bg-white border border-gray-100 hover:border-red-100/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

                    <div className="absolute top-4 left-4 bg-white text-red-900 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center text-[10px] text-gray-400 mb-4 font-black uppercase">
                      <Clock size={12} className="mr-2 text-red-800" />
                      {formatDate(item.date)}
                    </div>

                    <h3 className="text-lg font-bold text-gray-950 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6">
                      {item.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t">
                      <Link to={`/press/${item.documentId}`} className="text-red-800 text-[15px] font-black flex items-center">
                        पूरा पढ्नुहोस्
                        <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SectionHeader title="प्रेस विज्ञप्ति" actionText="अभिलेख" actionLink="/bichar" />

            <div className="space-y-6">
              {listItems.slice(0, 3).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-white border p-5 group hover:shadow-lg"
                >
                  <Newspaper size={40} className="absolute -bottom-4 -right-4 text-gray-50" />

                  <div className="flex items-center mb-3">
                    <Tag size={12} className="text-red-800 mr-2" />
                    <span className="text-[10px] text-red-900 font-black uppercase">
                      विज्ञप्ति
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>

                  <span className="text-[15px] text-gray-400 flex items-center mb-4">
                    <Clock size={12} className="mr-2 text-red-800" />
                    {formatDate(item.date)}
                  </span>

                  <Link to={`/press/${item.documentId}`} className="text-red-800 text-[15px] font-black flex items-center hover:underline">
                    पूरा पढ्नुहोस्
                    <ArrowRight size={13} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link to='/bichar'>
                <button className="group w-full text-red-900 font-black text-[15px] flex items-center justify-center px-6 py-4 border  hover:bg-red-800 hover:text-white transition">
                  थप विज्ञप्तिहरू
                  <ArrowRight size={18} className="ml-3" />
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PressSection;
