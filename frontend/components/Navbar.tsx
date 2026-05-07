import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Home, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavSubItem {
  label: string;
  path: string;
}

interface NavItem {
  name: string;
  icon?: React.ReactNode;
  path?: string;
  submenu?: NavSubItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems: NavItem[] = [
    { 
      name: 'गृहमुख', 
      icon: <Home size={25} />, 
      path: '/'
    },
    { 
      name: 'हाम्रा बारेमा', 
      path: '/about'
    },
    { 
      name: 'समाजवादी कार्यक्रम', 
      path: '/samajwadi-karyakram'
    },
    { 
      name: 'विचार', 
      path: '/bichar'
    },
    { 
      name: 'गतिविधि', 
      submenu: [
        { label: 'संघर्ष सम्बन्धि', path: '/sangharsha' }, 
        { label: 'संगठनात्मक', path: '/sangathanatmak' },
        { label: 'वार्षिक क्यालेन्डर', path: '/calendar' }
      ] 
    },
    { 
      name: 'फोटो ग्यालरी', 
      path: '/gallery'
    },
    { 
      name: 'प्रशिक्षण सामग्री', 
      submenu: [
        { label: 'इतिहास', path: '/history' }, 
        { label: 'वैज्ञानिक समाजवाद', path: '/scientific-socialism' }, 
        { label: 'दर्शन', path: '/darsan' }, 
        { label: 'संगठनात्मक बिधि/पद्धति', path: '/org-method' }, 
        { label: 'विज्ञान प्रविधि', path: '/bigyan-prabidhi' }
      ] 
    },
    { 
      name: 'दस्तावेज', 
      path: '/dastabeez'
    },
    { 
      name: 'सदस्यता', 
      path: '/membership'
    }
  ];

  const isItemActive = (item: NavItem) => {
    if (item.path) {
      return pathname === item.path;
    }
    if (item.submenu) {
      return item.submenu.some((subItem) => subItem.path === pathname);
    }
    return false;
  };

  const handleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Minimal Header Section - This will scroll away naturally */}
      <div ref={headerRef} className="bg-white w-full border-b border-gray-100 relative z-30 pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between md:justify-center items-center gap-4 md:gap-8 lg:gap-12">
            
            {/* Left Flag - Green Scientific Socialist Flag */}
            <div className="hidden md:block w-24 lg:w-32 xl:w-40 cursor-pointer flex-shrink-0" onClick={() => handleNavigate('/')}>
              <img 
                src="https://i.imghippo.com/files/NmZa4274WM.png" 
                alt="Green Party Flag" 
                className="w-full h-auto object-contain drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Center Content: Logo & Name */}
            <div className="flex flex-col items-center text-center cursor-pointer px-2 flex-grow" onClick={() => handleNavigate('/')}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-alkatra font-bold leading-tight text-[#b90000] drop-shadow-sm tracking-wide">
                वैज्ञानिक समाजवादी <br className="md:hidden" /> कम्युनिस्ट पार्टी, नेपाल
              </h1>
              <span className="text-1xl md:text-2xl lg:text-3xl font-alkatra font-bold leading-tight text-black drop-shadow-sm tracking-wide">
                Scientific Socialist Communist Party, Nepal
              </span>
            </div>

            {/* Right Flag - Red Communist Flag */}
            <div className="hidden md:block w-24 lg:w-32 xl:w-40 cursor-pointer flex-shrink-0" onClick={() => handleNavigate('/')}>
              <img 
                src="https://i.imghippo.com/files/QObu9356OSg.png" 
                alt="Red Flag" 
                className="w-full h-auto object-contain drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

          </div>
        </div>
      </div>

      {isSticky && <div className="h-12 md:h-14" />}
      {/* Navigation Bar - Fixed Sticky Position */}
      <nav className={`${isSticky ? 'fixed top-0 left-0 right-0' : 'relative'} z-50 bg-[#b90000] text-white shadow-lg border-t-2 border-red-900 w-full`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 w-full justify-center h-full">
              {navItems.map((item, index) => (
                <div key={index} className="relative group h-full flex items-center">
                  <button
                    onClick={() => {
                      if (item.path) handleNavigate(item.path);
                    }}
                    className={`flex items-center px-4 xl:px-5 h-full hover:bg-red-900 transition-colors text-sm xl:text-base font-bold tracking-wide whitespace-nowrap border-b-4 border-transparent hover:border-white ${isItemActive(item) ? 'bg-red-900 border-white' : ''}`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.name}
                    {item.submenu && <ChevronDown size={14} className="ml-1 mt-0.5 opacity-70" />}
                  </button>
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className={`absolute top-full left-0 bg-white text-gray-800 shadow-2xl rounded-b-lg hidden group-hover:block border-t-4 border-red-800 animate-fade-in-up transition-all ${item.submenu.length > 5 ? 'w-80' : 'w-72'}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex} 
                          onClick={() => {
                            handleNavigate(subItem.path);
                          }}
                          className="block w-full text-left px-6 py-4 hover:bg-red-50 text-base border-b border-gray-100 font-medium last:border-0 hover:text-red-700 transition-colors leading-tight"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

             {/* Search & Mobile Toggle (Visible on Mobile) */}
            <div className="flex lg:hidden items-center justify-between w-full">
               <span className="font-bold text-lg truncate pr-4 tracking-wider">मेनु</span>
               <button className="p-2 hover:bg-red-800 rounded transition-colors focus:outline-none">
                  <Menu className="" size={28} onClick={() => setIsOpen(!isOpen)} />
               </button>
            </div>
             {/* Desktop Search Icon */}
             <div className="hidden lg:block absolute right-4 xl:right-8">
                  <button className="p-2 hover:bg-red-900 rounded-full transition-colors text-red-100 hover:text-white" onClick={() => handleNavigate('/search')}>
                    <Search size={22} />
                 </button>
             </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#a30000] border-t border-red-900 absolute w-full left-0 z-50 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <div 
                    className="flex justify-between items-center px-4 py-4 text-lg font-bold hover:bg-red-900 text-white transition-colors border-b border-red-800/30 cursor-pointer"
                    onClick={() => {
                       if (item.submenu) {
                         handleMobileDropdown(item.name);
                       } else {
                         if (item.path) handleNavigate(item.path);
                       }
                    }}
                  >
                    <span className="flex items-center gap-3">
                       {item.icon} {item.name}
                    </span>
                    {item.submenu && (
                      <ChevronDown 
                        size={18} 
                        className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && activeDropdown === item.name && (
                    <div className="bg-red-950/40 pl-4 py-2">
                      {item.submenu.map((subItem, subIdx) => (
                        <button
                          key={subIdx} 
                          onClick={() => {
                            handleNavigate(subItem.path);
                          }}
                          className="block w-full text-left text-base text-gray-200 hover:text-white py-3 border-l-2 border-red-500/50 pl-4 hover:border-red-500 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
