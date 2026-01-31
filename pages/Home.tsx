
import React, { useEffect, useState } from 'react';
import { SLOGAN, CORE_VALUES, MOCK_POLICIES, MOCK_LEADERSHIP } from '../constants';
import { fetchNFPNews } from '../services/geminiService';
import { NewsItem } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Calendar, 
  ChevronRight,
  ExternalLink,
  Target,
  Landmark, 
  ShieldAlert,
  BookOpen,
  Briefcase,
  HeartPulse,
  Link as LinkIcon
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [newsSources, setNewsSources] = useState<any[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://i.ibb.co/p6v3Z2mn/NFP.jpg",
    "https://i.ibb.co/Mx8JNLhw/National-Freedom-PArty-resized.jpg",
    "https://i.ibb.co/RThBk1yg/530516565-18087434026765472-6816019017426314541-n.jpg"
  ];

  useEffect(() => {
    const loadNews = async () => {
      setLoadingNews(true);
      const { items, sources } = await fetchNFPNews();
      setLatestNews(items.slice(0, 3));
      setNewsSources(sources);
      setLoadingNews(false);
    };
    loadNews();

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      
      {/* 2. HERO SECTION - Optimized for Mobile Flow */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                currentSlide === idx ? 'opacity-60 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img 
                src={img} 
                alt={`NFP Slide ${idx + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear"
                style={{ transform: currentSlide === idx ? 'scale(1.1)' : 'scale(1)' }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 md:h-4 bg-nfp-gold z-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20 md:pt-20 md:pb-32">
          <div className="max-w-4xl">
            <div className="reveal-left inline-block bg-nfp-gold text-black px-3 py-1 md:px-4 md:py-1 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 shadow-xl">
              National Freedom Party
            </div>
            
            <h1 className="reveal text-4xl sm:text-6xl md:text-[8rem] font-black mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] uppercase tracking-tighter drop-shadow-2xl text-white">
              A Home for <br className="hidden sm:block" /> the <span className="text-nfp-gold">Homeless.</span>
              <span className="hidden sm:inline"> <br /> A Voice for the <br className="hidden md:block" /> <span className="italic">Voiceless.</span></span>
            </h1>
            
            <p className="reveal delay-100 text-lg md:text-2xl text-zinc-100 mb-8 md:mb-12 leading-relaxed max-w-2xl font-bold uppercase tracking-tight border-l-4 md:border-l-8 border-nfp-gold pl-4 md:pl-8 drop-shadow-lg line-clamp-3 sm:line-clamp-none">
              {SLOGAN} — Building a new dawn of accountability and radical service delivery.
            </p>
            
            <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => onNavigate('membership')}
                className="w-full sm:w-auto bg-nfp-gold text-black px-8 md:px-12 py-4 md:py-6 rounded-sm font-black text-lg md:text-xl flex items-center justify-center hover:bg-white transition-all transform hover:scale-105 shadow-2xl uppercase group"
              >
                Join Now <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('youth')}
                className="w-full sm:w-auto bg-black/40 border-2 border-white text-white px-8 md:px-12 py-4 md:py-6 rounded-sm font-black text-lg md:text-xl hover:bg-white hover:text-black transition-all uppercase tracking-widest backdrop-blur-md"
              >
                Youth League
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Hidden on extra small screens to save space */}
        <div className="hidden sm:flex absolute bottom-12 right-12 z-30 space-x-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 ${
                currentSlide === idx ? 'w-12 bg-nfp-gold' : 'w-4 bg-white/40 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. ABOUT THE PARTY - Shorter Copy for Mobile */}
      <section className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="reveal-left relative order-2 lg:order-1 flex items-center justify-center bg-zinc-50 rounded-2xl md:rounded-3xl p-8 md:p-20 border-2 border-zinc-100 shadow-inner group">
              <img 
                src="https://i.ibb.co/TDnFWgmw/National-Freedom-Party-logo-svg.png" 
                alt="NFP Logo" 
                className="w-40 md:w-full max-w-xs md:max-w-md object-contain transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-black p-6 md:p-10 rounded-xl md:rounded-2xl shadow-2xl hidden sm:block border-b-4 md:border-b-8 border-nfp-gold">
                <p className="text-3xl md:text-5xl font-black text-nfp-gold leading-none tracking-tighter">EST. 2011</p>
                <p className="text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mt-2">Community First</p>
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-nfp-orange uppercase mb-4 md:mb-6 flex items-center justify-center lg:justify-start">
                <span className="w-8 md:w-12 h-1 bg-nfp-orange mr-4"></span> Credibility
              </h2>
              <h3 className="text-3xl md:text-6xl font-black text-black mb-4 md:mb-8 leading-tight uppercase tracking-tighter">
                Action Over <br className="hidden md:block" /><span className="text-nfp-gold">Promises.</span>
              </h3>
              <p className="text-base md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-10 font-medium">
                The NFP stands for a radical shift. We focus on pragmatic, ethical service delivery reaching every South African—from rural villages to urban centers.
              </p>
              <button 
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center font-black text-black text-xs md:text-sm uppercase tracking-widest border-b-4 border-nfp-gold pb-2 hover:text-nfp-orange transition-colors"
              >
                Our Legacy <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & VALUES - Staggered Grid for Mobile Tap Targets */}
      <section className="py-16 md:py-32 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-black mb-4 md:mb-6 uppercase tracking-tighter">Our Pillars</h2>
            <div className="w-16 md:w-24 h-2 md:h-3 bg-nfp-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { 
                title: "Dignity", 
                desc: "Every citizen deserves clean water, electricity, and safety.",
                icon: <HeartPulse className="text-nfp-gold" size={40} />
              },
              { 
                title: "Freedom", 
                desc: "True freedom is economic. We empower small businesses.",
                icon: <Zap className="text-nfp-gold" size={40} />
              },
              { 
                title: "Service", 
                desc: "Accountability is our standard. Public servants first.",
                icon: <ShieldCheck className="text-nfp-gold" size={40} />
              }
            ].map((pillar, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} bg-white p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all group text-center`}>
                <div className="mb-4 md:mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h4 className="text-xl md:text-3xl font-black mb-2 md:mb-4 uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-zinc-500 text-sm md:text-lg leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP PREVIEW - Mobile Grid Stacking */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-black mb-2 md:mb-4 uppercase tracking-tighter">Leadership</h2>
              <p className="text-base md:text-xl text-zinc-500 font-medium italic">"Integrity through action."</p>
            </div>
            <button 
              onClick={() => onNavigate('leadership')}
              className="w-full sm:w-auto bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-nfp-gold hover:text-black transition-all shadow-xl"
            >
              Meet The NEC
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {MOCK_LEADERSHIP.slice(0, 4).map((leader, i) => (
              <div key={leader.id} className={`reveal-scale delay-${(i + 1) * 100} group relative aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden border border-zinc-100 shadow-md`}>
                <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-3 md:p-8 w-full">
                  <h4 className="text-sm md:text-2xl font-black text-white uppercase leading-tight mb-1">{leader.name}</h4>
                  <p className="text-nfp-gold font-black text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.3em] truncate">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION - Surfacing CTA earlier in flow for mobile */}
      <section className="py-20 md:py-32 bg-nfp-gold text-black border-y-4 md:border-y-8 border-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="reveal text-4xl md:text-[7rem] font-black mb-6 md:mb-10 uppercase tracking-tighter leading-none">Join us.</h2>
          <p className="reveal delay-100 text-lg md:text-3xl font-black mb-8 md:mb-12 opacity-80 max-w-2xl mx-auto uppercase tracking-wide leading-tight px-4">
            Be the change-maker. Join thousands building a new dawn.
          </p>
          <div className="reveal delay-200 flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button 
              onClick={() => onNavigate('membership')}
              className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-sm font-black text-lg md:text-xl hover:bg-zinc-800 transition-all uppercase tracking-widest shadow-2xl"
            >
              Sign Up
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white border-2 border-black text-black px-10 py-5 rounded-sm font-black text-lg md:text-xl hover:bg-zinc-100 transition-all uppercase tracking-widest"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* 8. NEWS & UPDATES - Simplified for Mobile */}
      <section className="py-16 md:py-32 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col sm:flex-row items-center justify-between mb-10 md:mb-20 border-b-2 border-zinc-100 pb-6 md:pb-8 gap-4">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">Media</h2>
            <button onClick={() => onNavigate('news')} className="flex items-center text-[10px] font-black uppercase tracking-widest text-nfp-orange hover:translate-x-2 transition-transform">
              Visit Center <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-10 md:mb-16">
            {loadingNews ? (
              [1, 2, 3].map(i => (
                <div key={i} className="bg-zinc-50 animate-pulse rounded-2xl p-8 md:p-10 h-64 md:h-80 flex flex-col justify-end" />
              ))
            ) : latestNews.length > 0 ? latestNews.map((item, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} bg-zinc-50 rounded-2xl p-6 md:p-10 border border-zinc-100 hover:shadow-xl transition-all group flex flex-col`}>
                <span className="text-[8px] md:text-[10px] font-black text-nfp-gold uppercase tracking-[0.2em] md:tracking-[0.3em] block mb-4">
                  {item.date}
                </span>
                <h4 className="text-lg md:text-2xl font-black mb-4 uppercase tracking-tight leading-tight group-hover:text-nfp-orange transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="hidden sm:block text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">{item.content}</p>
                <div className="mt-auto">
                  <a href={item.url || "#"} target="_blank" rel="noopener noreferrer" className="text-black font-black text-[10px] uppercase tracking-widest border-b-2 border-nfp-gold pb-1 inline-flex items-center">
                    Read More <ExternalLink size={12} className="ml-2" />
                  </a>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-12 text-center text-zinc-400 font-black uppercase tracking-widest text-xs">
                Syncing search feed...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 9. FIND WHERE I VOTE - Simplified Card for Mobile */}
      <section className="py-12 md:py-24 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-scale bg-black text-white rounded-2xl md:rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 border-b-[8px] md:border-b-[16px] border-nfp-gold shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl text-center lg:text-left z-10">
              <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tighter">Ready To Vote?</h3>
              <p className="text-zinc-400 text-sm md:text-xl font-medium leading-relaxed mb-6 md:mb-0">Find your nearest voting station via the official IEC portal.</p>
            </div>
            <a 
              href="https://check.elections.org.za/voter-registration-status" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-nfp-gold text-black px-8 md:px-12 py-4 md:py-6 rounded-sm font-black uppercase tracking-widest text-sm md:text-lg flex items-center justify-center hover:bg-white transition-all shadow-2xl z-10"
            >
              Verify Station <ExternalLink size={20} className="ml-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
