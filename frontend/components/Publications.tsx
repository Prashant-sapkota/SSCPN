
import React, { useState, useEffect } from 'react';
import { Download, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

interface Publication {
  id: number;
  title: string;
  type: string;
  date: string;
  img: string;
  pdfUrl: string;
}

interface StrapiImageItem {
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
  };
}

function resolveImageUrl(raw: StrapiImageItem | undefined): string {
  if (!raw) return '';
  const relative =
    raw.formats?.large?.url ?? raw.formats?.medium?.url ?? raw.url ?? '';
  if (!relative) return '';
  return relative.startsWith('http') ? relative : `${STRAPI_URL}${relative}`;
}

function resolvePdfUrl(raw: any): string {
  if (!raw) return '';
  const item = Array.isArray(raw) ? raw[0] : raw;
  if (!item) return '';
  const relative = item.url ?? '';
  if (!relative) return '';
  return relative.startsWith('http') ? relative : `${STRAPI_URL}${relative}`;
}

function mapEntry(entry: any): Publication {
  const imageArray: StrapiImageItem[] | undefined =
    entry.Image ?? entry.img ?? entry.cover ?? entry.image;
  const imageItem = Array.isArray(imageArray) ? imageArray[0] : imageArray;

  const pdfRaw = entry.pdf ?? entry.file ?? entry.document ?? entry.PDF ?? entry.File;

  return {
    id: entry.id,
    title: entry.title ?? '',
    type: entry.type ?? '',
    date: entry.date ?? '',
    img: resolveImageUrl(imageItem),
    pdfUrl: resolvePdfUrl(pdfRaw),
  };
}

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/publications?populate=*`)
      .then((res) => res.json())
      .then((json) => {
        console.log('Publications API response:', json);
        const entries: any[] = json?.data ?? [];
        setPublications(entries.map(mapEntry));
      })
      .catch((err) => console.error('Failed to fetch publications:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="py-20 lg:py-28 bg-white" id="publications">
      <div className="max-w-screen-2xl font-['Google_Sans'] mx-auto px-4 sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="प्रशिक्षण सामग्री" 
          actionText="सबै हेर्नुहोस्"
          actionLink="#"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {publications.map((pub) => (
            <motion.div 
              key={pub.id} 
              variants={itemVariants}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden border border-gray-100 bg-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                {/* Book Cover Image */}
                <img 
                    src={pub.img} 
                    alt={pub.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                />
                
                {/* Minimal Label */}
                <div className="absolute top-0 right-0 bg-red-800 text-white text-[9px] font-black px-4 py-2 uppercase tracking-[0.2em] shadow-lg">
                   {pub.type}
                </div>

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-red-950/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                    <motion.a
                      href={pub.pdfUrl || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-7 py-3 font-black text-[10px] uppercase tracking-widest flex items-center hover:bg-gray-50 transition-colors shadow-2xl"
                    >
                        <BookOpen size={25} className="mr-3 text-red-800"/> पढ्नुहोस्
                    </motion.a>
                    <motion.a
                      href={pub.pdfUrl || undefined}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white/30 text-white px-7 py-3 font-black text-[10px] uppercase tracking-widest flex items-center hover:bg-white hover:text-red-900 transition-all"
                    >
                        <Download size={25} className="mr-3"/> पि.डी.एफ
                    </motion.a>
                </div>
              </div>

              {/* Publication Details */}
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-xl text-gray-950 mb-3 leading-[1.3] group-hover:text-red-900 transition-colors tracking-tight font-['Google_Sans'] italic">
                  {pub.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-black uppercase tracking-[0.15em]">
                  <Clock size={12} className="text-red-800" />
                  {pub.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
