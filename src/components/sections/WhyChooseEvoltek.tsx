import React from 'react';

export const WhyChooseEvoltek: React.FC = () => {
  return (
    <section id="why-choose-evoltek" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
          <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span>WHY CHOOSE EVOLTEK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#1C2029] tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
          Why partners trust our charging network
        </h2>
      </div>

      {/* Main 3-Column Diagram Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center max-w-6xl mx-auto relative">

        {/* LEFT COLUMN: 3 Features */}
        <div className="lg:col-span-4 space-y-10 sm:space-y-14 z-10">
          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-right">
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Shared Investment
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              Invest only half the project cost while Evoltek contributes the other half.
            </p>
            <div className="hidden lg:flex items-center absolute -right-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-full h-[2px] bg-gradient-to-r from-slate-200 via-[#32aa15]/50 to-[#32aa15] group-hover:from-[#32aa15] transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
            </div>
          </div>

          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-right">
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Hassle-Free Operations
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              Evoltek handles setup, operations and station maintenance.
            </p>
            <div className="hidden lg:flex items-center absolute -right-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-full h-[2px] bg-gradient-to-r from-slate-200 via-[#32aa15]/50 to-[#32aa15] group-hover:from-[#32aa15] transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
            </div>
          </div>

          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-right">
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Flexible Returns
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              Choose between percentage-based or fixed-return options.
            </p>
            <div className="hidden lg:flex items-center absolute -right-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-full h-[2px] bg-gradient-to-r from-slate-200 via-[#32aa15]/50 to-[#32aa15] group-hover:from-[#32aa15] transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Clean EV Charger Station Image */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4 lg:py-0 z-20">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl scale-75 pointer-events-none" />
          <div className="relative w-full flex justify-center py-2 group">
            <img
              src="/charging station 1.png"
              onError={(e) => { e.currentTarget.src = '/city chareger.png'; }}
              alt="Evoltek Fast Charging Station"
              className="w-56 sm:w-72 md:w-80 lg:w-84 h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(50,170,21,0.2)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: 3 Features */}
        <div className="lg:col-span-4 space-y-10 sm:space-y-14 z-10">
          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-left">
            <div className="hidden lg:flex items-center absolute -left-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
              <div className="w-full h-[2px] bg-gradient-to-r from-[#32aa15] via-[#32aa15]/50 to-slate-200 group-hover:to-[#32aa15] transition-all" />
            </div>
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Long-Term Agreement
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              5 or 10-year agreement options with renewal availability.
            </p>
          </div>

          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-left">
            <div className="hidden lg:flex items-center absolute -left-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
              <div className="w-full h-[2px] bg-gradient-to-r from-[#32aa15] via-[#32aa15]/50 to-slate-200 group-hover:to-[#32aa15] transition-all" />
            </div>
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Digital Transparency
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              Monitor station performance through the Evoltek mobile app.
            </p>
          </div>

          <div className="relative group p-5 rounded-2xl bg-white lg:bg-transparent hover:bg-slate-50/90 border border-slate-100/80 lg:border-none hover:shadow-lg lg:hover:shadow-none transition-all duration-300 lg:text-left">
            <div className="hidden lg:flex items-center absolute -left-12 top-1/2 -translate-y-1/2 w-12 z-20 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[#32aa15] shrink-0 shadow-[0_0_10px_#32aa15] group-hover:scale-125 transition-transform" />
              <div className="w-full h-[2px] bg-gradient-to-r from-[#32aa15] via-[#32aa15]/50 to-slate-200 group-hover:to-[#32aa15] transition-all" />
            </div>
            <h3 className="text-xl font-bold text-[#1C2029] tracking-tight mb-2 group-hover:text-[#32aa15] transition-colors">
              Scalable Network
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
              Build a growing EV charging network across strategic locations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
