
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ExternalLink, Calendar, FileDown, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

const recentPosts = [
  { id: 1, text: "आजको केन्द्रीय समिति बैठकले महत्वपूर्ण निर्णयहरू पारित गरेको छ। क्रान्तिकारी अभिवादन!", date: "२ घण्टा अघि" },
  { id: 2, text: "महँगी विरुद्धको प्रदर्शनमा सहभागी हुनुभएकोमा सम्पूर्ण जनसमुदायलाई धन्यवाद।", date: "हिजो" },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-950 pt-10 pb-10 border-t-4 border-red-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="https://i.imghippo.com/files/QObu9356OSg.png" 
                  alt="Party Flag" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-bold text-red-950 font-['Google_Sans'] leading-tight tracking-tight italic">
                वैज्ञानिक समाजवादी <br /> कम्युनिस्ट पार्टी, नेपाल
              </h2>
            </div>
            
            <p className="text-gray-500 text-base leading-relaxed font-medium text-[20px] italic border-l-2 border-red-800/30 pl-6">
              "वैज्ञानिक समाजवादको स्थापना र साम्यवादको दिशामा अघि बढ्न एकजुट होऔं।"
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -4, backgroundColor: '#7f1d1d', color: '#fff' }}
                  className="h-10 w-10 flex items-center justify-center bg-red-50 text-red-900 rounded-sm border border-red-100 transition-colors shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[20px] font-black uppercase tracking-normal text-red-900 mb-3 flex items-center gap-3">
              <div className="" />
              नेभिगेसन
            </h3>
            <ul className="space-y-2">
              {[
                { label: "गृहपृष्ठ", link: "#home" },
                { label: "हाम्रो बारेमा", link: "#about" },
                { label: "पार्टी इतिहास र दस्तावेज", link: "#history" },
                { label: "सदस्यता आवेदन", link: "#membership" },
                { label: "पार्टीका नाराहरू", link: "/nara" },
                { label: "आर्थिक सहयोग (लेवि)", link: "#donate" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.link} className="text-gray-600 hover:text-red-900 text-sm font-black uppercase tracking-widest transition-all hover:translate-x-2 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[20px] font-black uppercase tracking-normal text-red-900 mb-3 flex items-center gap-3">
              <div className="" />
              सम्पर्क
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-4">
                <MapPin size={20} className="text-red-800 shrink-0" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">केन्द्रीय कार्यालय</span>
                  <span className="text-sm font-bold text-gray-900">अनामनगर, काठमाडौं, नेपाल</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-red-800 shrink-0" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">फोन सम्पर्क</span>
                  <span className="text-sm font-bold text-gray-900">+९७७-०१-४XXXXXX</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-red-800 shrink-0" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">इमेल</span>
                  <span className="text-sm font-bold text-gray-900">info@scpn.org.np</span>
                </div>
              </li>
            </ul>
            
            <a 
              href="/Dastabage.pdf" 
              className="mt-8 group inline-flex items-center gap-3 bg-red-900 text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-red-950 transition-all shadow-xl"
            >
              <FileDown size={16} />
              सदस्यता फारम डाउनलोड
            </a>
          </div>

          {/* Column 4: Updates */}
          <div>
            <h3 className="text-[20px] font-black uppercase tracking-normal text-red-900 mb-3 flex items-center gap-3">
              <div className="" />
              ताजा अपडेट
            </h3>
            
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="p-5 border border-gray-100 bg-gray-50/50 hover:border-red-100 transition-colors group">
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed font-medium group-hover:text-gray-900 transition-colors line-clamp-2 italic">
                    {post.text}
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400">
                    <Calendar size={12} className="text-red-800" /> {post.date}
                  </div>
                </div>
              ))}
              
              <a href="#" className="flex items-center justify-between group bg-[#1877F2] text-white p-4 text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg rounded-sm">
                <span>फेसबुकमा पछ्याउनुहोस्</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 pt-2 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-black uppercase tracking-normal text-gray-400">
          <div className="flex items-center gap-8">
            <p className="text-[20px] font-black uppercase tracking-widest text-gray-400">
              &copy; २०२४ वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल।
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[20px] font-black uppercase tracking-normal text-gray-400 hover:text-red-900 transition-colors">गोपनीयता</a>
              <a href="#" className="text-[20px] font-black uppercase tracking-normal text-gray-400 hover:text-red-900 transition-colors">शर्तहरू</a>
            </div>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-8 w-8 flex items-center justify-center bg-gray-950 text-white rounded-sm shadow-2xl hover:bg-red-900 transition-colors group"
          >
            <ArrowUp size={10} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
