
import React from 'react';
import { MEMBERSHIP_TYPES } from '../constants';
import { Check, UserPlus, Info } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-zinc-950 text-white py-12 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Membership" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight leading-tight">Join the movement</h1>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Membership is a commitment to building a transparent, 
            prosperous South Africa for all.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {MEMBERSHIP_TYPES.map((type) => (
            <div 
              key={type.category} 
              className={`flex flex-col p-6 md:p-8 rounded-2xl border transition-all ${
                type.category === 'General' 
                ? 'border-nfp-gold bg-zinc-50 shadow-xl lg:scale-105 z-10' 
                : 'border-zinc-200 bg-white'
              }`}
            >
              {type.category === 'General' && (
                <span className="bg-nfp-gold text-black text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-4">RECOMMENDED</span>
              )}
              <h3 className="text-xl md:text-2xl font-black mb-2">{type.category} Member</h3>
              <p className="text-zinc-600 mb-6 md:mb-8 text-sm md:text-base">{type.description}</p>
              
              <div className="flex-grow">
                <p className="text-xs md:text-sm font-bold text-black mb-4 flex items-center">
                  <Info size={16} className="mr-2 text-nfp-gold" />
                  BENEFITS
                </p>
                <ul className="space-y-3 md:space-y-4 mb-8">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-xs md:text-sm text-zinc-700">
                      <Check size={18} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 md:py-5 rounded-xl font-black transition-all uppercase tracking-widest text-sm ${
                type.category === 'General'
                ? 'bg-black text-white hover:bg-zinc-800'
                : 'bg-nfp-gold text-black hover:bg-yellow-400'
              }`}>
                SIGN UP
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 rounded-xl md:rounded-3xl p-6 md:p-12 border border-zinc-200 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8 flex items-center uppercase tracking-tight">
              <UserPlus size={24} className="mr-3 text-nfp-gold md:w-7 md:h-7" />
              Digital Application
            </h2>
            <p className="text-zinc-500 mb-8 text-[11px] md:text-sm italic leading-relaxed">
              * Secure & POPIA compliant. We do not collect ID numbers at this stage.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">First Names</label>
                <input type="text" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-nfp-gold focus:outline-none transition-all" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Surname</label>
                <input type="text" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-nfp-gold focus:outline-none transition-all" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Cell Number</label>
                <input type="tel" className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-nfp-gold focus:outline-none transition-all" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Province</label>
                <select className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-nfp-gold focus:outline-none transition-all h-12 md:h-14">
                  <option>Select Province</option>
                  <option>KwaZulu-Natal</option>
                  <option>Gauteng</option>
                  <option>Western Cape</option>
                  <option>Eastern Cape</option>
                  <option>Free State</option>
                  <option>Limpopo</option>
                  <option>Mpumalanga</option>
                  <option>North West</option>
                  <option>Northern Cape</option>
                </select>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full bg-black text-white px-8 py-5 rounded-lg font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all shadow-xl text-base">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
