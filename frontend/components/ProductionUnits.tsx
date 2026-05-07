
import React, { useEffect, useState } from 'react';
import { ArrowRight, Factory, Sprout, BookOpen, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const iconMap: Record<string, React.ReactElement> = {
  'कृषि': <Sprout size={18} />,
  'उद्योग': <Factory size={18} />,
  'प्रकाशन': <BookOpen size={18} />,
  'स्वास्थ्य': <HeartPulse size={18} />,
};

interface Unit {
  id: number;
  name: string;
  type: string;
  icon: React.ReactElement;
  description: string;
  image: string;
  status: string;
  statusColor: string;
}

interface StrapiImageItem {
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
  };
}

interface StrapiUnit {
  id: number;
  name: string;
  type: string;
  Description: string;
  stat: string;
  Image?: StrapiImageItem[];
}

function mapStrapiUnit(item: StrapiUnit): Unit {
  const raw = item.Image?.[0];
  const relativeUrl =
    raw?.formats?.large?.url ?? raw?.formats?.medium?.url ?? raw?.url ?? '';
  const imageUrl = relativeUrl
    ? relativeUrl.startsWith('http')
      ? relativeUrl
      : `${STRAPI_URL}${relativeUrl}`
    : '';

  return {
    id: item.id,
    name: item.name,
    type: item.type,
    icon: iconMap[item.type] ?? <Factory size={18} />,
    description: item.Description,
    image: imageUrl,
    status: item.stat,
    statusColor: 'bg-red-50 text-red-900 border-red-100',
  };
}

const ProductionUnits: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/production-units?populate=*`)
      .then((res) => res.json())
      .then((json) => {
        const mapped = (json.data as StrapiUnit[]).map(mapStrapiUnit);
        setUnits(mapped);
      })
      .catch(console.error);
  }, []);

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
    <section className="py-24 lg:py-32 bg-white" id="production">
      <div className="max-w-screen-2xl mx-auto px-4 font-['Google_Sans'] sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="उत्पादन इकाईहरू" 
          actionText="सबै परियोजनाहरू"
          actionLink="#"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-8"
        >
          {units.map((unit) => (
            <motion.div 
              key={unit.id} 
              variants={itemVariants}
              className="group relative flex flex-col h-[400px]"
            >
              
              {/* Image Area - The "Mother Card" */}
              <div className="relative w-[90%] h-[280px] overflow-hidden rounded-sm shadow-sm transition-all duration-500 group-hover:shadow-xl grayscale group-hover:grayscale-0">
                <img 
                  src={unit.image} 
                  alt={unit.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Type Tag */}
                <div className="absolute top-0 left-0 bg-red-900 text-white text-[9px] font-black px-4 py-2 shadow-2xl uppercase tracking-[0.2em] flex items-center gap-2 z-10">
                  {unit.icon}
                  {unit.type}
                </div>
              </div>

              {/* Floating Content Card - Bottom Right Positioned */}
              <div className="absolute bottom-0 right-0 w-[92%] bg-white p-6 shadow-2xl border border-gray-100 flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:border-red-100 z-20">
                <div className="mb-4">
                  <h3 className="text-xl font-black text-gray-950 leading-tight group-hover:text-red-900 transition-colors font-['Google_Sans'] italic">
                    {unit.name}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                  {unit.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className={`text-[9px] font-black px-3 py-1.5 border uppercase tracking-widest rounded-full shadow-sm ${unit.statusColor}`}>
                    {unit.status}
                  </span>
                  
                  <button className="relative flex items-center justify-center h-10 w-10 text-red-900 transition-all duration-300 hover:bg-red-900 hover:text-white rounded-full bg-red-50">
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionUnits;
