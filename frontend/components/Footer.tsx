import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ExternalLink, Calendar, FileDown } from 'lucide-react';

const recentPosts = [
  { id: 1, text: "आजको केन्द्रीय समिति बैठकले महत्वपूर्ण निर्णयहरू पारित गरेको छ। क्रान्तिकारी अभिवादन!", date: "२ घण्टा अघि" },
  { id: 2, text: "महँगी विरुद्धको प्रदर्शनमा सहभागी हुनुभएकोमा सम्पूर्ण जनसमुदायलाई धन्यवाद।", date: "हिजो" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10 pb-6 border-t-8 border-red-800 mt-auto font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          
          {/* Column 1: Brand, Flag, Nara, Socials */}
          <div className="col-span-1 flex flex-col items-start">
             

             <div className="flex gap-x-6">
             <div className="w-full max-w-[88px] mb-4">
                <img 
                  src="https://i.imghippo.com/files/QObu9356OSg.png" 
                  alt="Party Flag" 
                  className="w-full h-auto object-contain drop-shadow-md"
                />
             </div>
             <h2 className="text-xl font-bold text-red-900 mb-4 font-serif leading-tight">
               वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल
             </h2></div>
             
             <p className="text-sm text-gray-600 leading-relaxed mb-5 font-medium">
               "वैज्ञानिक समाजवादको स्थापना र साम्यवादको दिशामा अघि बढ्न एकजुट होऔं।"
             </p>

             {/* Social Icons */}
             <div className="flex space-x-3">
               <a href="#" className="bg-red-50 p-2.5 rounded hover:bg-red-800 hover:text-white transition-all text-red-800 border border-red-100"><Facebook size={18} /></a>
               <a href="#" className="bg-red-50 p-2.5 rounded hover:bg-red-800 hover:text-white transition-all text-red-800 border border-red-100"><Twitter size={18} /></a>
               <a href="#" className="bg-red-50 p-2.5 rounded hover:bg-red-800 hover:text-white transition-all text-red-800 border border-red-100"><Youtube size={18} /></a>
               <a href="#" className="bg-red-50 p-2.5 rounded hover:bg-red-800 hover:text-white transition-all text-red-800 border border-red-100"><Instagram size={18} /></a>
             </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1">
             <div className="mb-5 border-b-2 border-red-100 pb-2">
               <h3 className="font-bold text-base uppercase tracking-[0.08em] text-red-800">
                  नेभिगेसन
                </h3>
             </div>
             <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#home" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    गृहपृष्ठ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    हाम्रो बारेमा
                  </a>
                </li>
                <li>
                  <a href="#history" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    पार्टी इतिहास र दस्तावेज
                  </a>
                </li>
                <li>
                  <a href="#membership" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    सदस्यता आवेदन
                  </a>
                </li>
                <li>
                  <a href="/nara" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    पार्टीका नाराहरू
                  </a>
                </li>
                <li>
                  <a href="#donate" className="hover:text-red-700 hover:pl-2 transition-all block text-gray-700">
                    आर्थिक सहयोग (लेवि)
                  </a>
                </li>
             </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-span-1">
           <div className="mb-5 border-b-2 border-red-100 pb-2">
               <h3 className="font-bold text-base uppercase tracking-[0.08em] text-red-800">
                  सम्पर्क विवरण
                </h3>
             </div>
             
             <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start">
                 <MapPin className="text-red-700 mt-0.5 mr-3 flex-shrink-0" size={20} />
                   <div>
                     <span className="font-bold block text-gray-900 mb-1">केन्द्रीय कार्यालय</span>
                     <span>अनामनगर, काठमाडौं, नेपाल</span>
                   </div>
                </li>
                <li className="flex items-center">
                 <Phone className="text-red-700 mr-3 flex-shrink-0" size={20} />
                   <span className="font-bold hover:text-red-700 cursor-pointer">+९७७-०१-४XXXXXX</span>
                </li>
                <li className="flex items-center">
                 <Mail className="text-red-700 mr-3 flex-shrink-0" size={20} />
                   <span className="hover:text-red-700 cursor-pointer">info@scpn.org.np</span>
                </li>
                 <li className="flex items-center">
                   <FileDown className="text-red-700 mr-3 flex-shrink-0" size={20} />
                   <a
                     href="/Dastabage.pdf"
                     download="Dastabage.pdf"
                     className="font-bold hover:text-red-700 cursor-pointer"
                   >
                     सदस्यता फारम डाउनलोड
                   </a>
                 </li>
             </ul>
          </div>

          {/* Column 4: Facebook Feed (Mock) */}
          <div className="col-span-1">
             <div className="flex items-center justify-between mb-5 border-b-2 border-red-100 pb-2">
               <h3 className="font-bold text-base uppercase tracking-[0.08em] text-red-800">
                 फेसबुक अपडेट
               </h3>
               <Facebook size={18} className="text-blue-600" />
             </div>

             <div className="bg-gray-50 p-4 rounded border border-gray-200 space-y-3">
               {recentPosts.map((post) => (
                 <div key={post.id} className="bg-white p-3 rounded shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-xs mb-2 line-clamp-2 leading-relaxed">
                      {post.text}
                    </p>
                    <div className="flex items-center text-xs text-gray-400 font-bold uppercase">
                       <Calendar size={12} className="mr-1.5" /> {post.date}
                    </div>
                 </div>
               ))}
               
               <a href="#" className="block w-full text-center bg-[#1877F2] text-white font-bold py-2.5 rounded text-xs hover:bg-blue-700 transition-colors uppercase tracking-wide">
                 फेसबुकमा पछ्याउनुहोस् <ExternalLink size={16} className="inline ml-1" />
               </a>
             </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; २०२४ वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल।</p>
          <div className="flex space-x-6 mt-3 md:mt-0 font-bold uppercase tracking-wide">
             <a href="#" className="hover:text-red-700 transition-colors">गोपनीयता नीति</a>
             <a href="#" className="hover:text-red-700 transition-colors">नियम तथा शर्तहरू</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;