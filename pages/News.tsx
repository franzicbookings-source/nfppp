
import React, { useEffect, useState } from 'react';
import { fetchNFPNews } from '../services/geminiService';
import { NewsItem } from '../types';
import { Calendar, Tag, ExternalLink, Loader2, RefreshCw, ChevronLeft, Link as LinkIcon } from 'lucide-react';

interface NewsProps {
  onNavigate?: (page: string) => void;
}

const News: React.FC<NewsProps> = ({ onNavigate }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const { items, sources } = await fetchNFPNews();
    setNews(items);
    setSources(sources);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Institutional Header */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP News" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate?.('media-hub')}
            className="flex items-center text-nfp-gold text-[10px] font-black uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ChevronLeft size={16} className="mr-2" /> Back to Media Hub
          </button>
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">
            Positive <span className="text-nfp-gold">Advancements</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl font-medium">
            Verified reports of community growth, service delivery success, and nation-building initiatives by the NFP.
          </p>
        </div>
      </section>

      {/* Filter / Archive Navigation Sub-Bar */}
      <div className="bg-zinc-50 border-y border-zinc-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar space-x-8">
            {['Current Feed', 'Grounded Sources', 'Institutional Record'].map((label) => (
              <button
                key={label}
                className={`py-6 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-colors border-b-4 ${
                  label === 'Current Feed' ? 'border-nfp-gold text-black' : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-black text-black uppercase tracking-tight">Constructive Updates</h2>
          </div>
          <button 
            onClick={loadNews}
            disabled={loading}
            className="flex items-center text-[10px] font-black tracking-widest uppercase bg-zinc-100 hover:bg-zinc-200 px-6 py-3 rounded-sm transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin mr-2" size={14} /> : <RefreshCw className="mr-2" size={14} />}
            Grounded Search Sync
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="w-12 h-12 border-4 border-zinc-200 border-t-nfp-gold rounded-full animate-spin"></div>
            <p className="text-zinc-400 font-black uppercase tracking-widest text-xs">Accessing Verified Feed...</p>
          </div>
        ) : news.length > 0 ? (
          <div className="space-y-8">
            {news.map((item, i) => (
              <div key={i} className="group bg-white border border-zinc-100 rounded-2xl p-8 md:p-12 hover:border-nfp-gold hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="flex items-center text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    <Calendar size={12} className="mr-2 text-nfp-gold" /> {item.date}
                  </span>
                  <span className="text-[10px] font-black text-nfp-orange uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-sm border border-orange-100">
                    {item.category || 'CONSTRUCTIVE UPDATE'}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-black mb-6 group-hover:text-nfp-orange transition-colors uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-8 text-lg font-medium">
                  {item.content}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-50 pt-6">
                   <a href={item.url || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black font-black text-[10px] uppercase tracking-widest border-b-2 border-nfp-gold pb-1 hover:translate-x-2 transition-transform">
                      Read Source Document <ExternalLink size={14} className="ml-2" />
                   </a>
                   <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">VERIFIED SEARCH RESULT</span>
                </div>
              </div>
            ))}

            {/* Citations / Grounding Chunks */}
            {sources.length > 0 && (
              <div className="bg-zinc-50 rounded-3xl p-10 mt-16 border border-zinc-200">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8 flex items-center">
                  <LinkIcon size={16} className="mr-3" /> Web Citations & Search Grounding
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sources.map((source, idx) => (
                    <a 
                      key={idx} 
                      href={source.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-4 bg-white rounded-xl border border-zinc-100 hover:border-nfp-gold transition-all"
                    >
                      <p className="text-xs font-black text-black mb-2 line-clamp-1">{source.title}</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase truncate">{source.uri}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-zinc-50 p-20 rounded-3xl text-center border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-bold mb-6">No recent constructive developments found in the current search sync.</p>
            <button onClick={loadNews} className="bg-black text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest">Retry Grounded Sync</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
