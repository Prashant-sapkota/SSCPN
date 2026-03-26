import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, AlertCircle, ArrowRight, ShieldAlert, ChevronDown, History } from 'lucide-react';

const allCampaigns = [
  {
    id: 1,
    title: "राष्ट्रिय औद्योगिक हड्ताल",
    type: "ongoing", // ongoing, scheduled, completed
    date: "१५ भदौ देखि निरन्तर",
    location: "देशव्यापी (मुख्य केन्द्र: विराटनगर)",
    image: "https://picsum.photos/seed/protest_worker/1200/600",
    description: "सरकारले तोकेको न्यूनतम पारिश्रमिक कार्यान्वयन नभएको र श्रम ऐनको उल्लंघन भएको विरोधमा देशव्यापी अनिश्चितकालीन हड्ताल।",
    demands: [
      "न्यूनतम पारिश्रमिक रु. २५,००० कायम गर।",
      "सामाजिक सुरक्षा कोष पूर्ण कार्यान्वयन गर।",
      "निजीकरण गरिएका उद्योगहरू फिर्ता ल्याऊ।"
    ]
  },
  {
    id: 2,
    title: "शिक्षामा निजीकरण विरुद्ध घेराउ",
    type: "scheduled",
    date: "२० भदौ, २०८१ (बिहान १०:००)",
    location: "शिक्षा मन्त्रालय, सिंहदरबार",
    image: "https://picsum.photos/seed/student_rally/800/600",
    description: "सामुदायिक विद्यालयहरूलाई धराशायी बनाउने र निजी शिक्षा माफियालाई पोस्ने सरकारी नीति विरुद्ध विशाल घेराउ कार्यक्रम।",
    demands: [
      "शिक्षा विधेयक २०८१ खारेज गर।",
      "निजी विद्यालयको शुल्क वृद्धि फिर्ता गर।",
      "शिक्षक दरबन्दी तत्काल पूर्ति गर।"
    ]
  },
  {
    id: 3,
    title: "महँगी विरुद्ध सिट्ठी जुलुस",
    type: "ongoing",
    date: "१६ भदौ देखि दैनिक",
    location: "काठमाडौं उपत्यका",
    image: "https://picsum.photos/seed/inflation_protest/800/600",
    description: "दैनिक उपभोग्य वस्तु र पेट्रोलियम पदार्थको मूल्यवृद्धिको विरोधमा साझ ५ बजे दैनिक प्रदर्शन।",
    demands: ["मूल्यवृद्धि फिर्ता गर", "कालोबजारी बन्द गर"]
  },
  {
    id: 4,
    title: "किसान पेन्सन अभियान",
    type: "scheduled",
    date: "२५ भदौ, २०८१",
    location: "चितवन",
    image: "https://picsum.photos/seed/farmer_rally/800/600",
    description: "किसानहरूलाई पेन्सन र मलखादको ग्यारेन्टी माग गर्दै जिल्ला प्रशासन कार्यालय अगाडि धर्ना।",
    demands: ["मलखाद समयमै उपलब्ध गराऊ", "किसान पेन्सन लागु गर"]
  },
  {
    id: 5,
    title: "अदालत मार्च",
    type: "scheduled",
    date: "३० भदौ, २०८१",
    location: "रामशाहपथ",
    image: "https://picsum.photos/seed/court_march/800/600",
    description: "न्यायपालिकामा भएको भ्रष्टाचार र ढिलासुस्ती विरुद्ध खबरदारी मार्च।",
    demands: ["भ्रष्ट न्यायाधीशलाई कारबाही गर", "निःशुल्क कानुनी सहायता लागु गर"]
  },
  // Past Events
  {
    id: 101,
    title: "भूमिहीन सुकुम्बासी आन्दोलन",
    type: "completed",
    date: "०५ भदौ, २०८१",
    location: "माइतीघर मण्डला",
    image: "https://picsum.photos/seed/landless/800/600",
    description: "लालपुर्जा वितरणमा भएको ढिलासुस्ती र उठिबास लगाउने प्रयास विरुद्ध १०,००० भूमिहीनहरूको शक्ति प्रदर्शन।",
    demands: [
      "भूमि आयोगको काम तत्काल सुरु गर।",
      "बसोबासको ग्यारेन्टी बिना डोजर चलाउन बन्द गर।"
    ]
  },
  {
    id: 102,
    title: "एमसीसी विरुद्ध प्रदर्शन",
    type: "completed",
    date: "१५ फागुन, २०८०",
    location: "नयाँ बानेश्वर",
    image: "https://picsum.photos/seed/mcc_protest/800/600",
    description: "राष्ट्रघाती सम्झौताको विरोधमा भएको विशाल जनप्रदर्शन।",
    demands: ["असमान सम्झौता खारेज गर"]
  },
  {
    id: 103,
    title: "नागरिकता विधेयक खारेजी अभियान",
    type: "completed",
    date: "१० असोज, २०८०",
    location: "देशव्यापी",
    image: "https://picsum.photos/seed/citizenship/800/600",
    description: "विदेशीलाई सजिलै नागरिकता दिने प्रावधान विरुद्ध भएको शृंखलाबद्ध आन्दोलन।",
    demands: ["नागरिकता विधेयक खारेज गर"]
  },
  {
    id: 104,
    title: "कालापानी मार्च",
    type: "completed",
    date: "२५ जेठ, २०८०",
    location: "दार्चुला",
    image: "https://picsum.photos/seed/border/800/600",
    description: "सीमा अतिक्रमण विरुद्ध युवा संगठनले गरेको लामो मार्च।",
    demands: ["भारतीय सेना कालापानी छोड"]
  },
  {
    id: 105,
    title: "कोभिड स्वास्थ्य सामाग्री भ्रष्टाचार विरुद्ध",
    type: "completed",
    date: "१५ असार, २०७७",
    location: "बालुवाटार",
    image: "https://picsum.photos/seed/covid_scam/800/600",
    description: "महामारीको समयमा भएको औषधि खरिद भ्रष्टाचार विरुद्धको प्रदर्शन।",
    demands: ["भ्रष्टाचारीलाई कारबाही गर"]
  },
  {
    id: 106,
    title: "गुठी विधेयक विरुद्ध आन्दोलन",
    type: "completed",
    date: "०४ असार, २०७६",
    location: "माइतीघर",
    image: "https://picsum.photos/seed/guthi/800/600",
    description: "सांस्कृतिक सम्पदा मास्ने विधेयक विरुद्ध विशाल जनसागर।",
    demands: ["गुठी विधेयक फिर्ता गर"]
  }
];

const SangharshaPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [visiblePastCount, setVisiblePastCount] = useState(4);

  // Separation Logic
  const mainHero = allCampaigns.find(c => c.type === 'ongoing'); // Pick first ongoing as hero
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

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Page Header - Centered & Clean (Same theme as NewsPage) */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <ShieldAlert size={18} className="mr-2" />
                <span>वर्ग संघर्षको मोर्चा</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               संघर्ष सम्बन्धि गतिविधि
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 mt-12">
        
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
                      
                      <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight font-serif">
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
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">जारी तथा आगामी कार्यक्रमहरू</h2>
                </div>

                <div className="space-y-8">
                    {activeCampaigns.slice(0, visibleCount).map((camp) => (
                        <div key={camp.id} className="group relative bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-red-300 transition-all flex flex-col md:flex-row gap-6">
                            {/* Status Stripe */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${camp.type === 'ongoing' ? 'bg-red-700' : 'bg-neutral-600'}`}></div>
                            
                            {/* Image Thumbnail */}
                            <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded bg-gray-100 border border-gray-200">
                                <img src={camp.image} alt={camp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    {getStatusBadge(camp.type)}
                                    <span className="text-xs font-bold text-gray-500 flex items-center">
                                        <Calendar size={14} className="mr-1"/> {camp.date}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-800 transition-colors">
                                    {camp.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <MapPin size={14} className="mr-1 text-red-700"/> {camp.location}
                                </div>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
        <div className="mt-24 pt-12 border-t border-gray-300">
           <div className="flex items-center mb-8">
              <History size={24} className="mr-3 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-700 font-serif">संघर्ष अभिलेख (सम्पन्न कार्यक्रमहरू)</h2>
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