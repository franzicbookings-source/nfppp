
import React from 'react';
import { Award, Landmark, History, Users, Heart, Target, Quote, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* 1. INSTITUTIONAL HERO */}
      <section className="bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Movement" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-nfp-gold/5 skew-x-12 translate-x-24"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="reveal-left inline-block border-l-4 border-nfp-gold pl-4 text-nfp-gold font-black tracking-widest text-[10px] mb-6 uppercase">
              Official Institutional History
            </span>
            <h1 className="reveal text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
              A Legacy of <br />
              <span className="text-nfp-gold underline decoration-4 underline-offset-8">Service</span> & Change
            </h1>
            <p className="reveal delay-100 text-xl text-zinc-400 leading-relaxed font-medium">
              Tracing the journey of the National Freedom Party from its historic foundation in 2011 to its current standing as a pillar of South African democracy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER'S TRIBUTE & BIOGRAPHY */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Image and Timeline Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="reveal-left relative group">
                <div className="absolute -top-6 -left-6 w-full h-full border-4 border-nfp-gold rounded-3xl -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border-4 border-white">
                  {/* Verified Founder Image URL */}
                  <img 
                    src="https://i.ibb.co/qL55tM9S/7648-large.jpg" 
                    alt="Zanele kaMagwaza-Msibi - NFP Founder" 
                    className="w-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-8 bg-black text-white rounded-xl border border-nfp-gold/30 shadow-2xl">
                   <div className="flex items-center space-x-3 mb-2">
                     <ShieldCheck className="text-nfp-gold" size={24} />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-nfp-gold">Eternal Visionary</span>
                   </div>
                   <h3 className="text-2xl font-black uppercase mb-1">Zanele kaMagwaza-Msibi</h3>
                   <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">Founder & President Emerita | 1962 – 2021</p>
                </div>
              </div>

              <div className="reveal delay-200 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                <h4 className="text-lg font-black uppercase mb-6 flex items-center">
                  <Landmark className="mr-3 text-nfp-gold" size={24} /> 
                  Institutional Milestones
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="font-black text-nfp-gold mr-4">2000s</span>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">Pioneered rural development as the Mayor of Zululand District, achieving clean audits and radical delivery.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-black text-nfp-gold mr-4">2011</span>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">Launched the NFP in Durban, igniting a national movement for the "Voiceless".</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-black text-nfp-gold mr-4">2014</span>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">Served as National Deputy Minister, ensuring grassroots needs reached the highest levels of Cabinet.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Biography Content Column */}
            <div className="lg:col-span-7 prose prose-lg max-w-none">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-8 uppercase tracking-tight leading-none">
                  A Tribute to <br /><span className="text-nfp-gold">Mother Zanele</span>
                </h2>
                
                <div className="bg-zinc-950 p-10 rounded-3xl text-white mb-10 shadow-xl border-l-8 border-nfp-gold relative">
                  <div className="absolute top-4 right-8 opacity-10">
                    <Quote size={80} />
                  </div>
                  <Quote className="text-nfp-gold mb-6" size={40} />
                  <p className="text-xl md:text-2xl font-black italic leading-tight uppercase tracking-tight">
                    "I did not leave to destroy; I left to build a home for the homeless and a voice for the voiceless. The NFP is a house of service."
                  </p>
                  <p className="mt-4 text-nfp-gold font-black text-xs uppercase tracking-widest">— From the Launch Address, 2011</p>
                </div>

                <div className="space-y-6 text-zinc-700 leading-relaxed text-lg font-medium">
                  <p>
                    Born on 1 February 1962 in Makhosini, Zanele kaMagwaza-Msibi emerged as a beacon of hope for South Africa's rural communities. Her life was defined by a singular, unshakeable focus: **Service above Politics.**
                  </p>

                  <h3 className="text-2xl font-black text-black uppercase mt-12 mb-6 tracking-tight">Champion of the "Missing Middle"</h3>
                  <p>
                    Long before it became a national slogan, kaMagwaza-Msibi identified the struggle of the "Missing Middle"—those forgotten by the system. As District Mayor, she didn't just manage budgets; she personally inspected water pipes and electrical lines, ensuring that every cent translated into a tangible improvement in human dignity.
                  </p>

                  <h3 className="text-2xl font-black text-black uppercase mt-12 mb-6 tracking-tight">The 2011 Awakening</h3>
                  <p>
                    The birth of the NFP on 25 January 2011 was a moment of political transformation. It was a call to arms for those who wanted a modern, efficient, and ethical alternative. Within months, under her leadership, the NFP became the 4th largest party in South Africa, securing the trust of over 1.2 million voters.
                  </p>

                  <h3 className="text-2xl font-black text-black uppercase mt-12 mb-6 tracking-tight">An Eternal Legacy</h3>
                  <p>
                    Though she left us in September 2021, Mother Zanele's spirit remains the North Star of the National Freedom Party. We don't just remember her; we honor her by carrying out her mandate of radical service delivery. Every clinic we upgrade and every SMME we support is a living tribute to her eternal vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL HISTORY AND FOUNDATION */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <span className="text-nfp-orange font-black uppercase text-sm tracking-widest block mb-4">Institutional Roots</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-tight">
                The Foundation of <br /><span className="text-nfp-gold">The People's Party</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-nfp-gold">
                    <History size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The 2011 Split</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">The NFP was born out of a national necessity to create a party that focused on modern, efficient governance while respecting deep cultural roots. It was an evolution of political thought.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-nfp-gold">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Electoral Success</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">Securing over 1.2 million votes at launch, the NFP established itself as a kingmaker and a serious legislative force in the South African landscape.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-nfp-gold">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">Service to the Forgotten</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">We are the house of those who are too rich for grants but too poor for private equity. We are the party of the working class and the emerging entrepreneur.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 reveal-right">
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col items-center text-center hover:border-nfp-gold transition-colors duration-500">
                <Landmark className="text-nfp-gold mb-4" size={40} />
                <p className="text-3xl font-black mb-1">9/9</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Provinces Active</p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col items-center text-center mt-12 hover:border-nfp-gold transition-colors duration-500">
                <Award className="text-nfp-gold mb-4" size={40} />
                <p className="text-3xl font-black mb-1">2011</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Year Founded</p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col items-center text-center hover:border-nfp-gold transition-colors duration-500">
                <Heart className="text-nfp-gold mb-4" size={40} />
                <p className="text-3xl font-black mb-1">100%</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Service Commitment</p>
              </div>
              <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col items-center text-center mt-12 hover:border-nfp-gold transition-colors duration-500">
                <Users className="text-nfp-gold mb-4" size={40} />
                <p className="text-3xl font-black mb-1">4th</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Largest National Party</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - JOIN THE MOVEMENT */}
      <section className="py-24 bg-nfp-gold text-black overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal-scale">
            <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Carry the Torch</h2>
            <p className="text-xl font-bold mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
              The story of the National Freedom Party is being written by people like you. Join the legacy of Zanele kaMagwaza-Msibi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-black text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-zinc-800 transition-all transform hover:scale-105">
                Join the NFP
              </button>
              <button className="bg-white text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-lg border-2 border-black hover:bg-zinc-50 transition-all transform hover:scale-105">
                Youth League
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
