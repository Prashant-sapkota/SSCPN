import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const units = [
  {
    id: 1,
    name: "शहीद स्मृति कृषि सहकारी",
    type: "कृषि",
    description: "अर्गानिक खेती र आधुनिक पशुपालन पहल।",
    image: "https://picsum.photos/seed/agriculture/600/400",
    status: "सञ्चालनमा"
  },
  {
    id: 2,
    name: "जनता गार्मेन्ट उद्योग",
    type: "उद्योग",
    description: "स्वदेशी कच्चा पदार्थमा आधारित कपडा उद्योग।",
    image: "https://picsum.photos/seed/garment/600/400",
    status: "सञ्चालनमा"
  },
  {
    id: 3,
    name: "वैज्ञानिक छापाखाना",
    type: "प्रकाशन",
    description: "साहित्य र सामग्रीको छपाई तथा वितरण केन्द्र।",
    image: "https://picsum.photos/seed/printing/600/400",
    status: "विस्तार हुँदै"
  },
  {
    id: 4,
    name: "सामुदायिक पोलिक्लिनिक",
    type: "स्वास्थ्य",
    description: "न्यून शुल्कमा आधारभूत स्वास्थ्य सेवा प्रस्ताव।",
    image: "https://picsum.photos/seed/clinic/600/400",
    status: "प्रस्तावित"
  }
];

const ProductionUnits: React.FC = () => {
  return (
    <section className="py-14 bg-white" id="production">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="उत्पादन" 
          actionText="सबै परियोजनाहरू"
          actionLink="#"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.slice(0, 3).map((unit) => (
            <div key={unit.id} className="group bg-white rounded-sm overflow-hidden ring-1 ring-gray-200 transition-all duration-300 flex flex-col">
              
              {/* Image Area - Natural colors preserved */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={unit.image} 
                  alt={unit.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-red-800 text-white text-xs font-bold px-3 py-1.5 shadow-md uppercase tracking-wider rounded-sm">
                  {unit.type}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-800 transition-colors tracking-normal">
                    {unit.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
                  {unit.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 uppercase tracking-wide rounded-full">
                    {unit.status}
                  </span>
                  <button className="text-red-800 hover:text-red-600 p-2 transition-colors bg-red-50 rounded-full hover:bg-red-100 border border-gray-300">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionUnits;