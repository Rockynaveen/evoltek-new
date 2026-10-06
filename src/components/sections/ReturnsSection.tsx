import React from 'react';
import { Check, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface ReturnsSectionProps {
  openModalWithOption: (option: string) => void;
}

export const ReturnsSection: React.FC<ReturnsSectionProps> = ({ openModalWithOption }) => {
  return (
    <section id="returns" className="w-full bg-white py-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <Zap className="w-4 h-4 fill-[#32aa15]" />
            <span>INVESTMENT RETURNS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif] uppercase">
            Choose Your Return Model
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-snug">
            Tailored investment structures designed to maximize yield with 50/50 shared capital and hassle-free EVOLTEK management.
          </p>
        </div>

        {/* 2-CARD GRID MATCHING THE REFERENCE DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">

          {/* ================= OPTION A: PERCENTAGE RETURN ================= */}
          <div className="bg-[#d1e7a7] rounded-[32px] rounded-br-sm p-4 sm:p-6 md:p-7 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 border border-[#32aa15]/20 group relative">
            
            <div>
              {/* White Inner Top Header Card */}
              <div className="bg-white rounded-[26px] p-6 sm:p-8 shadow-sm border border-emerald-100/80 mb-6 sm:mb-8 relative">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[#32aa15] font-extrabold text-xs uppercase tracking-widest block mb-1">
                      OPTION A
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
                      Percentage Return
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#32aa15]/10 flex items-center justify-center text-[#32aa15] shrink-0">
                    <Zap className="w-6 h-6 fill-[#32aa15]" />
                  </div>
                </div>

                <p className="text-slate-500 text-sm font-medium mb-6">
                  High annual yield potential backed by long-term EV charging growth.
                </p>

                {/* Giant Metric Display */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
                  <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                    28%
                  </span>
                  <span className="text-slate-500 text-base sm:text-lg font-bold">
                    / Annual Return
                  </span>
                </div>
              </div>

              {/* Feature Bullet List */}
              <div className="space-y-4 px-2 sm:px-4 mb-8">
                {[
                  '28% Annual Return',
                  '10-Year Agreement',
                  'Renewal Option After 10 Years',
                  '50/50 Capital Collaboration',
                  'Complete EVOLTEK Operational Support',
                  'Real-time App Performance Monitoring'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 text-slate-800 font-semibold text-sm sm:text-base">
                    <div className="w-6 h-6 rounded-full bg-[#32aa15] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModalWithOption('Option A: 28% Percentage Return')}
                className="w-full py-4 px-6 bg-[#171E23] hover:bg-[#32aa15] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md group-hover:shadow-lg cursor-pointer"
              >
                <span>CHOOSE PERCENTAGE MODEL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* ================= OPTION B: FIXED MONTHLY RETURN (RECOMMENDED CARD) ================= */}
          <div className="bg-[#172219] rounded-[32px] rounded-br-sm p-4 sm:p-6 md:p-7 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(50,170,21,0.25)] transition-all duration-300 border-2 border-[#32aa15]/40 relative group">
            
            {/* Recommended Pill Badge floating on top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[#32aa15] text-white font-extrabold text-xs tracking-wider uppercase px-5 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                RECOMMENDED
              </span>
            </div>

            <div>
              {/* Vibrant Green Inner Top Header Card */}
              <div className="bg-[#32aa15] rounded-[26px] p-6 sm:p-8 shadow-md text-white mb-6 sm:mb-8 relative mt-2">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-emerald-100 font-extrabold text-xs uppercase tracking-widest block mb-1">
                      OPTION B
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-['Wix_Madefor_Display',sans-serif]">
                      Fixed Return
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0 backdrop-blur-sm">
                    <Zap className="w-6 h-6 fill-white" />
                  </div>
                </div>

                <p className="text-emerald-50 text-sm font-medium mb-6">
                  Predictable, steady monthly cashflow for consistent financial growth.
                </p>

                {/* Giant Metric Display */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-white/20">
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    5%
                  </span>
                  <span className="text-emerald-100 text-base sm:text-lg font-bold">
                    / Monthly Return
                  </span>
                </div>
              </div>

              {/* Feature Bullet List (Dark Theme) */}
              <div className="space-y-4 px-2 sm:px-4 mb-8 text-white">
                {[
                  '5% Fixed Monthly Payout',
                  '5-Year Agreement',
                  'Guaranteed Regular Monthly Income',
                  '50/50 Capital Collaboration',
                  'Hassle-Free EVOLTEK Operations',
                  'Priority Station Allocation'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 font-semibold text-sm sm:text-base text-slate-100">
                    <div className="w-6 h-6 rounded-full bg-[#32aa15] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModalWithOption('Option B: 5% Fixed Return')}
                className="w-full py-4 px-6 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#32aa15]/30 cursor-pointer active:scale-98"
              >
                <span>CHOOSE FIXED MODEL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
