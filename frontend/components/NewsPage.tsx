import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, ArrowRight, ChevronDown, Clock, Newspaper } from 'lucide-react';

// Mock Data for News
const allNews = [
  {
    id: 1,
    title: "औद्योगिक हड्ताल र मजदुर अधिकार सम्बन्धमा पार्टीको विज्ञप्ति",
    category: "विज्ञप्ति",
    date: "2081-05-15", // YYYY-MM-DD for sorting
    displayDate: "१५ भदौ, २०८१",
    author: "प्रेस सेन्टर",
    image: "https://picsum.photos/seed/news1/800/600",
    summary: "देशव्यापी औद्योगिक हड्तालको घोषणा गर्दै पार्टीले मजदुरहरूको न्यूनतम ज्याला वृद्धिको माग गरेको छ। सरकारको उदासीनता विरुद्ध कडा संघर्षको चेतावनी।"
  },
  {
    id: 2,
    title: "अन्तर्राष्ट्रिय ऐक्यबद्धता: क्युबाली कमरेडहरूलाई पत्र",
    category: "अन्तर्राष्ट्रिय",
    date: "2081-05-12",
    displayDate: "१२ भदौ, २०८१",
    author: "विदेश विभाग",
    image: "https://picsum.photos/seed/news2/800/600",
    summary: "अमेरिकी नाकाबन्दीको विरुद्ध क्युबाली जनताको प्रतिरोधलाई सलाम गर्दै पार्टीले ऐक्यबद्धता पत्र पठाएको छ।"
  },
  {
    id: 3,
    title: "आवास संकट: पूँजीवादी व्यवस्थाको असफलता",
    category: "विचार",
    date: "2081-05-10",
    displayDate: "१० भदौ, २०८१",
    author: "सम्पादकीय",
    image: "https://picsum.photos/seed/news3/800/600",
    summary: "सहरी गरिबहरूको बसोबासको अधिकार खोसिँदै गएको सन्दर्भमा पूँजीवादी विकास मोडेलको आलोचना र वैज्ञानिक समाजवादी विकल्प।"
  },
  {
    id: 4,
    title: "कृषि क्रान्ति र भूमिसुधार: अबको बाटो",
    category: "लेख",
    date: "2081-05-08",
    displayDate: "०८ भदौ, २०८१",
    author: "किसान महासंघ",
    image: "https://picsum.photos/seed/farm/800/600",
    summary: "सामन्ती भू-स्वामित्वको अन्त्य गर्दै वैज्ञानिक भूमिसुधार लागू गर्नुपर्ने आवश्यकता र पार्टीको कार्ययोजना।"
  },
  {
    id: 5,
    title: "शिक्षामा निजीकरण विरुद्ध विद्यार्थी आन्दोलन",
    category: "आन्दोलन",
    date: "2081-05-05",
    displayDate: "०५ भदौ, २०८१",
    author: "विद्यार्थी संगठन",
    image: "https://picsum.photos/seed/student_protest/800/600",
    summary: "महँगो शुल्क र व्यापारीकरण विरुद्ध देशभरका क्याम्पसहरूमा विद्यार्थी संगठनले थाल्यो सशक्त प्रतिरोध।"
  },
  {
    id: 6,
    title: "महँगी र भ्रष्टाचार विरुद्ध खबरदारी सभा सम्पन्न",
    category: "समाचार",
    date: "2081-05-01",
    displayDate: "०१ भदौ, २०८१",
    author: "काठमाडौं कमिटी",
    image: "https://picsum.photos/seed/rally_ktm/800/600",
    summary: "जनताको ढाड सेक्ने गरी भएको मूल्यवृद्धिको विरोधमा वसन्तपुरमा विशाल खबरदारी सभा सम्पन्न।"
  },
  {
    id: 7,
    title: "स्थानीय तहको बजेट माथि पार्टीको समीक्षा",
    category: "अर्थतन्त्र",
    date: "2081-04-28",
    displayDate: "२८ साउन, २०८१",
    author: "अर्थ विभाग",
    image: "https://picsum.photos/seed/budget/800/600",
    summary: "स्थानीय सरकारहरूले ल्याएको बजेट जनमुखी नभएको ठहर गर्दै पार्टीले बुझायो ११ बुँदे ध्यानाकर्षण पत्र।"
  },
  {
    id: 8,
    title: "महिला हिंसा विरुद्ध शून्य सहनशीलता",
    category: "विज्ञप्ति",
    date: "2081-04-25",
    displayDate: "२५ साउन, २०८१",
    author: "महिला संगठन",
    image: "https://picsum.photos/seed/women_rights/800/600",
    summary: "बढ्दो महिला हिंसाका घटनाहरूप्रति गम्भीर चिन्ता व्यक्त गर्दै दोषीलाई कडा कारबाहीको माग।"
  },
  {
    id: 9,
    title: " जलवायु परिवर्तन र समाजवादी दृष्टिकोण",
    category: "लेख",
    date: "2081-04-20",
    displayDate: "२० साउन, २०८१",
    author: "विज्ञान विभाग",
    image: "https://picsum.photos/seed/climate/800/600",
    summary: "जलवायु संकट पुँजीवादी अतिदोहनको परिणाम हो। पर्यावरण संरक्षणका लागि समाजवादी मोडेलको आवश्यकता।"
  }
];

const categories = ["सबै", "समाचार", "विज्ञप्ति", "विचार", "लेख", "आन्दोलन", "अन्तर्राष्ट्रिय", "अर्थतन्त्र"];

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("सबै");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Filter and Sort Logic
  const filteredData = useMemo(() => {
    let data = [...allNews];

    // Filter by Category
    if (selectedCategory !== "सबै") {
      data = data.filter(item => item.category === selectedCategory);
    }

    // Filter by Search Term
    if (searchTerm) {
      data = data.filter(item => 
        item.title.includes(searchTerm) || 
        item.summary.includes(searchTerm) ||
        item.author.includes(searchTerm)
      );
    }

    // Sort by Date
    data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return data;
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="bg-neutral-100 min-h-screen pb-24">
      
      {/* Dedicated Page Hero / Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-6 bg-red-50 px-4 py-2 rounded-full">
                <Newspaper size={18} className="mr-2" />
                <span>आधिकारिक सूचना पोर्टल</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-serif leading-tight mb-8">
               पार्टी समाचार कक्ष
             </h1>
             <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
               पार्टीका ताजा गतिविधि, आधिकारिक प्रेस विज्ञप्ति, वैचारिक लेख र समसामयिक घटनाक्रमहरूको आधिकारिक स्रोत।
               सत्य, तथ्य र विज्ञानमा आधारित सूचना।
             </p>
          </div>
        </div>
      </div>

      {/* Controls & Grid Area */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 mt-16">
        
        {/* Search & Filter Controls */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-[400px]">
              <input 
                type="text" 
                placeholder="समाचार खोज्नुहोस्..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-sm focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-colors text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
              {/* Category Dropdown (Mobile) / Pills (Desktop) */}
              <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2 lg:py-0 w-full lg:w-auto">
                <span className="text-sm font-bold text-gray-500 mr-4 flex items-center uppercase tracking-wide">
                  <Filter size={16} className="mr-2" /> विधा:
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-red-800 text-white' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative ml-auto lg:ml-6">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                  className="appearance-none bg-white border border-gray-300 text-gray-700 py-3 pl-5 pr-12 rounded-sm focus:outline-none focus:border-red-800 font-bold text-sm cursor-pointer hover:border-red-300 transition-colors"
                >
                  <option value="newest">नयाँ पहिले</option>
                  <option value="oldest">पुरानो पहिले</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredData.map((item) => (
              <div key={item.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full">
                
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white text-red-900 text-xs font-bold px-3 py-1.5 rounded-sm shadow-md uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-5 border-b border-gray-100 pb-4 font-bold uppercase tracking-wide">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1.5 text-red-600" /> {item.displayDate}
                    </span>
                    <span className="flex items-center">
                      <User size={14} className="mr-1.5 text-red-600" /> {item.author}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-red-800 transition-colors font-serif">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-8 flex-1">
                    {item.summary}
                  </p>

                  <button className="w-full mt-auto flex items-center justify-center bg-gray-50 hover:bg-red-800 hover:text-white border border-gray-200 text-gray-800 font-bold py-4 rounded-sm transition-colors uppercase text-sm tracking-widest group/btn">
                    पूरा पढ्नुहोस् 
                    <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-lg border border-gray-200 border-dashed">
            <div className="inline-block p-6 bg-gray-50 rounded-full mb-6">
               <Search size={64} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">माफ गर्नुहोला!</h3>
            <p className="text-gray-500 text-lg">तपाईंले खोज्नु भएको मापदण्ड अनुसार कुनै समाचार फेला परेन।</p>
            <button 
              onClick={() => {setSearchTerm(""); setSelectedCategory("सबै");}}
              className="mt-8 text-red-800 font-bold hover:underline uppercase tracking-wide"
            >
              सबै फिल्टरहरू हटाउनुहोस्
            </button>
          </div>
        )}

        {/* Mock Pagination */}
        {filteredData.length > 0 && (
          <div className="mt-20 flex justify-center space-x-3">
            <button className="px-5 py-3 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 font-bold text-gray-600 uppercase tracking-wide text-sm">अघिल्लो</button>
            <button className="px-5 py-3 bg-red-800 text-white rounded font-bold shadow-md">१</button>
            <button className="px-5 py-3 border border-gray-300 rounded hover:bg-gray-100 font-bold text-gray-600">२</button>
            <button className="px-5 py-3 border border-gray-300 rounded hover:bg-gray-100 font-bold text-gray-600">३</button>
            <span className="px-3 py-3 text-gray-400">...</span>
            <button className="px-5 py-3 border border-gray-300 rounded hover:bg-gray-100 font-bold text-gray-600 uppercase tracking-wide text-sm">पछिल्लो</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;