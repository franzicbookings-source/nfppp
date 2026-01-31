
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, ShieldCheck, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert("Thank you for reaching out to the National Freedom Party. Your inquiry has been logged securely.");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Institutional Hero */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Contact" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-nfp-gold/10 -skew-x-12 translate-x-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="inline-block border-l-4 border-nfp-gold pl-4 text-nfp-gold font-black tracking-widest text-sm mb-4 uppercase">
            Official Inquiry Portal
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Contact <span className="text-nfp-gold">The NFP</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Our administrative offices are ready to assist with membership queries, media requests, and constituent matters.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 h-full">
              <h3 className="text-xl font-black mb-8 uppercase flex items-center">
                <span className="w-8 h-1 bg-nfp-gold mr-3"></span>
                Headquarters
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-zinc-50 p-4 rounded-xl mr-5 group-hover:bg-nfp-gold group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-black font-bold">Durban Central, KwaZulu-Natal,<br />South Africa</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-zinc-50 p-4 rounded-xl mr-5 group-hover:bg-nfp-gold group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-black font-bold">+27 (0)31 123 4567</p>
                    <p className="text-zinc-500 text-sm">Mon - Fri: 08:30 - 16:30</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-zinc-50 p-4 rounded-xl mr-5 group-hover:bg-nfp-gold group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-black font-bold">info@nfp.org.za</p>
                    <p className="text-zinc-500 text-sm">General Inquiries</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-100">
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-6 text-center">Follow our movement</p>
                <div className="flex justify-center space-x-6">
                  <Facebook className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
                  <Twitter className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
                  <Instagram className="text-zinc-400 hover:text-black cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <h2 className="text-3xl font-black uppercase">Send a <span className="text-nfp-gold">Message</span></h2>
                <div className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                  <ShieldCheck size={14} className="mr-2" /> POPIA COMPLIANT
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nfp-gold focus:border-transparent outline-none transition-all"
                      placeholder="e.g. Sipho Nkosi"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nfp-gold focus:border-transparent outline-none transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nfp-gold focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>General Support</option>
                    <option>Membership Application Query</option>
                    <option>Media & Press Office</option>
                    <option>Branch Information</option>
                    <option>Policy Questions</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-nfp-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we assist you today?"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                  <div className="flex items-center text-xs text-zinc-400 font-medium">
                    <Clock size={14} className="mr-2" />
                    Typical response time: Within 24 hours
                  </div>
                  <button 
                    type="submit" 
                    className="bg-black text-white px-12 py-5 rounded-full font-black flex items-center justify-center hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-lg group uppercase tracking-widest"
                  >
                    Send Message <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Banner */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Institutional Integrity</h3>
          <p className="text-zinc-500 leading-relaxed mb-10">
            The National Freedom Party is committed to the protection of your personal information. 
            All submissions through this portal are encrypted and managed in accordance with the 
            Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <div className="inline-flex items-center space-x-2 text-zinc-300 font-black text-[10px] tracking-[0.3em] uppercase">
            <span>Dignity</span>
            <span className="w-1.5 h-1.5 bg-nfp-gold rounded-full"></span>
            <span>Freedom</span>
            <span className="w-1.5 h-1.5 bg-nfp-gold rounded-full"></span>
            <span>Service</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
