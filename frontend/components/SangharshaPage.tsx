import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, CheckCircle2, AlertCircle, ArrowRight, ShieldAlert, ChevronDown, History } from 'lucide-react';

const STRAPI_URL = 'http://localhost:1337';

interface Campaign {
  id: number;
  title: string;
  type: string;
  date: string;
  location: string;
  image: string;
  description: string;
  demands: string[];
}

const parseDemands = (raw: string): string[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(`[${raw}]`);
    if (Array.isArray(parsed)) return parsed.filter((d): d is string => typeof d === 'string' && d.trim() !== '');
  } catch {}
  if (raw.includes('", "')) {
    return raw.split('", "').map(d => d.replace(/^"|"$/g, '').trim()).filter(Boolean);
  }
  return [raw.trim()].filter(Boolean);
};

const SangharshaPage: React.FC = () => {
  const [allCampaigns, setAllCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [visiblePastCount, setVisiblePastCount] = useState(4);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/sangharshas?populate=*`)
      .then(res => res.json())
      .then(json => {
        const campaigns: Campaign[] = (json.data ?? []).map((item: any) => ({
          id: item.id,
          title: item.title,
          type: item.type,
          date: item.date,
          location: item.location,
          description: item.description,
          demands: parseDemands(item.demands ?? ''),
          image: item.image?.[0]?.url ? `${STRAPI_URL}${item.image[0].url}` : '',
        }));
        setAllCampaigns(campaigns);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Separation Logic
  const mainHero = allCampaigns.find(c => c.type === 'ongoing');
  const activeCampaigns = allCampaigns.filter(c => (c.type === 'ongoing' || c.type === 'scheduled') && c.id !== mainHero?.id);
  const pastCampaigns = allCampaigns.filter(c => c.type === 'completed');

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const loadMorePast = () => {
    setVisiblePastCount(prev => prev + 4);
  };

  const getStatusBadge = (type: string) => {
    switch (type) {
      case 'ongoing':
        return <span className="bg-red-700 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider animate-pulse">जारी</span>;
      case 'scheduled':
        return <span className="bg-neutral-800 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">तय भएको</span>;
      case 'completed':
        return <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">सम्पन्न</span>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen font-['Google_Sans'] pt-20 flex items-center justify-center">
        <div className="animate-pulse text-gray-400 text-lg">लोड हुँदैछ...</div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-['Google_Sans'] pt-20">
      
      {/* Page Header - Centered & Clean (Same theme as NewsPage) */}
      <div className="bg-white font-['Google_Sans']">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             {/* <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <ShieldAlert size={18} className="mr-2" />
                <span>वर्ग संघर्षको मोर्चा</span>
             </div> */}
             <h1 className="text-2xl md:text-6xl font-bold text-gray-900 font-['Google_Sans'] leading-tight mb-6">
               संघर्ष सम्बन्धि <span className='text-red-900'>गतिविधि</span>
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 lg:px-6 2xl:px-8">
        
        {/* HERO: Main Ongoing Struggle (Preserved) */}
        {mainHero && (
          <div className="mb-16">
              <div className="flex items-center mb-6">
                  <span className="w-3 h-3 bg-red-600 rounded-full animate-ping mr-2"></span>
                  <h2 className="text-2xl font-bold text-red-800 uppercase tracking-widest">मुख्य जारी आन्दोलन</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                  {/* Image Side */}
                  <div className="relative h-96 lg:h-auto">
                      <img 
                          src={mainHero.image} 
                          alt={mainHero.title} 
                          className="w-full h-full object-cover grayscale md:grayscale-0 hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                          {getStatusBadge(mainHero.type)}
                      </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <div className="flex items-center text-gray-500 mb-4 space-x-4 text-sm font-medium">
                          <span className="flex items-center"><Calendar size={16} className="mr-2 text-red-600"/> {mainHero.date}</span>
                          <span className="flex items-center"><MapPin size={16} className="mr-2 text-red-600"/> {mainHero.location}</span>
                      </div>
                      
                      <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight font-['Google_Sans']">
                          {mainHero.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {mainHero.description}
                      </p>

                      <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-red-800 mb-8">
                          <h4 className="font-bold text-red-900 mb-3 uppercase text-sm tracking-wider flex items-center">
                              <AlertCircle size={16} className="mr-2"/> हाम्रा प्रमुख मागहरू
                          </h4>
                          <ul className="space-y-2">
                              {mainHero.demands?.map((demand, i) => (
                                  <li key={i} className="flex items-start text-gray-800">
                                      <CheckCircle2 size={18} className="mr-2 text-red-700 mt-0.5 shrink-0" />
                                      <span className="font-medium">{demand}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded uppercase tracking-widest transition-colors flex items-center justify-center shadow-lg">
                          आन्दोलनमा सहभागी हुनुहोस् <ArrowRight size={20} className="ml-2" />
                      </button>
                  </div>
              </div>
          </div>
        )}

        {/* Layout: Active List Only (Full Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Active & Upcoming List */}
            <div className="lg:col-span-12">
                <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-4">
                    <h2 className="text-3xl font-bold text-gray-800 font-['Google_Sans']">जारी तथा आगामी कार्यक्रमहरू</h2>
                </div>

                <div className="space-y-8">
                    {activeCampaigns.slice(0, visibleCount).map((camp) => (
                        <div key={camp.id} className="group relative bg-white text-slate-900 p-6 rounded-lg shadow-sm border border-gray-200 hover:border-red-300 transition-all duration-300 flex flex-col md:flex-row gap-6">
                            {/* Status Stripe */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${camp.type === 'ongoing' ? 'bg-red-700' : 'bg-neutral-600'}`}></div>
                            
                            {/* Image Thumbnail */}
                            <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded bg-gray-100 border border-gray-200 group-hover:border-red-300 transition-colors duration-300">
                                <img src={camp.image} alt={camp.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    {getStatusBadge(camp.type)}
                                    <span className="text-xs font-bold text-gray-500 flex items-center">
                                        <Calendar size={14} className="mr-1"/> {camp.date}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                                    {camp.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <MapPin size={14} className="mr-1 text-red-700"/> {camp.location}
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 transition-colors duration-300">
                                    {camp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < activeCampaigns.length && (
                  <div className="mt-10 text-center">
                    <button 
                      onClick={loadMore}
                      className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-bold rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      थप कार्यक्रमहरू लोड गर्नुहोस् <ChevronDown size={16} className="ml-2" />
                    </button>
                  </div>
                )}
            </div>
        </div>

        {/* SECTION: Archive / Past Struggles */}
        <div className="mt-12 pt-12 border-t border-gray-300">
           <div className="flex items-center mb-8">
              <History size={24} className="mr-3 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-700 font-['Google_Sans']">संघर्ष अभिलेख (सम्पन्न कार्यक्रमहरू)</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastCampaigns.slice(0, visiblePastCount).map((camp) => (
                 <div key={camp.id} className="bg-white border border-gray-200 rounded p-4 flex flex-col opacity-75 hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-start mb-2">
                       {getStatusBadge(camp.type)}
                       <span className="text-xs text-gray-400">{camp.date}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{camp.title}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">{camp.description}</p>
                    <button className="text-xs text-red-700 font-bold hover:underline self-start">
                       रिपोर्ट हेर्नुहोस्
                    </button>
                 </div>
              ))}
           </div>
           
           {/* Past Events Load More */}
           {visiblePastCount < pastCampaigns.length && (
              <div className="mt-10 text-center">
                <button 
                  onClick={loadMorePast}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-sm font-bold rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  थप अभिलेख लोड गर्नुहोस् <ChevronDown size={16} className="ml-2" />
                </button>
              </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default SangharshaPage;