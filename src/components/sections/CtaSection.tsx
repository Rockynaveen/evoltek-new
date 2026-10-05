import React from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  openModalWithOption?: (option: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ openModalWithOption }) => {
  return (
    <section className="w-full bg-white py-12 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] flex items-center group">
          {/* Background Card Image */}
          <img
            src="/charging_solutions_hub.jpg"
            onError={(e) => { (e.target as HTMLImageElement).src = '/hero 1.jpg'; }}
            alt="EV Charging Infrastructure background"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Dark Overlay Tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/50 z-10" />

          {/* Left Content Area */}
          <div className="relative z-20 p-8 sm:p-12 lg:p-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
              Ready to Invest in the Future of Mobility?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-medium leading-relaxed mt-4 mb-8">
              Join Evoltek and become part of the next generation of EV charging infrastructure.
            </p>

            <button
              onClick={() => openModalWithOption ? openModalWithOption('50/50 Joint Investment') : window.location.href = '#contact'}
              className="bg-[#32aa15] hover:bg-[#288a11] text-white font-extrabold text-base py-3.5 pl-7 pr-3 rounded-full inline-flex items-center gap-4 shadow-xl shadow-[#32aa15]/30 hover:scale-[1.02] transition-all cursor-pointer group/btn"
            >
              <span className="whitespace-nowrap">Invest With Evoltek</span>
              <div className="w-9 h-9 rounded-full bg-white text-[#32aa15] flex items-center justify-center shrink-0 shadow-sm group-hover/btn:bg-[#32aa15] group-hover/btn:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Bottom Right Cutout Call Us Badge (matching exact screenshot layout) */}
          <div className="absolute bottom-0 right-0 bg-white pt-3 pl-5 pr-6 pb-4 rounded-tl-[28px] hidden md:flex items-center gap-3 shadow-xl z-20">
            <div className="w-11 h-11 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 shadow-md">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Call Us Now</span>
              <a
                href="tel:18003865835"
                className="text-base font-black text-[#1C2029] hover:text-[#32aa15] transition-colors"
              >
                1800-386-5835
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
