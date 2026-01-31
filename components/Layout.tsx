
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronDown, ChevronRight, FileText, Camera, Mic2, Layout as LayoutIcon } from 'lucide-react';
import { NFP_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Policies', id: 'policies' },
    { label: 'Events', id: 'events' },
  ];

  const mediaSubItems = [
    { label: 'Media Center', id: 'media-hub', icon: <LayoutIcon size={16} /> },
    { label: 'Statements', id: 'news', icon: <FileText size={16} /> },
    { label: 'Gallery', id: 'media-gallery', icon: <Camera size={16} /> },
    { label: 'Interviews', id: 'media-interviews', icon: <Mic2 size={16} /> },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    setIsMediaDropdownOpen(false);
    setIsMobileMediaOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMediaDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isMediaActive = activePage === 'media-hub' || activePage === 'news' || activePage === 'media-gallery' || activePage === 'media-interviews';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation - Optimized for Mobile Tapability */}
      <nav className="bg-black text-white sticky top-0 z-50 border-b border-nfp-gold/20 shadow-xl h-16 md:h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:scale-105">
                <img 
                  src="https://i.ibb.co/TDnFWgmw/National-Freedom-Party-logo-svg.png" 
                  alt="NFP Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base md:text-lg tracking-tighter">NFP</span>
                <span className="text-[8px] md:text-[10px] text-nfp-gold font-bold tracking-[0.1em] md:tracking-[0.2em] hidden sm:block">NATIONAL FREEDOM PARTY</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 text-xs font-black tracking-widest transition-colors ${
                    activePage === item.id ? 'text-nfp-gold underline decoration-2 underline-offset-8' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              ))}

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleNav('media-hub')}
                  onMouseEnter={() => setIsMediaDropdownOpen(true)}
                  className={`px-4 py-2 text-xs font-black tracking-widest transition-colors flex items-center ${
                    isMediaActive ? 'text-nfp-gold underline decoration-2 underline-offset-8' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  MEDIA <ChevronDown size={14} className={`ml-1 transition-transform ${isMediaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMediaDropdownOpen && (
                  <div 
                    onMouseLeave={() => setIsMediaDropdownOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white text-black mt-0 shadow-2xl border-x border-b border-zinc-200 py-2 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {mediaSubItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNav(sub.id)}
                        className={`w-full text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 flex items-center justify-between group transition-colors ${
                          activePage === sub.id ? 'text-nfp-orange bg-zinc-50' : 'text-black'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`mr-3 ${activePage === sub.id ? 'text-nfp-gold' : 'text-zinc-400 group-hover:text-black'}`}>
                            {sub.icon}
                          </span>
                          {sub.label}
                        </div>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-zinc-800 mx-4"></div>
              <button
                onClick={() => handleNav('membership')}
                className="bg-nfp-gold text-black px-6 py-2.5 rounded-sm font-black text-xs hover:bg-white transition-all transform hover:-translate-y-0.5"
              >
                JOIN
              </button>
            </div>

            {/* Mobile menu button - Larger target for better UX */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-nfp-gold p-3 transition-colors touch-none outline-none"
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav - Scrollable and clear hierarchy */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-t border-zinc-900 animate-in slide-in-from-top duration-300 fixed inset-x-0 top-16 bottom-0 z-[100] overflow-y-auto pb-20">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              <button
                onClick={() => handleNav('home')}
                className={`block w-full text-left px-4 py-5 text-base font-black tracking-widest border-b border-zinc-900 ${
                  activePage === 'home' ? 'text-nfp-gold' : 'text-white'
                }`}
              >
                HOME
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`block w-full text-left px-4 py-5 text-base font-black tracking-widest border-b border-zinc-900 ${
                    activePage === item.id ? 'text-nfp-gold' : 'text-white'
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
              
              <div>
                <button
                  onClick={() => setIsMobileMediaOpen(!isMobileMediaOpen)}
                  className={`flex items-center justify-between w-full text-left px-4 py-5 text-base font-black tracking-widest border-b border-zinc-900 ${
                    isMediaActive ? 'text-nfp-gold' : 'text-white'
                  }`}
                >
                  MEDIA <ChevronDown size={20} className={`transition-transform ${isMobileMediaOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileMediaOpen && (
                  <div className="bg-white/5 pl-4 animate-in slide-in-from-left-4 duration-200">
                    {mediaSubItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNav(sub.id)}
                        className={`block w-full text-left px-4 py-5 text-sm font-bold tracking-widest border-b border-zinc-900/50 last:border-0 ${
                          activePage === sub.id ? 'text-nfp-orange' : 'text-zinc-400'
                        }`}
                      >
                        {sub.label.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 pt-8">
                <button
                  onClick={() => handleNav('membership')}
                  className="w-full bg-nfp-gold text-black px-4 py-6 text-lg font-black uppercase tracking-widest rounded-lg shadow-xl"
                >
                  Join the Party
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Optimized for Mobile Grid */}
      <footer className="bg-black text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mr-3">
                  <img 
                    src="https://i.ibb.co/TDnFWgmw/National-Freedom-Party-logo-svg.png" 
                    alt="NFP Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-black text-lg md:text-xl tracking-tighter uppercase">NFP</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Dedicated to freedom, service, and dignity. A registered political party of South Africa.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-nfp-gold hover:text-black transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-nfp-gold hover:text-black transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-nfp-gold hover:text-black transition-all"><Instagram size={18} /></a>
              </div>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-xs font-black tracking-[0.2em] text-nfp-gold uppercase mb-6 md:mb-8">Media</h3>
              <ul className="space-y-3 md:space-y-4 text-sm text-zinc-400 font-medium">
                <li><button onClick={() => handleNav('media-hub')} className="hover:text-white transition-colors">Media Home</button></li>
                <li><button onClick={() => handleNav('news')} className="hover:text-white transition-colors">Statements</button></li>
                <li><button onClick={() => handleNav('media-gallery')} className="hover:text-white transition-colors">Visual Archive</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-[0.2em] text-nfp-gold uppercase mb-6 md:mb-8">Contact</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-nfp-gold shrink-0" />
                  <span>+27 (0)31 123 4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-nfp-gold shrink-0" />
                  <span>info@nfp.org.za</span>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xs font-black tracking-[0.2em] text-nfp-gold uppercase mb-6 md:mb-8 hidden sm:block">Registered</h3>
              <div className="flex justify-center sm:justify-start">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Logo_of_the_Electoral_Commission_of_South_Africa.svg" alt="IEC" className="h-10 opacity-50 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col items-center text-center text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <p>© {new Date().getFullYear()} National Freedom Party.</p>
            <p className="mt-2">Dignity • Freedom • Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
