
import React from 'react';
import { ExternalLink, Info, CheckCircle2 } from 'lucide-react';

const VoteFinder: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-200">
          <div className="bg-nfp-gold p-10 md:p-16 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">VOTER EDUCATION</h1>
            <p className="text-lg font-bold opacity-80 uppercase tracking-widest">Election Ready 2024/2025</p>
          </div>
          
          <div className="p-8 md:p-16 space-y-12">
            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center">
                <Info className="text-nfp-gold mr-4" size={32} />
                WHY YOUR VOTE MATTERS
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                The National Freedom Party believes in the power of the ballot to bring real change. 
                Voting is not just a right; it is your voice in deciding who manages your community's 
                resources and services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Ensure service delivery in your ward",
                  "Hold leadership accountable",
                  "Shape national economic policy",
                  "Protect your constitutional freedoms"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-zinc-800 font-semibold">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-zinc-950 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Official Voting Station Finder</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                To find exactly where you are registered to vote and your nearest voting station, 
                you must use the official Electoral Commission of South Africa (IEC) tools. 
                NFP does not store your sensitive voter data.
              </p>
              <a 
                href="https://check.elections.org.za/voter-registration-status" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-nfp-gold text-black px-8 py-4 rounded-xl font-black hover:bg-yellow-400 transition-all"
              >
                GO TO OFFICIAL IEC FINDER <ExternalLink size={20} className="ml-3" />
              </a>
              <p className="mt-4 text-xs text-zinc-500">
                You will be redirected to elections.org.za (Official IEC Website)
              </p>
            </section>

            <section className="border-t border-zinc-100 pt-12">
              <h3 className="font-bold text-xl mb-6">Requirements to Vote</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-zinc-100 p-3 rounded-lg mr-4 font-black text-black">01</div>
                  <div>
                    <h4 className="font-bold">South African Citizenship</h4>
                    <p className="text-sm text-zinc-500">You must be a citizen of the Republic of South Africa.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-zinc-100 p-3 rounded-lg mr-4 font-black text-black">02</div>
                  <div>
                    <h4 className="font-bold">18 Years or Older</h4>
                    <p className="text-sm text-zinc-500">You must be at least 18 years old on election day.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-zinc-100 p-3 rounded-lg mr-4 font-black text-black">03</div>
                  <div>
                    <h4 className="font-bold">Valid Identity Document</h4>
                    <p className="text-sm text-zinc-500">Green barcoded ID book, smartcard ID, or temporary ID certificate.</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteFinder;
