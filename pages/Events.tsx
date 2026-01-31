
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { Calendar, MapPin, Clock, Bell, Tag, ArrowRight, Share2, Map, Users, CheckCircle2, History } from 'lucide-react';

const Events: React.FC = () => {
  // Logic to separate upcoming and past events
  const today = new Date();
  const upcomingEvents = MOCK_EVENTS.filter(e => new Date(e.date) >= today);
  const pastEvents = MOCK_EVENTS.filter(e => new Date(e.date) < today);

  // Focus on Nongoma event as the featured upcoming one
  const featuredEvent = upcomingEvents.find(e => e.id === 'e5') || upcomingEvents[0];
  const otherUpcoming = upcomingEvents.filter(e => e.id !== featuredEvent.id);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. INSTITUTIONAL HERO SECTION */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Events" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="h-0.5 w-12 bg-nfp-gold"></span>
              <span className="text-nfp-gold font-black uppercase tracking-[0.3em] text-xs">Official Engagements</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              Movement <br />
              <span className="text-nfp-gold">In Action</span>
            </h1>
            <p className="text-xl text-zinc-300 font-medium leading-relaxed max-w-xl">
              Transparent, accountable, and present. Join the NFP leadership as we engage with communities across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED UPCOMING EVENT */}
      {featuredEvent && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 border-b border-zinc-100 pb-8 flex justify-between items-end">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-nfp-gold mb-2">Upcoming Priority</h2>
                <h3 className="text-3xl font-black uppercase tracking-tight text-black">Featured Mobilization</h3>
              </div>
              <div className="hidden md:flex space-x-2">
                 <span className="bg-black text-nfp-gold text-[10px] font-black px-4 py-2 rounded uppercase tracking-widest">Upcoming Strategy</span>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/2 aspect-video lg:aspect-auto relative">
                <img 
                  src={featuredEvent.image || "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1200"} 
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-6 left-6 bg-nfp-gold text-black font-black text-[10px] px-4 py-2 uppercase tracking-widest shadow-xl">
                  {featuredEvent.category}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-nfp-orange font-black text-[10px] uppercase tracking-widest mb-6">
                  <Calendar size={14} />
                  <span>{new Date(featuredEvent.date).toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight leading-tight">
                  {featuredEvent.title}
                </h4>
                <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                  {featuredEvent.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 py-8 border-y border-zinc-200">
                  <div className="flex items-center text-zinc-500 font-bold uppercase text-xs tracking-widest">
                    <MapPin size={18} className="text-nfp-gold mr-3" />
                    {featuredEvent.location}
                  </div>
                  <div className="flex items-center text-zinc-500 font-bold uppercase text-xs tracking-widest">
                    <Clock size={18} className="text-nfp-gold mr-3" />
                    {featuredEvent.time}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors flex items-center justify-center">
                    Register Attendance <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button className="bg-transparent border border-zinc-300 text-black px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-colors flex items-center justify-center">
                    Share Event <Share2 size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. OTHER UPCOMING EVENTS GRID */}
      {otherUpcoming.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black uppercase tracking-tight text-black mb-4">Other <span className="text-nfp-gold">Engagements</span></h2>
                <p className="text-zinc-500 font-medium">Official schedule for leadership briefings and community mobilization.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherUpcoming.map((event) => (
                <div key={event.id} className="bg-white group flex flex-col rounded-xl overflow-hidden border border-zinc-200 hover:border-nfp-gold transition-all duration-300">
                  <div className="h-52 relative overflow-hidden">
                    <img 
                      src={event.image || "https://images.unsplash.com/photo-1540575861501-7c911b2c2c47?auto=format&fit=crop&q=80&w=800"} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-nfp-gold">{event.category}</span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
                      <Calendar size={12} className="mr-2 text-nfp-gold" />
                      <span>{new Date(event.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    
                    <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                        <MapPin size={14} className="mr-2 text-nfp-gold" />
                        {event.location}
                      </div>
                    </div>

                    <button className="w-full bg-zinc-100 text-black py-4 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center justify-center hover:bg-nfp-gold transition-colors">
                      Remind Me <Bell size={14} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PAST EVENTS SECTION */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-b border-zinc-100 pb-8 flex items-center justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tight text-black flex items-center">
              <History size={28} className="mr-4 text-zinc-400" />
              Recent <span className="text-zinc-400 ml-2">Engagements</span>
            </h2>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Institutional Records</span>
          </div>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="flex flex-col md:flex-row gap-8 bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:opacity-100 transition-all">
                <div className="md:w-64 h-40 shrink-0 overflow-hidden rounded-xl border border-zinc-200">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{new Date(event.date).toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</span>
                    <span className="text-[9px] font-black bg-zinc-200 text-zinc-600 px-3 py-1 rounded uppercase tracking-widest">{event.category}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2">{event.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    <MapPin size={14} className="mr-2 text-nfp-gold" /> {event.location}
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="text-[10px] font-black uppercase tracking-widest border border-zinc-300 px-6 py-3 rounded hover:bg-black hover:text-white transition-all">
                    View Archive
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL PROTOCOL */}
      <section className="py-24 bg-zinc-950 text-white border-t border-nfp-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Deployment Protocol</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                The National Freedom Party follows a strict institutional protocol for all public events. 
                Our leaders are mandated to provide formal reports on all community engagements to the Secretary-General's office.
              </p>
              <div className="space-y-4">
                {[
                  "Official identification required for closed sessions",
                  "Media accreditation required 48 hours in advance",
                  "Security protocols managed by national structures",
                  "COVID-19 health protocols strictly observed where applicable"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-medium text-zinc-300">
                    <CheckCircle2 className="text-nfp-gold shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 text-center">
              <Users className="mx-auto mb-6 text-nfp-gold" size={48} />
              <h3 className="text-xl font-black mb-4 uppercase">Host a Community Meeting</h3>
              <p className="text-zinc-500 text-sm mb-8">
                Wards and branches wishing to host national leadership must submit a formal request via the provincial organizing secretary.
              </p>
              <button className="w-full bg-nfp-gold text-black py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-colors">
                Contact Organizing Office
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
