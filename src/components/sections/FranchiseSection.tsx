import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FranchiseBenefit {
  id: string;
  number: string;
  title: string;
  description: string;
}

const FRANCHISE_BENEFITS: FranchiseBenefit[] = [
  {
    id: 'shared-investment',
    number: '01',
    title: '50% Shared Investment',
    description: 'Evoltek funds half the project.'
  },
  {
    id: 'return-options',
    number: '02',
    title: 'Multiple Return Options',
    description: 'Choose percentage or fixed return.'
  },
  {
    id: 'long-term-security',
    number: '03',
    title: 'Long-Term Security',
    description: '5 or 10-year agreements.'
  },
  {
    id: 'managed-operations',
    number: '04',
    title: 'Managed Operations',
    description: 'Evoltek handles technical operations and maintenance.'
  },
  {
    id: 'fast-dc-charging',
    number: '05',
    title: 'Fast DC Charging',
    description: 'Highway and city charging solutions.'
  },
  {
    id: 'additional-income',
    number: '06',
    title: 'Additional Income',
    description: 'Add cafeteria, restaurant or gaming facilities.'
  },
  {
    id: 'landowner-opportunity',
    number: '07',
    title: 'Landowner Opportunity',
    description: 'Provide land and earn rent.'
  },
  {
    id: 'quick-launch',
    number: '08',
    title: 'Quick Launch',
    description: 'Station setup in about 2 months.'
  }
];

interface FranchiseSectionProps {
  openModalWithOption: (option: string) => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({ openModalWithOption }) => {
  return (
    <section id="franchise" className="w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-green-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Centered above cards like other sections) */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>FRANCHISE OPPORTUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#1C2029] tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
            Build Your Own EV Charging Business With Evoltek
          </h2>
        </div>

        {/* Content Grid: Left Image & CTA | Right 2-per-row Benefit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Evoltek Highway EV Charging Station Hub & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/80 border border-slate-200/90 relative group">
              <img
                src="/evoltek_franchise_hub.jpg"
                alt="Evoltek Highway EV Charging Station Hub"
                className="w-full h-[280px] sm:h-[340px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle Gradient & Status Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 right-4 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#32aa15] animate-pulse" />
                  Turnkey Evoltek EV Hub
                </span>
                <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 hidden sm:inline-block">
                  Live Highway Station
                </span>
              </div>
            </div>

            {/* Pill CTA Button */}
            <div className="w-full flex justify-center sm:justify-start">
              <button
                onClick={() => openModalWithOption('Franchise Opportunity')}
                className="inline-flex items-center gap-3 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#32aa15]/25 hover:shadow-xl hover:shadow-[#32aa15]/30 transition-all duration-300 group cursor-pointer active:scale-95"
              >
                <span>Apply for Franchise</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#32aa15] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Benefit Cards Grid (2 cards per row - 4x2 perfect grid) */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {FRANCHISE_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/85 hover:border-[#32aa15] p-4.5 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3.5 sm:gap-4 group hover:-translate-y-0.5 cursor-default relative overflow-hidden"
              >
                {/* Light Green Slide-Down Sweep Effect (Top to Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#eaf6dd] to-[#f4faee] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none rounded-2xl" />

                {/* Number Badge */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#32aa15] text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-sm group-hover:scale-105 transition-transform duration-300 font-['Wix_Madefor_Display',sans-serif]">
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1e6b0c] transition-colors leading-snug font-['Wix_Madefor_Display',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-slate-700 font-normal leading-relaxed mt-0.5 line-clamp-2 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
