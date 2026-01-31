
import React, { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  ShieldCheck, 
  HeartPulse, 
  Zap, 
  Landmark, 
  Users, 
  Download, 
  ChevronDown, 
  ChevronUp,
  Scale,
  FileText,
  Clock,
  ArrowRight,
  Sprout,
  CheckCircle2
} from 'lucide-react';

interface ImplementationStep {
  action: string;
  timeline: string;
}

interface PolicyDetailProps {
  title: string;
  icon: React.ReactNode;
  summary: string;
  pillars: string[];
  implementationSteps: ImplementationStep[];
  isOpen: boolean;
  onToggle: () => void;
}

const PolicySection: React.FC<PolicyDetailProps> = ({ 
  title, 
  icon, 
  summary, 
  pillars, 
  implementationSteps,
  isOpen, 
  onToggle 
}) => (
  <div className="border-b border-zinc-200 last:border-0">
    <button 
      onClick={onToggle}
      className="w-full py-10 flex items-center justify-between text-left hover:bg-zinc-50 px-6 transition-colors group"
    >
      <div className="flex items-center space-x-8">
        <div className="p-5 bg-zinc-100 rounded-2xl text-black group-hover:bg-nfp-gold transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight">{title}</h3>
          <p className="text-zinc-500 text-sm font-medium mt-1 uppercase tracking-wider">{summary}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="hidden md:block text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          {isOpen ? 'Collapse Details' : 'View Framework'}
        </span>
        {isOpen ? <ChevronUp className="text-nfp-gold" /> : <ChevronDown className="text-zinc-300" />}
      </div>
    </button>
    
    {isOpen && (
      <div className="px-6 pb-16 pt-4 bg-zinc-50/50 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="max-w-6xl mx-auto lg:ml-28">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Column 1: Pillars */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-nfp-gold mb-6 flex items-center">
                  <span className="w-8 h-px bg-nfp-gold mr-3"></span> Strategic Pillars
                </h4>
                <ul className="space-y-6">
                  {pillars.map((pillar, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center mr-4 shrink-0 mt-0.5 shadow-sm">
                        <span className="text-[10px] font-black">{i + 1}</span>
                      </div>
                      <span className="text-zinc-700 leading-relaxed font-medium">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="text-nfp-gold" size={20} />
                  <h4 className="text-xs font-black uppercase tracking-widest">Technical Briefing</h4>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                  Full white paper including fiscal projections, legislative requirements, and ward-level implementation guidelines.
                </p>
                <button className="w-full bg-black text-white py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center hover:bg-zinc-800 transition-colors">
                  Download PDF (2.4MB) <Download size={14} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Column 2: Implementation Roadmap */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nfp-gold/5 rounded-bl-full"></div>
                
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black mb-10 flex items-center">
                  <Clock className="mr-3 text-nfp-gold" size={18} /> Implementation Roadmap
                </h4>

                <div className="space-y-10 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-100"></div>

                  {implementationSteps.map((step, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center z-10 border-4 border-white">
                        <CheckCircle2 size={12} className="text-nfp-gold" />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-nfp-gold">
                          Target: {step.timeline}
                        </span>
                      </div>
                      <p className="text-zinc-800 font-bold leading-tight">{step.action}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    Status: Costing Finalized
                  </div>
                  <button className="text-nfp-orange font-black text-[10px] uppercase tracking-widest flex items-center hover:translate-x-1 transition-transform">
                    View Full Strategy <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )}
  </div>
);

const Policies: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('economy');

  const policyData = [
    {
      id: 'economy',
      title: 'Economic Reconstruction',
      icon: <Briefcase size={28} />,
      summary: 'Empowering the "Missing Middle" and rural entrepreneurs.',
      pillars: [
        'Direct SMME Grants: Replacing complicated loan structures with direct equipment grants.',
        'Informal Sector Protection: Legalizing street vendors with proper training and facilities.',
        'Rural Industrialization: Creating processing plants to add value to local products.',
        'Student Entrepreneurship: Zero-interest startup loans for STEM and agricultural graduates.'
      ],
      implementationSteps: [
        { timeline: "Months 1–3", action: "Establish the National SMME Grant Office and appoint technical oversight committees." },
        { timeline: "Months 4–6", action: "Rollout of the 'Vendor Facility Upgrade' pilot program in 15 key municipalities." },
        { timeline: "Year 1", action: "Activation of 3 Rural Industrial Hubs in KwaZulu-Natal and Eastern Cape." },
        { timeline: "Year 2", action: "Full integration of STEM startup funding via provincial treasury portals." }
      ]
    },
    {
      id: 'education',
      title: 'Education & TVET Excellence',
      icon: <BookOpen size={28} />,
      summary: 'Transforming learners into a skilled workforce.',
      pillars: [
        'TVET-Industry Integration: Mandating industry partnerships for guaranteed internships.',
        'Rural Technological Literacy: Expanding coding and robotics beyond urban centers.',
        'Missing Middle Funding: Dedicated bursary schemes for non-NSFAS qualifying students.',
        'ECD Professionalization: Standardized training and living wages for practitioners.'
      ],
      implementationSteps: [
        { timeline: "Months 1–3", action: "Drafting the 'Industry Internship Mandate' for legislative review." },
        { timeline: "Months 6–9", action: "Deployment of mobile coding labs to rural district schools." },
        { timeline: "Year 1", action: "Full audit and re-certification of all TVET vocational curricula." },
        { timeline: "Year 2", action: "Standardization of ECD practitioner wages across all municipalities." }
      ]
    },
    {
      id: 'service',
      title: 'Local Government & Service Delivery',
      icon: <Landmark size={28} />,
      summary: 'Restoring community dignity through essential services.',
      pillars: [
        'Clean Audit Mandate: Zero-tolerance for irregular expenditure with criminal consequences.',
        'Water Security: Urgent rehabilitation of aging infrastructure and smart-meter rollout.',
        'Real-time Accountability: Digital portals to track municipal service requests.',
        'Community-Led Maintenance: Hiring local youth for ward-level asset maintenance.'
      ],
      implementationSteps: [
        { timeline: "Day 100", action: "Mandatory lifestyle audits for all municipal managers and CFOs." },
        { timeline: "Months 4–8", action: "Launch of the 'NFP Service Tracker' app for community oversight." },
        { timeline: "Year 1", action: "Complete overhaul of the water reticulation system in prioritized districts." },
        { timeline: "Year 2", action: "Full enrollment of 50,000 youth in the Ward Maintenance Program." }
      ]
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Food Security',
      icon: <Sprout size={28} />,
      summary: 'Feeding the nation and empowering emerging farmers.',
      pillars: [
        'Commercial Transition Aid: Providing technical and market support for small-scale farmers.',
        'Land Audit & Leasing: Opening unused state land for productive youth and female farmers.',
        'Agricultural Hubs: Establishing shared machinery and logistics networks in every district.',
        'Indigenous Seed Sovereignty: Protecting traditional farming methods and local seeds.'
      ],
      implementationSteps: [
        { timeline: "Months 1–4", action: "District-by-district audit of fallow state-owned agricultural land." },
        { timeline: "Months 6–10", action: "Opening of the first 5 'District Machinery Pools' for communal use." },
        { timeline: "Year 1", action: "Establishment of the National Food Reserve to stabilize produce pricing." },
        { timeline: "Year 2", action: "Implementation of the 'Seed Sovereignty' legal protection framework." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Policy Header */}
      <section className="bg-black text-white py-32 border-b border-nfp-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://i.ibb.co/p6v3Z2mn/NFP.jpg" 
            alt="NFP Policy Framework" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-nfp-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-2 border-nfp-gold pl-4">
              Institutional Policy Framework
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
              The <span className="text-nfp-gold">Service</span> <br /> Manifesto
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              We do not present a wish-list. We present a binding technical contract with the citizens 
              of South Africa—vetted, costed, and ready for immediate deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Accordion Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-12">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight">Policy <span className="text-nfp-gold">Sectors</span></h2>
              <p className="text-zinc-500 mt-2 font-medium">Select a portfolio to view our strategic pillars and implementation roadmap.</p>
            </div>
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-nfp-gold hover:text-black transition-all shadow-lg">
              Download Full Manifesto (PDF) <Download size={18} className="ml-3" />
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
            {policyData.map((policy) => (
              <PolicySection 
                key={policy.id}
                title={policy.title}
                icon={policy.icon}
                summary={policy.summary}
                pillars={policy.pillars}
                implementationSteps={policy.implementationSteps}
                isOpen={openSection === policy.id}
                onToggle={() => setOpenSection(openSection === policy.id ? null : policy.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Governing Principle */}
      <section className="py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-10 border border-zinc-100">
            <Scale className="text-nfp-gold" size={40} />
          </div>
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">Fiscal Responsibility</h2>
          <p className="text-zinc-600 text-lg leading-relaxed mb-12 font-medium">
            Every policy pillar listed above is backed by a rigorous fiscal impact study. 
            The NFP is committed to reallocating municipal budgets from administrative bloat 
            directly toward grassroots infrastructure and SMME empowerment.
          </p>
          <div className="flex justify-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">
            <span>Dignity</span>
            <span className="w-1.5 h-1.5 bg-nfp-gold rounded-full self-center"></span>
            <span>Freedom</span>
            <span className="w-1.5 h-1.5 bg-nfp-gold rounded-full self-center"></span>
            <span>Service</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-nfp-gold text-black overflow-hidden relative">
        <div className="absolute inset-0 bg-black/5 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-black h-full"></div>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              Real Change <br /> Requires Action
            </h3>
            <p className="font-bold text-lg opacity-70">Support the implementation of these policies in your community.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl">
              Join the Movement
            </button>
            <button className="bg-white text-black px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm border-2 border-black hover:bg-zinc-100 transition-all">
              Request a Briefing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
