
import React from 'react';
import { Rocket, GraduationCap, Users, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const Youth: React.FC = () => {
  return (
    <div className="bg-white">
      {/* High Energy Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="Young South Africans" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-nfp-orange text-black px-4 py-1 rounded-full font-black text-xs uppercase mb-6 animate-bounce">
            <Zap size={14} /> <span>The Future is Now</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
            YOUTH <span className="text-nfp-gold italic">REVOLUTION</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-10 leading-relaxed">
            The National Freedom Party Youth League (NFPYL) and NASMO are the frontline of youth advocacy in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-nfp-gold text-black px-12 py-5 rounded-full font-black text-xl hover:bg-yellow-400 transition-all transform hover:scale-110 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
              JOIN THE LEAGUE
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-12 py-5 rounded-full font-black text-xl hover:bg-white/20 transition-all">
              NASMO STUDENTS
            </button>
          </div>
        </div>
      </section>

      {/* Fast-Paced Stats */}
      <section className="bg-nfp-gold py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Youth Members', value: '45k+' },
            { label: 'Campus Branches', value: '120+' },
            { label: 'Provinces', value: '9/9' },
            { label: 'Impact Score', value: '100%' }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-black/10">
              <p className="text-4xl font-black text-black">{stat.value}</p>
              <p className="text-xs font-bold text-black/60 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars for Youth */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-nfp-orange font-black uppercase text-sm tracking-widest">Our Agenda</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 uppercase leading-tight">
              A Radical Path To <span className="text-zinc-400">Economic Freedom</span>
            </h2>
            <div className="space-y-8">
              {[
                { 
                  icon: <GraduationCap className="text-nfp-gold" size={32} />, 
                  title: "Decolonized Quality Education", 
                  text: "Ensuring that every student in TVETs and Universities has the resources to succeed without the burden of debt."
                },
                { 
                  icon: <Rocket className="text-nfp-gold" size={32} />, 
                  title: "Youth Entrepreneurship", 
                  text: "Breaking the chains of unemployment by funding youth-led startups and local innovations."
                },
                { 
                  icon: <ShieldCheck className="text-nfp-gold" size={32} />, 
                  title: "Political Education", 
                  text: "Training the next generation of ethical leaders to take over the administration of our cities and towns."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-nfp-gold rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Youth engagement"
            />
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl z-20 shadow-xl max-w-xs">
              <p className="font-bold text-lg mb-2">"We are not the leaders of tomorrow, we are the energy of today."</p>
              <p className="text-nfp-gold font-black uppercase text-xs tracking-widest">— NFPYL Chairperson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Card CTA */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nfp-gold/10 rounded-bl-full"></div>
            <Users className="mx-auto text-nfp-gold mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">Ready to Lead?</h2>
            <p className="text-zinc-600 text-lg mb-10 max-w-xl mx-auto">
              Join the National Student Movement (NASMO) or the NFP Youth League today. No fees, just commitment to your future.
            </p>
            <button className="group bg-black text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center mx-auto hover:bg-zinc-800 transition-all">
              SECURE YOUR MEMBERSHIP <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youth;
