import React, { useState, useEffect } from 'react';
import { Network, ChevronRight, Calendar, MapPin } from 'lucide-react';

const STRAPI_BASE = 'http://localhost:1337';

interface StrapiImage {
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
  };
}

interface SangathanatmakItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: StrapiImage[];
}

function getImageUrl(image: StrapiImage[] | undefined): string {
  if (!image || image.length === 0) return '';
  const img = image[0];
  const path = img.formats?.large?.url ?? img.formats?.medium?.url ?? img.url;
  return `${STRAPI_BASE}${path}`;
}

function formatDate(isoDate: string): string {
  if (!isoDate) return '';
  const d = new Date(isoDate);
  return d.toLocaleDateString('ne-NP', { year: 'numeric', month: 'long', day: 'numeric' });
}

const SangathanatmakPage: React.FC = () => {
  const [items, setItems] = useState<SangathanatmakItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${STRAPI_BASE}/api/sangathanatmaks?populate=*&sort=createdAt:desc`)
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((json) => {
        setItems(json.data ?? []);
      })
      .catch(() => setError('डाटा लोड गर्न सकिएन।'))
      .finally(() => setLoading(false));
  }, []);

  const featuredUpdate = items[0] ?? null;
  const updates = items.slice(1);

  return (
    <div className="bg-white min-h-screen pt-20 pb-10">

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 font-['Google_Sans'] leading-tight mb-4">
               संगठनात्मक <span className="text-red-900">गतिविधि</span>
             </h1>
             <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
               पार्टी निर्माण, सदस्यता विस्तार र कमिटी प्रणाली सुदृढीकरण सम्बन्धी गतिविधिहरू।
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-10">

        {loading && (
          <div className="text-center py-24 text-gray-400 text-lg">लोड हुँदैछ...</div>
        )}

        {error && (
          <div className="text-center py-24 text-red-600 text-lg">{error}</div>
        )}

        {!loading && !error && featuredUpdate && (
          <>
            {/* FEATURED SECTION */}
            <div className="bg-white mb-12 group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-xl">
               <div className="relative h-[360px] md:h-[420px] overflow-hidden">
                  <img
                    src={getImageUrl(featuredUpdate.image)}
                    alt={featuredUpdate.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                     <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-red-100">
                        <span className="rounded-full bg-red-900/90 px-3 py-1">मुख्य समाचार</span>
                        <span className="flex items-center gap-1"><Calendar size={14} />{formatDate(featuredUpdate.date)}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} />{featuredUpdate.location}</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-semibold font-['Google_Sans'] leading-tight mb-3">
                       {featuredUpdate.title}
                     </h2>
                     <p className="text-gray-200 text-base max-w-3xl line-clamp-2">
                       {featuredUpdate.description}
                     </p>
                  </div>
               </div>
            </div>

            {/* UPDATES GRID */}
            {updates.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {updates.map((update) => (
                  <div key={update.id} className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition duration-500 hover:border-red-800 hover:shadow-xl">
                    <div className="h-44 overflow-hidden relative">
                       <img src={getImageUrl(update.image)} alt={update.title} className="w-full h-full object-cover transition duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105" />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                       <div className="flex items-center text-[11px] text-gray-400 mb-3 space-x-3">
                          <span className="flex items-center gap-1"><Calendar size={12} className="text-red-700"/> {formatDate(update.date)}</span>
                       </div>

                       <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug transition-colors duration-300 group-hover:text-red-800">
                         {update.title}
                       </h3>

                       <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1 transition-colors duration-300 group-hover:text-gray-700">
                         {update.description}
                       </p>

                       <div className="mt-auto pt-4 border-t border-gray-100">
                          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 flex items-center gap-1 transition-colors duration-300 group-hover:text-red-700">
                            पूरा पढ्नुहोस् <ChevronRight size={14} className="ml-1" />
                          </span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="text-center py-24 text-gray-400 text-lg">कुनै गतिविधि फेला परेन।</div>
        )}

      </div>
    </div>
  );
};

export default SangathanatmakPage;
