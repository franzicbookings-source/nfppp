
import React from 'react';
import { MOCK_INTERVIEWS } from '../constants';
import { PlayCircle, FileText, Radio, Calendar, ExternalLink, User, ArrowRight, Mic2 } from 'lucide-react';

const Interviews: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return <PlayCircle size={20} className="text-nfp-orange" />;
      case 'Article': return <FileText size={20} className="text-nfp-gold" />;
      case 'Radio': return <Radio size={20} className="text-zinc-400" />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Interviews" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-nfp-gold/5 skew-x-12 translate-x-32"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-nfp-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block border-l-2 border-nfp-gold pl-4">
            Official Media Center
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Leadership <span className="text-nfp-gold">Interviews</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Policy debates, national addresses, and key media engagements featuring the NFP National Executive.
          </p>
        </div>
      </section>

      {/* Sub-Navigation (Media Hub) */}
      <div className="bg-zinc-50 border-y border-zinc-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar space-x-8">
            {['news', 'media-gallery', 'media-interviews'].map((page) => (
              <button
                key={page}
                className={`py-6 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-colors border-b-4 ${
                  page === 'media-interviews' ? 'border-nfp-gold text-black' : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                {page.replace('media-', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {MOCK_INTERVIEWS.length > 0 ? (
            <div className="space-y-12">
              {MOCK_INTERVIEWS.map((interview) => (
                <div key={interview.id} className="group flex flex-col md:flex-row gap-8 bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200 hover:border-nfp-gold transition-all">
                  <div className="shrink-0 w-20 h-20 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center">
                    {getTypeIcon(interview.type)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-100">
                        <Calendar size={12} className="mr-2 text-nfp-gold" /> {new Date(interview.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-nfp-orange">
                        <ExternalLink size={12} className="mr-2" /> {interview.source}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-nfp-orange transition-colors">
                      {interview.title}
                    </h3>

                    <div className="flex items-center text-xs font-bold text-zinc-500 mb-6">
                      <User size={14} className="mr-2 text-nfp-gold" /> {interview.interviewee}
                    </div>

                    <p className="text-zinc-600 leading-relaxed mb-8">
                      {interview.summary}
                    </p>

                    <button className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-black border-b-2 border-nfp-gold pb-1 hover:translate-x-2 transition-transform">
                      {interview.type === 'Video' ? 'Watch Interview' : interview.type === 'Radio' ? 'Listen Now' : 'Read Article'} 
                      <ArrowRight size={14} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-50 rounded-[3rem] p-20 text-center border-2 border-dashed border-zinc-200 flex flex-col items-center">
              <Mic2 className="text-zinc-300 mb-8" size={64} />
              <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-400 mb-4">Broadcast Archive Offline</h3>
              <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
                The institutional broadcast library is undergoing synchronization with national media partners. 
                Full interview transcripts and video highlights will be available shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Interview Request Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Press & Media Office</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            Journalists and broadcasters seeking official NFP commentary or leadership availability for panels and interviews should contact our national media liaison.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all">
              Schedule an Interview
            </button>
            <button className="bg-white border border-zinc-300 text-black px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all">
              Request Press Pass
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interviews;
