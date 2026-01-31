
import React from 'react';
import { FileText, Camera, Mic2, ArrowRight, ChevronRight, PlayCircle, Image as ImageIcon, Newspaper, Archive } from 'lucide-react';

interface MediaHubProps {
  onNavigate: (page: string) => void;
}

const MediaHub: React.FC<MediaHubProps> = ({ onNavigate }) => {
  const mediaSections = [
    {
      id: 'news',
      title: 'Media Statements',
      description: 'Official press releases and institutional announcements from the NFP Media Liaison Office.',
      icon: <Newspaper size={40} className="text-nfp-gold" />,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
      count: 'Official Statements Archive'
    },
    {
      id: 'media-gallery',
      title: 'Visual Gallery',
      description: 'Documenting the movement in action—from national rallies to grassroots community outreach.',
      icon: <ImageIcon size={40} className="text-nfp-gold" />,
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
      count: 'Visual Media Records'
    },
    {
      id: 'media-interviews',
      title: 'Live Interviews',
      description: 'Leadership appearances on national TV, radio broadcasts, and digital media platforms.',
      icon: <PlayCircle size={40} className="text-nfp-gold" />,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
      count: 'Broadcast Archive'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Portal Hero */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Media Room" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-nfp-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-2 border-nfp-gold pl-4">
              NFP Information Desk
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
              Media <span className="text-nfp-gold">Center</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              The authoritative source for all National Freedom Party communications. Access our digital archives, visual history, and broadcast appearances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Hub Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mediaSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-200 shadow-xl hover:shadow-2xl transition-all duration-500 text-left flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20">
                  {section.icon}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <span className="text-nfp-orange font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                  {section.count}
                </span>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight group-hover:text-nfp-gold transition-colors">
                  {section.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                  {section.description}
                </p>
                <div className="mt-auto flex items-center text-xs font-black uppercase tracking-widest text-black group-hover:translate-x-2 transition-transform">
                  Enter Portal <ArrowRight size={16} className="ml-2 text-nfp-gold" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Archive Style Section (Placeholders Only) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Institutional <br /> <span className="text-nfp-gold">Archives</span></h2>
              <p className="text-zinc-600 mb-12 text-lg leading-relaxed">
                We maintain a complete record of our political journey. Every word is preserved for public scrutiny and historical record, documenting our commitment to service and accountability.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                  Request Information
                </button>
                <button className="bg-white border border-zinc-300 text-black px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-colors">
                  Media Kit Portal
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden p-12 flex flex-col items-center justify-center text-center">
              <Archive size={48} className="text-zinc-200 mb-6" />
              <h4 className="text-xl font-black uppercase tracking-tight text-zinc-400 mb-4">Digital Archive Syncing</h4>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">
                The institutional media vault is currently undergoing synchronization. 
                Full access to historical records and statements will be restored shortly.
              </p>
              <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-nfp-gold animate-pulse"></div>
              </div>
              <p className="mt-4 text-[10px] font-black text-zinc-300 uppercase tracking-widest">System Status: Categorizing Records</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Liaison Information */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Mic2 className="mx-auto text-nfp-gold mb-8" size={48} />
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Official Media Liaison</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            For urgent commentary, press accreditation for rallies, or high-resolution official assets, please reach out to our dedicated national media office.
          </p>
          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 inline-block">
            <p className="text-sm font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">Primary Press Email</p>
            <p className="text-2xl font-black text-black">media@nfp.org.za</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaHub;
