
import React, { useState, useEffect } from 'react';
import { PenTool, Calendar, User, ArrowRight, Share2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const STRAPI_BASE = 'http://localhost:1337';

interface Publication {
  id: number;
  documentId: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: { url: string }[];
}

const PAGE_SIZE = 4;

const BicharPage: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    fetch(`${STRAPI_BASE}/api/press-releases?populate=*&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((json) => {
        setPublications(json.data ?? []);
        setHasMore((json.meta?.pagination?.page ?? 1) < (json.meta?.pagination?.pageCount ?? 1));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setLoadingMore(true);
    fetch(`${STRAPI_BASE}/api/press-releases?populate=*&sort[0]=createdAt:desc&pagination[page]=${nextPage}&pagination[pageSize]=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((json) => {
        setPublications((prev) => [...prev, ...(json.data ?? [])]);
        setHasMore(nextPage < (json.meta?.pagination?.pageCount ?? 1));
        setPage(nextPage);
        setLoadingMore(false);
      })
      .catch(() => setLoadingMore(false));
  };

  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden font-['Google_Sans']">

      {/* 1. MASTHEAD */}
      <div className="bg-white  border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 py-5 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
             <h1 className="text-5xl md:text-6xl font-black text-gray-950 leading-[0.9] italic tracking-tighter">
               विचार र <span className="text-red-900">विश्लेषण</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-500 italic max-w-3xl border-l-2 border-red-900/20 pl-8 font-medium">
               समसामयिक राजनीतिक, आर्थिक र सामाजिक मुद्दाहरूमा पार्टीको आधिकारिक दृष्टिकोण र नेताहरूको वैचारिक लेखहरू।
             </p>
          </motion.div>
        </div>
      </div>

      {/* 2. ARTICLES GRID */}
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-2 lg:px-3 py-6 lg:py-8">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-8 h-8 border-2 border-red-900 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
            {publications.map((pub) => {
              const imageUrl = pub.image?.[0]?.url
                ? `${STRAPI_BASE}${pub.image[0].url}`
                : '';
              const formattedDate = pub.date
                ? new Date(pub.date).toLocaleDateString('ne-NP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : '';

              return (
                <motion.div
                  key={pub.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8 }}
                  className="group flex flex-col items-start"
                >
                   {/* Image Container */}
                   <div className="relative w-full aspect-video overflow-hidden mb-10 shadow-2xl rounded-sm">
                     {imageUrl && (
                       <img
                         src={imageUrl}
                         alt={pub.title}
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                       />
                     )}
                     <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-700"></div>

                     {/* Author Badge over image */}
                     <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border border-gray-100 shadow-xl">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-900 font-black">
                           <User size={14} />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">
                           {pub.category}
                         </span>
                       </div>
                     </div>
                   </div>

                   {/* Content */}
                   <div className="w-full space-y-3">
                     <div className="flex items-center text-[10px] font-black uppercase tracking-normal text-gray-400 gap-6">
                        <span className="flex items-center gap-2">
                           <Calendar size={12} className="text-red-900" /> {formattedDate}
                        </span>
                        <span className="flex items-center gap-2">
                           <MessageSquare size={12} /> ८ टिप्पणी
                        </span>
                     </div>

                     <h3 className="text-2xl md:text-4xl font-black text-gray-950 italic group-hover:text-red-900 transition-colors leading-[1.1] tracking-tight truncate-multiline">
                       {pub.title}
                     </h3>

                     <p className="text-gray-500 text-lg leading-relaxed italic line-clamp-3">
                       {pub.summary}
                     </p>

                     <div className="pt-6 flex items-center justify-between w-full border-t border-gray-100">
                       <Link to={`/press/${pub.documentId}`}>
                         <motion.span
                           whileHover={{ x: 10 }}
                           className="text-red-900 font-black text-[11px] uppercase tracking-normal flex items-center gap-4 group/btn"
                         >
                           पूरा लेख पढ्नुहोस्
                           <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                         </motion.span>
                       </Link>

                       <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="text-gray-400 hover:text-red-900 transition-colors">
                           <Share2 size={16} />
                         </button>
                       </div>
                     </div>
                   </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* 3. LOAD MORE */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="relative group px-16 py-6 overflow-hidden bg-gray-950 text-white font-black text-[11px] uppercase tracking-normal rounded-sm transition-all shadow-2xl hover:shadow-red-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {loadingMore ? 'लोड हुँदैछ...' : 'थप लेखहरू हेर्नुहोस्'}
              </span>
              <div className="absolute inset-0 bg-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </motion.div>
        )}
      </div>

      {/* 4. NEWSLETTER CTA */}
      {/* <section className="bg-red-50/50 py-24 border-y border-red-100">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black italic text-gray-950 mb-6">
            वैचारिक अपडेटका लागि <span className="text-red-900">सब्सक्राइब गर्नुहोस्</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 font-medium italic text-lg">
            हाम्रा नयाँ विश्लेषण र वैचारिक लेखहरू सिधै तपाईंको इमेलमा प्राप्त गर्नुहोस्।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="तपाईंको इमेल"
              className="flex-1 px-6 py-4 bg-white border border-gray-100 rounded-sm font-bold text-sm focus:outline-none focus:border-red-900 transition-colors shadow-lg"
            />
            <button className="bg-red-900 text-white px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-red-950 transition-all shadow-xl">
              पठाउनुहोस्
            </button>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default BicharPage;
