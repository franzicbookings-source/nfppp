
import React, { useState } from 'react';
import { MOCK_GALLERY } from '../constants';
import { Camera, Calendar, Tag, ChevronRight, Maximize2, Archive } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Rallies', 'Community', 'Leadership', 'NEC'];

  const filteredImages = filter === 'All' 
    ? MOCK_GALLERY 
    : MOCK_GALLERY.filter(img => img.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Institutional Media Header */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Gallery" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-nfp-gold/5 -skew-x-12 translate-x-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-nfp-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block border-l-2 border-nfp-gold pl-4">
            Official Media Center
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Visual <span className="text-nfp-gold">Archives</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Documenting the journey of service, mobilization, and community engagement across South Africa.
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
                  page === 'media-gallery' ? 'border-nfp-gold text-black' : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                {page.replace('media-', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-black text-white shadow-lg' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div key={image.id} className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white" size={32} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 backdrop-blur-md text-nfp-gold text-[9px] font-black px-3 py-1 rounded-sm uppercase tracking-widest border border-white/10">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4">
                      <Calendar size={12} className="mr-2 text-nfp-gold" />
                      {new Date(image.date).toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}
                    </div>
                    <p className="text-zinc-800 font-bold leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-50 rounded-[3rem] p-20 text-center border-2 border-dashed border-zinc-200 flex flex-col items-center">
              <Archive className="text-zinc-300 mb-8" size={64} />
              <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-400 mb-4">Institutional Gallery Offline</h3>
              <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
                The visual archives are currently being digitized and categorized for the 2024/2025 electoral cycle. 
                Please check back soon for the official gallery release.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Media Request CTA */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Camera className="mx-auto text-nfp-gold mb-8" size={48} />
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Access Institutional Assets</h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            For high-resolution official portraits, event photography for publication, or party branding assets, please contact our Media Liaison Office.
          </p>
          <button className="bg-nfp-gold text-black px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-colors">
            Request Media Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
