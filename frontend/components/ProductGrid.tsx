import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  { id: 1, name: "साम्राज्यवादको विरासत", price: "रु. ५००", img: "https://picsum.photos/seed/book1/300/300", cat: "किताब" },
  { id: 2, name: "एकता टि-शर्ट", price: "रु. ८००", img: "https://picsum.photos/seed/shirt1/300/300", cat: "पोशाक" },
  { id: 3, name: "मार्क्सवादी सिद्धान्त (भाग १)", price: "रु. ४००", img: "https://picsum.photos/seed/book2/300/300", cat: "किताब" },
  { id: 4, name: "पार्टी ब्याज", price: "रु. १००", img: "https://picsum.photos/seed/badge1/300/300", cat: "ब्याज" },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white" id="products">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <SectionHeader 
          title="क्रान्तिकारी पसल" 
          center 
          className="text-white border-red-600 mb-6"
        />
        <div className="text-center mb-16">
             <p className="text-gray-400 text-lg">आन्दोलनलाई सहयोग गर्नुहोस्। आफ्नो विचारधारा लगाउनुहोस्।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((prod) => (
            <div key={prod.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden bg-gray-200 lg:aspect-none lg:h-80 border-4 border-red-900 group-hover:border-yellow-500 transition-colors">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* White tag */}
                <div className="absolute top-0 right-0 bg-white text-red-900 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                  {prod.cat}
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {prod.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400">{prod.price}</p>
                </div>
                <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                   <ShoppingBag size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-block border-2 border-white text-white px-10 py-4 font-bold uppercase hover:bg-white hover:text-black transition-colors tracking-widest text-sm">
                पूरा पसल हेर्नुहोस्
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;