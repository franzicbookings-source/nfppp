
import React, { useState } from 'react';
import { MOCK_LEADERSHIP } from '../constants';
import { Leader } from '../types';
import { 
  Twitter, 
  Linkedin, 
  ChevronRight, 
  ChevronDown, 
  Users, 
  Landmark, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

const LeaderProfileCard: React.FC<{ leader: Leader; index: number }> = ({ leader, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`reveal-scale delay-${(index % 4 + 1) * 100} group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300`}>
      {/* Photo Section */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={leader.photo} 
          alt={leader.name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Social Links Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {leader.twitter && (
            <a 
              href={leader.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-nfp-gold hover:text-black transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          {leader.linkedin && (
            <a 
              href={leader.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-nfp-gold hover:text-black transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <p className="text-nfp-gold font-black text-[10px] uppercase tracking-[0.3em] mb-1">
            {leader.province ? `${leader.province} • ${leader.title}` : leader.title}
          </p>
          <h4 className="text-2xl font-black text-white uppercase leading-none tracking-tighter">
            {leader.name}
          </h4>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p className={`text-sm text-zinc-600 leading-relaxed transition-all ${isExpanded ? '' : 'line-clamp-2'}`}>
          {leader.bio}
        </p>
        
        <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-between">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-[10px] font-black uppercase tracking-widest text-black hover:text-nfp-orange transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Learn More'} 
            {isExpanded ? <ChevronDown className="ml-2 rotate-180" size={14} /> : <ChevronRight className="ml-2" size={14} />}
          </button>

          <div className="flex space-x-3 md:hidden">
            {leader.twitter && <Twitter size={14} className="text-zinc-400" />}
            {leader.linkedin && <Linkedin size={14} className="text-zinc-400" />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Leadership: React.FC = () => {
  const nec = MOCK_LEADERSHIP.filter(l => l.category === 'NEC');
  const parliament = MOCK_LEADERSHIP.filter(l => l.category === 'Parliament');
  const legislature = MOCK_LEADERSHIP.filter(l => l.category === 'Legislature');

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Header section */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Leaders" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-nfp-gold/5 skew-x-12 transform translate-x-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="reveal-left inline-block border-l-4 border-nfp-gold pl-4 text-nfp-gold font-black tracking-[0.4em] text-[10px] mb-6 uppercase">
              Institutional Leadership
            </span>
            <h1 className="reveal text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
              The <span className="text-nfp-gold">Guardians</span> <br /> of our Vision
            </h1>
            <p className="reveal delay-100 text-xl text-zinc-400 leading-relaxed font-medium">
              The NFP is governed by a collective of seasoned administrators, lawmakers, and community champions committed to constitutional service.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        
        {/* SECTION 1: NEC */}
        <div className="mb-24">
          <div className="reveal flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-zinc-100 pb-8 gap-4 bg-white/90 backdrop-blur-xl p-8 rounded-t-3xl border-x border-t shadow-sm">
            <h3 className="text-3xl font-black flex items-center uppercase tracking-tight">
              <ShieldCheck className="text-nfp-gold mr-4" size={32} />
              National Executive Committee
            </h3>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Institutional Oversight</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nec.map((leader, i) => (
              <LeaderProfileCard key={leader.id} leader={leader} index={i} />
            ))}
          </div>
        </div>

        {/* SECTION 2: PARLIAMENT */}
        <div className="mb-24">
          <div className="reveal flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-zinc-100 pb-8 gap-4 px-4">
            <h3 className="text-3xl font-black flex items-center uppercase tracking-tight">
              <Landmark className="text-nfp-gold mr-4" size={32} />
              Parliamentary Caucus
            </h3>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">National Assembly</span>
          </div>
          {parliament.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {parliament.map((leader, i) => (
                <LeaderProfileCard key={leader.id} leader={leader} index={i} />
              ))}
            </div>
          ) : (
            <div className="reveal bg-zinc-50 p-16 rounded-3xl text-center border border-zinc-100">
              <p className="text-zinc-400 font-black uppercase tracking-widest text-xs">Legislative Data Updating...</p>
            </div>
          )}
        </div>

        {/* SECTION 3: LEGISLATURE */}
        <div className="mb-24">
          <div className="reveal flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-zinc-100 pb-8 gap-4 px-4">
            <h3 className="text-3xl font-black flex items-center uppercase tracking-tight">
              <Users className="text-nfp-gold mr-4" size={32} />
              Provincial Legislators
            </h3>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Regional Accountability</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {legislature.map((leader, i) => (
              <LeaderProfileCard key={leader.id} leader={leader} index={i} />
            ))}
          </div>
        </div>

      </div>

      {/* Deployment Banner */}
      <section className="bg-nfp-gold py-24 border-t border-black/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal-scale w-16 h-16 bg-black text-nfp-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <ShieldCheck size={32} />
          </div>
          <h2 className="reveal text-4xl font-black text-black mb-6 uppercase tracking-tight">Accountable Representation</h2>
          <p className="reveal delay-100 text-lg font-bold text-black/70 mb-12 leading-relaxed">
            Our elected representatives are bound by a strict code of conduct. They are mandated to conduct regular constituency visits to ensure municipal services reach every household.
          </p>
          <div className="reveal delay-200 flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-black text-white px-10 py-5 rounded-sm font-black hover:bg-zinc-800 transition-all uppercase tracking-widest text-xs shadow-2xl">
              Locate Constituency Office
            </button>
            <div className="flex items-center text-black font-black text-xs uppercase tracking-widest px-6 border-l border-black/10">
              <Users size={18} className="mr-3" />
                9 Provinces • 52 Districts
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
